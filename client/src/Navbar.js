import { Link } from 'react-router-dom';

const Navbar = () => {
  return (  
    <nav className="navbar">
      <h1>Lob API to DB</h1>
      <div className="links">
        <Link to="/postuser">Add a new user</Link>
        <Link to="/postevent">Add a new event</Link>
        <Link to="/getusers">View all users</Link>
        <Link to="/getevents">View all events</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;