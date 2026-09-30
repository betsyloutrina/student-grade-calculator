import { useState } from "react";

function Result() {
  const [results, setResults] = useState(
    JSON.parse(localStorage.getItem("studentResults")) || []
  );

  const clearResults = () => {
    localStorage.removeItem("studentResults");
    setResults([]);
  };

  return (
    <div className="container">
      <h1>Previous Results</h1>

      {results.length === 0 ? (
        <p>No results available yet.</p>
      ) : (
        <>
          {results.map((result) => (
            <div className="result-box" key={result.id}>
              <h2>{result.name}</h2>

              <p>Subject 1: {result.marks1}</p>
              <p>Subject 2: {result.marks2}</p>
              <p>Subject 3: {result.marks3}</p>

              <hr />

              <h3>Total Marks: {result.total}</h3>
              <h3>Average: {result.average}</h3>
              <h3>Grade: {result.grade}</h3>
            </div>
          ))}

          <button onClick={clearResults}>
            Clear All Results
          </button>
        </>
      )}
    </div>
  );
}

export default Result;