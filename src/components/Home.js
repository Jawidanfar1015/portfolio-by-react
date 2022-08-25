import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { Link }  from 'react-router-dom';

const Home = () => {
    return (
        <div className="container home">
            <h1 className="p-2 mb-4">Welcome</h1>
            <h2>I'm a Full Stack Web Developer</h2>
            <p>Please visit the following pages</p>
            <div className="box d-flex flex-column">
                <div className="col-sm-4 border mb-2">
                    <Link to='/profile' className="d-flex  justify-content-between">  
                        <h2>Profile</h2>
                        <h2><FontAwesomeIcon icon={faUserCheck} /></h2>
                    </Link> 
                </div>
                <div className="col-sm-6 border mb-2">
                    <Link to='/projects' className="d-flex  justify-content-between"> 
                        <h2>Projects</h2>
                        <h2><FontAwesomeIcon icon={faDiagramProject} /></h2>
                    </Link> 
                </div>
                <div className="col-sm-8 border mb-5">
                    <Link to='/contact' className="d-flex  justify-content-between">
                        <h2>Contact</h2>
                        <h2><FontAwesomeIcon icon={faAddressBook} /></h2>
                    </Link>   
                </div>
            </div>
        </div>   
    );
}
 
export default Home;
