import { useState } from "react";

export function EmployeeDetails() {
  const [changedvalue, setChangedvalue] = useState({});

  const Storevalue = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setChangedvalue({
      ...changedvalue,
      [name]: value,
    });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://fakestoreapi.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(changedvalue),
        }
      );

      const data = await response.json();

      console.log("API Response:", data);
      alert("Employee details submitted successfully!");
    } catch (error) {
      console.error("API Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="container mt-4">
      <h1>Employee Details Form</h1>

      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          name="employeename"
          placeholder="Enter Your Name"
          className="form-control mb-3"
          onChange={Storevalue}
          required
        />

        <input
          type="number"
          name="employeeid"
          placeholder="Enter Your ID"
          className="form-control mb-3"
          onChange={Storevalue}
          required
        />

        <input
          type="text"
          name="employeedep"
          placeholder="Enter Your Department"
          className="form-control mb-3"
          onChange={Storevalue}
          required
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );

  







  