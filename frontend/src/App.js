/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [reportText, setReportText] = useState("");
  const [reports, setReports] = useState([]);

  const userId = "user123"; // Hardcoded for demo

  const uploadReport = async () => {
    const res = await axios.post("http://localhost:4000/api/reports/upload", {
      userId,
      reportText,
    });
    setReports([res.data, ...reports]);
    setReportText("");
  };

  useEffect(() => {
    axios.get(`http://localhost:4000/api/reports/${userId}`)
      .then(res => setReports(res.data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload Medical Report</h2>
      <textarea 
        value={reportText} 
        onChange={e => setReportText(e.target.value)}
        placeholder="Paste medical report text here"
        rows={5} 
        style={{ width: "100%" }}
      />
      <button onClick={uploadReport}>Upload & Analyze</button>

      <h3>Previous Reports</h3>
      {reports.map(report => (
        <div key={report._id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
          <p><strong>Report:</strong> {report.reportText}</p>
          {report.aiAnalysis && (
            <>
              <p><strong>Summary:</strong> {report.aiAnalysis.summary}</p>
              <p><strong>Risk Level:</strong> {report.aiAnalysis.riskLevel}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

