import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/quiz">View Questions</Link>
      <Link to="/results">Results</Link>
    </nav>
  );
}

export default Nav;
