import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Calculator() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [marks1, setMarks1] = useState("");
  const [marks2, setMarks2] = useState("");
  const [marks3, setMarks3] = useState("");
  const [error, setError] = useState("");

  const calculateGrade = () => {
    if (
      name.trim() === "" ||
      marks1 === "" ||
      marks2 === "" ||
      marks3 === ""
    ) {
      setError("Please fill all the fields.");
      return;
    }

    const m1 = Number(marks1);
    const m2 = Number(marks2);
    const m3 = Number(marks3);

    if (
      m1 < 0 || m1 > 100 ||
      m2 < 0 || m2 > 100 ||
      m3 < 0 || m3 > 100
    ) {
      setError("Marks must be between 0 and 100.");
      return;
    }

    setError("");

    const total = m1 + m2 + m3;
    const average = total / 3;

    let grade;

    if (average >= 90) {
      grade = "A+";
    } else if (average >= 80) {
      grade = "A";
    } else if (average >= 70) {
      grade = "B";
    } else if (average >= 60) {
      grade = "C";
    } else if (average >= 50) {
      grade = "D";
    } else {
      grade = "F";
    }

    const newResult = {
      id: Date.now(),
      name,
      marks1: m1,
      marks2: m2,
      marks3: m3,
      total,
      average: average.toFixed(2),
      grade
    };

    // Get previous results
    const oldResults =
      JSON.parse(localStorage.getItem("studentResults")) || [];

    // Add new result
    const updatedResults = [...oldResults, newResult];

    // Save results
    localStorage.setItem(
      "studentResults",
      JSON.stringify(updatedResults)
    );

    // Show current result
    navigate("/result");
  };

  return (
    <div className="container">
      <h1>Grade Calculator</h1>

      {error && <p className="error">{error}</p>}

      <label>Student Name</label>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Subject 1 Marks</label>

      <input
        type="number"
        placeholder="Enter marks"
        value={marks1}
        onChange={(e) => setMarks1(e.target.value)}
      />

      <label>Subject 2 Marks</label>

      <input
        type="number"
        placeholder="Enter marks"
        value={marks2}
        onChange={(e) => setMarks2(e.target.value)}
      />

      <label>Subject 3 Marks</label>

      <input
        type="number"
        placeholder="Enter marks"
        value={marks3}
        onChange={(e) => setMarks3(e.target.value)}
      />

      <button onClick={calculateGrade}>
        Calculate Grade
      </button>
    </div>
  );
}

export default Calculator;