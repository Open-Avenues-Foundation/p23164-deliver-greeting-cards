import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Lob API to DB</h1>
      </Link>
      <div className="links">
        <Link to="/postuser">Add a new user</Link>
        <Link to="/getusers">View all users</Link>
        <Link to="/events">Events</Link>
      </div>
    </nav>
  );
};

export default Navbar;
