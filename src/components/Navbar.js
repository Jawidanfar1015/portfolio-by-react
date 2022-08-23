import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
               <Link className="title" to="/">Hi! I'm Jawid N<span className="double-o">⎌</span>ri</Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contanct</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;