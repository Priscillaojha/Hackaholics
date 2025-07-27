import React from "react";
import "./MedicalReportForm.css";

const MedicalReportForm: React.FC = () => {
  return (
    <div className="form-wrapper">
      <div className="form-header">
        <svg
          className="wave"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#d6dcbe"
            d="M0,96L80,112C160,128,320,160,480,165.3C640,171,800,149,960,133.3C1120,117,1280,107,1360,101.3L1440,96V0H1360C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0H0Z"
          ></path>
        </svg>
        <h1>Medical Report</h1>
      </div>

      <form className="medical-form">
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="First Name" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
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
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <label>Your Address</label>
        <input type="text" placeholder="Current Address" className="full-width" />

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

        <label>Is the patient diagnosed with chronic disease?</label>
        <input type="text" className="full-width" />

        <label>If yes, please upload your diagnosed documents.</label>
        <div className="upload-box">
          <p>📄 Drop your files here, or <a href="#">click to browse</a></p>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default MedicalReportForm;
