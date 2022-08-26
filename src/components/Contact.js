import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer.js" 

const Contact = () => {
    return (
        <div className="positoin-relative d-flex justify-content-center align-items-center flex-column min-vh-100">
            <div className="container contacts d-flex justify-content-center align-items-center flex-wrap">
                <div className="contact-form col-sm-10 col-md-5">
                    <div className="contact">
                        <div className="row">
                            <h2><FontAwesomeIcon icon={faUser} /></h2>
                            <h2>Jawid Noori</h2>
                        </div>
                        <div className="row">
                            <h2><FontAwesomeIcon icon={faSquareEnvelope} /></h2>
                            <a className="email-link" href="mailto:hajikaka4030@gmail.com">Hajikaka4030@gmail.com</a>
                        </div>
                        <div className="row">
                            <h2><FontAwesomeIcon icon={faSquarePhone} /></h2>
                            <h2>{"+1 (206) 588-6031"}</h2>
                        </div>
                    </div>
                </div> 
                <div class="form-container col-sm-10 col-md-5">
                    <div className="d-flex flex-start">
                        <h5>Please let me know what you think:</h5>
                    </div>
                    <form target="_blank" action="https://formsubmit.co/7b7248ff4967ecc562b668d311c1417b" method="POST">
                        <div class="form-group">
                            <div class="d-flex flex-row">
                                <div class="col m-1">
                                <input type="text" name="name" class="form-control" placeholder="Full Name" required/>
                                </div>
                                <div class="col m-1">
                                <input type="email" name="email" class="form-control" placeholder="Email Address" required/>
                                </div>
                            </div>
                        </div>
                        <div class="form-group m-1">
                            <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-sm btn-dark btn-block m-1">Submit Form</button>
                    </form>
                </div>
            </div> 
            <footer className="footer col-12 text-center position-absolute">
                <Footer />
            </footer>
        </div>
    );
}
 
export default Contact;
