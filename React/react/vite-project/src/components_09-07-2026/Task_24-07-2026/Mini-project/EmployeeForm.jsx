import { useState } from "react";

function EmployeeForm({ addEmployee }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  // Dynamic Form Handling
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form Validation
  const validate = () => {
    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    addEmployee(formData);

    // Clear form
    setFormData({
      name: "",
      email: "",
    });

    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <h2>Add Employee</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />

      {/* Conditional Rendering */}
      {errors.name && (
        <p className="error">{errors.name}</p>
      )}

      <input
        type="text"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />

      {/* Conditional Rendering */}
      {errors.email && (
        <p className="error">{errors.email}</p>
      )}

      <button type="submit">
        Add Employee
      </button>
    </form>
  );
}

export default EmployeeForm
const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value,
  });
};
