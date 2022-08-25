import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <div>
               <Link className="title" to="/">Hi! I'm Jawid N<span className="double-o">⎌</span>ri</Link>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contanct</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;