import React, { useState } from "react";

function DynamicForm() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    course: "",
    gender: "",
    skills: [],
    file: null,
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        skills: [...formData.skills, value],
      });
    } 
    else {
      setFormData({
        ...formData,
        skills: formData.skills.filter(
          (skill) => skill !== value
        ),
      })
    }
  }


  const handleFile = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  // Handles Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", formData.name);
    console.log("Message:", formData.message);
    console.log("Course:", formData.course);
    console.log("Gender:", formData.gender);
    console.log("Skills:", formData.skills);
    console.log("File:", formData.file);
  };

  return (
    <div>
      <h1>Dynamic Form Handling</h1>

      <form onSubmit={handleSubmit}>

        {/* 1. Text Field */}
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <br /><br />

        {/* 2. Text Area */}
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />

        <br /><br />

        {/* 3. Dropdown */}
        <label>Course:</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
        >
          <option value="">Select Course</option>
          <option value="React">React</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
        </select>

        <br /><br />

        {/* 4. Radio Buttons */}
        <label>Gender:</label>

        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange}
        />
        Male

        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleChange}
        />
        Female

        <br /><br />

        {/* 5. Checkboxes */}
        <label>Skills:</label>

        <input
          type="checkbox"
          value="HTML"
          checked={formData.skills.includes("HTML")}
          onChange={handleCheckbox}
        />
        HTML

        <input
          type="checkbox"
          value="CSS"
          checked={formData.skills.includes("CSS")}
          onChange={handleCheckbox}
        />
        CSS

        <input
          type="checkbox"
          value="JavaScript"
          checked={formData.skills.includes("JavaScript")}
          onChange={handleCheckbox}
        />
        JavaScript

        <br /><br />
        {/* 6. File Input */}
        <label>Upload File:</label>
        <input
          type="file"
          onChange={handleFile}
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DynamicForm;