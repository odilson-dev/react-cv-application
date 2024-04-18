import { useState } from "react";
import "../styles/style.css";

function EducationalExperience({ className }) {
  // State to hold form input values
  const [formData, setFormData] = useState({
    schoolName: "",
    titleOfStudy: "",
    dateOfStudy: "",
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
        <h2>Educational Experience</h2>
        <form onSubmit={handleSubmit}>
          <label>
            School Name:
            <input
              type="text"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Title Of Study:
            <input
              type="text"
              name="titleOfStudy"
              value={formData.titleOfStudy}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Date of Study:
            <input
              name="dateOfStudy"
              type="date"
              value={formData.dateOfStudy}
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
        <h2>Educational Experience</h2>
        <p>School Name: {formData.schoolName}</p>
        <p>Title of Study: {formData.titleOfStudy}</p>
        <p>Date of Study: {formData.dateOfStudy}</p>
        <button onClick={handleEdition}>Edit</button>
      </div>
    );
  }
}

export default EducationalExperience;
