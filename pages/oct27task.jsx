import { useState } from "react";

export function Greet() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [result, setResult] = useState(false);

  return (
    <div className="container mt-5">
      <style>
        {`
          .btn {
            background-color: hotpink;
            color: black;
          }
        `}
      </style>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        className="form-control mb-3"
        placeholder="Enter age"
        onChange={(e) => setAge(e.target.value)}
      />

      <button
        className="btn"
        onClick={() => setResult(true)}
      >
        Submit
      </button>

      {result && (
        <h3 className="mt-3">
          Hi, I am {name} 😄, my age is {age}
        </h3>
      )}
    </div>
  );
}

export function DateTime() {
  const [date, setDate] = useState("");

  return (
    <div className="container my-5">
      <h3>Hi 👋, Click Me to See the Current Date & Time!</h3>
      <button
        className="btn"
        onClick={() => setDate(new Date().toLocaleString())}
      >
        Show Date & Time
      </button>

      <h4 className="mt-3">{date}</h4>
    </div>
  );
}
