import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column min-vh-100">
      <h2>Error 404</h2>
      <h3>The page cannot be found</h3>
      <Link style={{color: "white", fontSize: "1.5rem", backgroundColor: "rgba(118, 144, 145, 0.7)", padding: "0.4rem", borderRadius: "0.3rem"}} to="/">Back to the homepage...</Link>
    </div>
  );
}
 
export default NotFound;
