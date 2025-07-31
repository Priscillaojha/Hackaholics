const express = require("express");
const Report = require("../models/Reports");
const axios = require("axios");
const router = express.Router();

async function analyzeWithBioGPT(text) {
  const res = await axios.post("http://localhost:8000/analyze", { text });
  return {
    summary: res.data.summary,
    riskLevel: detectRisk(res.data.summary),
    recommendations: []
  };
}

function detectRisk(summary) {
  if (summary.toLowerCase().includes("critical")) return "High";
  if (summary.toLowerCase().includes("elevated")) return "Medium";
  return "Low";
}

router.post("/upload", async (req, res) => {
  try {
    const { userId, reportText } = req.body;

    // Save report first
    const report = await Report.create({ userId, reportText });

    // AI analysis
    const aiAnalysis = await analyzeWithBioGPT(reportText);

    // Save AI result
    report.aiAnalysis = aiAnalysis;
    await report.save();

    res.json(report);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error analyzing report" });
  }
});

router.get("/:userId", async (req, res) => {
  const reports = await Report.find({ userId: req.params.userId }).sort({ createdAt: -1 });
  res.json(reports);
});
console.log("Loading Report model from:", __dirname + "/../models/Report.js");


module.exports = router;
