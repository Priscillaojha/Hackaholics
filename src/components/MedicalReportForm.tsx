
// import React from "react";
import "./MedicalReportForm.css";

const MedicalReportForm = () => {
  return (
    <div className="form-container">
      <div className="header">
        <h1>Medical Report</h1>
        <div className="wave"></div>
      </div>

      <form className="form-content">
        <div className="form-row">
          <div className="form-group">
            <label>Patient’s Full Name</label>
            <input type="text" placeholder="First Name" />
          </div>
          <div className="form-group">
            <label>&nbsp;</label>
            <input type="text" placeholder="Last Name" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Date Of Birth</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select>
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="form-group full">
          <label>Your Address</label>
          <input type="text" placeholder="Current Address" />
        </div>

        <div className="form-row">
          <div className="form-group">
            <input type="text" placeholder="City" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="State / Province" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="(000) 000-000" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="myname@example.com" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Height</label>
            <input type="text" placeholder="in cm" />
          </div>
          <div className="form-group">
            <label>Weight</label>
            <input type="text" placeholder="0 kg" />
          </div>
        </div>

        <div className="form-group full">
          <label>Is the patient diagnosed with chronic disease?</label>
          <input type="text" />
        </div>

        <div className="form-group full">
          <label>If yes, please upload your diagnosed documents.</label>
          <div className="upload-box">
            <p>Drop your files here, or <span>click the browse</span></p>
          </div>
        </div>

        <div className="form-group full text-right">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default MedicalReportForm;
