# ai_service.py
from fastapi import FastAPI, Request
from transformers import AutoTokenizer, AutoModelForCausalLM
import torch, os

app = FastAPI()

# Use a smaller model first; switch to "microsoft/BioGPT-Large" after it works
MODEL_ID = os.getenv("MODEL_ID", "microsoft/biogpt")

# Choose device: Apple Silicon (mps) > CUDA > CPU
if torch.backends.mps.is_available():
    DEVICE = "mps"
elif torch.cuda.is_available():
    DEVICE = "cuda"
else:
    DEVICE = "cpu"

tokenizer = AutoTokenizer.from_pretrained(MODEL_ID)
# BioGPT uses a causal LM head
model = AutoModelForCausalLM.from_pretrained(MODEL_ID)

# Some tokenizers don’t define pad_token; set it to eos to avoid warnings
if tokenizer.pad_token_id is None:
    tokenizer.pad_token = tokenizer.eos_token

model.to(DEVICE)
model.eval()

@app.get("/health")
async def health():
    return {"status": "ok", "model": MODEL_ID, "device": DEVICE}

@app.post("/analyze")
async def analyze(req: Request):
    data = await req.json()
    text = (data.get("text") or "").strip()
    if not text:
        return {"error": "text is required"}

    # Simple prompt; you can design better templates later
    prompt = f"Summarize the following medical report and highlight risks:\n{text}\nSummary:"

    inputs = tokenizer(prompt, return_tensors="pt").to(DEVICE)

    with torch.no_grad():
        out_ids = model.generate(
            **inputs,
            max_new_tokens=160,     # keep modest for CPU latency
            do_sample=False,        # deterministic output
            pad_token_id=tokenizer.pad_token_id,
            eos_token_id=tokenizer.eos_token_id,
        )

    output = tokenizer.decode(out_ids[0], skip_special_tokens=True)

    # Strip echoed prompt if present
    if "Summary:" in output:
        output = output.split("Summary:", 1)[-1].strip()

    return {"summary": output}
