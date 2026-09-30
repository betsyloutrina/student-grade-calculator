import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Student Grade Calculator</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/result">Result</Link>
      </div>
    </nav>
  );
}

export default Navbar;