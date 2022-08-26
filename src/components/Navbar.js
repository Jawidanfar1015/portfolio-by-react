import { Link, useResolvedPath, useMatch } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar d-flex justify-content-between">
            <div>
               <Link className="title" to="/">Hi! I'm Jawid N<span className="double-o">⎌</span>ri</Link>
            </div>
            <div className="links">
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/profile">Profile</CustomLink>
                <CustomLink to="/projects">Projects</CustomLink>
                <CustomLink to="/contact">Contanct</CustomLink>
            </div>
        </nav>
    );
}
 
function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    
    return (
        <Link className={isActive? "active" : ""} to={to} {...props}>
            {children}
        </Link>
    )
}


export default Navbar;