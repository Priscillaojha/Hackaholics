HEllo this team Hackholics 
    Team member:
        Niya Rai
        Pricilla Ojha
        Kashuv Panday
        Sanjaya Pun Magar

AI Medical Report Analyzer
    This full-stack web application allows users to upload medical reports (in plain text), which are analyzed using BioGPT, a transformer-based medical language model. The AI analyzes and summarizes key medical conditions, risk factors, and diseases present in the report.

Tech Stack

    AI Service: FastAPI + BioGPT (HuggingFace)

    Backend API: Node.js + Express + MongoDB

    Frontend: React.js + Axios

    Package Managers: pip (Python), npm (Node.js)

How to get this fullstack web application in your local pc?
    1. Clone the Repository
        git clone https://github.com/your-username/AI-Medical-Report-Analysis.git

    2.Now to go this "AI-Medical-Report-Analysis" folder

    3.AI Service (FastAPI + BioGPT)
        Setup:
            cd ai-service
            python3 -m venv venv
            source venv/bin/activate
            pip install -r requirements.txt

        Run AI Service:(In terminal)
            uvicorn ai_service:app --reload --host 0.0.0.0 --port 8000

        Health Check:
            Visit: http://localhost:8000/health  

    4.Backend (Node.js + Express + MongoDB)
        Setup:
            cd ../backend
            cp .env.example .env
            # Edit .env to match your MongoDB URI and AI service URL
            npm install 

        Run Server:
            node server.js

        Sample .env:
            MONGO_URI=mongodb://localhost:27017/medical_reports
            AI_SERVICE_URL=http://localhost:8000

        Backend runs on http://localhost:4000

    5.Frontend(React)
        Setup
            cd ../frontend
            npm install

        Run Frontend:
            npm start

        Frontend runs on: http://localhost:3000

Created by Hackaholics