const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  userId: String,
  reportText: String,
  aiAnalysis: {
    summary: String,
    riskLevel: String,
    recommendations: [String]
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Report", ReportSchema);
