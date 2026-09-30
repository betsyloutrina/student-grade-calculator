import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Student Grade Calculator</h1>

      <p>
        Welcome to the Student Grade Calculator.
      </p>

      <p>
        Enter your subject marks and calculate your
        total marks, average and grade easily.
      </p>

      <Link to="/calculator">
        <button>Start Calculator</button>
      </Link>
    </div>
  );
}

export default Home;