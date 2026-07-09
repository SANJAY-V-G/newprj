import React, { useState } from "react";

function App() {

  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    regNo: "",
    department: "",
    dob: "",
    category: "",
    specialization: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch("http://localhost:5000/students", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(student)

      });

      const data = await response.json();

      alert(data.message);

      setStudent({
        firstName: "",
        lastName: "",
        regNo: "",
        department: "",
        dob: "",
        category: "",
        specialization: ""
      });

    }
    catch (err) {

      alert("Server Connection Failed");

    }

  };

  return (

    <div
      style={{
        width: "700px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid gray",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px lightgray"
      }}
    >

      <h2 align="center">Student Management System</h2>

      <form onSubmit={handleSubmit}>

        <label>First Name</label>

        <br />

        <input
          type="text"
          name="firstName"
          value={student.firstName}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px" }}
        />

        <br /><br />

        <label>Last Name</label>

        <br />

        <input
          type="text"
          name="lastName"
          value={student.lastName}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px" }}
        />

        <br /><br />

        <label>Registration Number</label>

        <br />

        <input
          type="text"
          name="regNo"
          value={student.regNo}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px" }}
        />

        <br /><br />

        <label>Department</label>

        <br />

        <select
          name="department"
          value={student.department}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px" }}
        >

          <option value="">Select Department</option>

          <option value="CSE">CSE</option>

          <option value="IT">IT</option>

          <option value="ECE">ECE</option>

          <option value="EEE">EEE</option>

          <option value="MECH">MECH</option>

          <option value="CIVIL">CIVIL</option>

        </select>

        <br /><br />

        <label>Date of Birth</label>

        <br />

        <input
          type="date"
          name="dob"
          value={student.dob}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px" }}
        />

        <br /><br />

        <label>Category</label>

        <br /><br />

        <input
          type="radio"
          name="category"
          value="Placement & Training"
          checked={student.category === "Placement & Training"}
          onChange={handleChange}
        />

        Placement & Training

        <br />

        <input
          type="radio"
          name="category"
          value="Higher Studies"
          checked={student.category === "Higher Studies"}
          onChange={handleChange}
        />

        Higher Studies

        <br />

        <input
          type="radio"
          name="category"
          value="Higher Studies + Placement & Training"
          checked={student.category === "Higher Studies + Placement & Training"}
          onChange={handleChange}
        />

        Higher Studies + Placement & Training

        <br /><br />

        <label>Specialization (300 words)</label>

        <br />

        <textarea
          name="specialization"
          rows="8"
          value={student.specialization}
          onChange={handleChange}
          placeholder="Enter your specialization"
          style={{
            width: "100%",
            padding: "8px"
          }}
        />

        <br /><br />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Submit
        </button>

      </form>

    </div>

  );

}

export default App;