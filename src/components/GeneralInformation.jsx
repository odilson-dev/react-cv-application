import { useState } from "react";

function GeneralInformation() {
  // State to hold form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
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
    // You can perform any action here, such as submitting the data to a server
    console.log(formData);
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
      <div>
        <h2>General Information</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Phone Number:
            <input
              name="phoneNumber"
              type=""
              value={formData.phoneNumber}
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
      <div>
        <h2>General Information</h2>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Phone Number: {formData.phoneNumber}</p>
        <button onClick={handleEdition}>Edit</button>
      </div>
    );
  }
}

export default GeneralInformation;
