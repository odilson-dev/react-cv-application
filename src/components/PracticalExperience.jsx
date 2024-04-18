import { useState } from "react";
import "../styles/style.css";
function PracticalExperience({ className }) {
  // State to hold form input values
  const [formData, setFormData] = useState({
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    startDate: "",
    endDate: "",
  });
  const [isOnEdit, setIsOnEdit] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setIsOnEdit(false);
  };
  // Handle form Edition
  const handleEdition = (e) => {
    e.preventDefault();
    setIsOnEdit(true);
  };
  console.log(isOnEdit);
  if (isOnEdit) {
    return (
      <div className={className}>
        <h2>Practical Experience</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Company Name:
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Position Title:
            <input
              type="text"
              name="positionTitle"
              value={formData.positionTitle}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Main Responsibilities:
            <textarea
              name="mainResponsibilities"
              type="text"
              value={formData.mainResponsibilities}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Start Date:
            <input
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            End Date:
            <input
              name="endDate"
              type="text"
              value={formData.endDate}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className={className}>
        <h2>Practical Experience</h2>
        <p>Company Name: {formData.companyName}</p>
        <p>Position Title: {formData.positionTitle}</p>
        <p>Main Responsibilities: {formData.mainResponsibilities}</p>
        <p>Start Date: {formData.startDate}</p>
        <p>End Date: {formData.endDate}</p>
        <button onClick={handleEdition}>Edit</button>
      </div>
    );
  }
}

export default PracticalExperience;
