import profilePhoto from '../assets/images/pic.jpg'
import resImages from '../assets/images/res.png'
import resPdfFile from '../assets/files/Resume.pdf'
const Profile = () => {
    return (  
        <div className="container about">
            <h1>Profile</h1>
            <div className='row'>
                <div className="col-sm-11 col-md-3">
                    <h2 className='p-2'>Bio:</h2>
                    <h6 className='text-white p-2'>
                        I am a <span style={{color: '#FFFACD'}}> Full Stack Web Developer </span>
                        and  a <span style={{color: '#FFFACD'}}> Civi Engineer </span> based on my patience, I decided to continue my jouuney in Coding.
                        My favorite Language is Javascript, my favorite Library is React JS, and my favorite Databse is MongoDB. I can build an App from scratch to the end.
                        Love to learn new things, highly Motivated, Enthusiastic and Energitc.
                        I believe in my abilities that can bring changes in the work feild.
                    </h6>
                </div>
                <div className="col-sm-11 col-md-3 position-relative">
                    <img src={profilePhoto} alt="It's Me" style={{width: "100%", height: "100%", borderRadius: "0.5rem", margin: 0}}/>
                    <div className='overlay position-absolute'></div>
                </div>
                <div className="col-sm-11 col-md-3 d-flex flex-column flex-start">
                    <h2 className='p-1'>Details:</h2>
                    <h3>Name:</h3>
                    <p className='text-white'>Jawid Noori</p>
                    <h3>Age:</h3>
                    <p className='text-white'>29</p>
                    <h3>Location</h3>
                    <p className='text-white'>Seattle, Washigton</p>
                    <h3>Willing to relocate?</h3>
                    <p className='text-white'>True</p>
                </div>
            </div>
            <div className="row d-flex flex column">
                <h2>Resume</h2>
                <div className="col-sm-11 col-md-4 d-flex flex-column m-2">
                    <img className='resume-image' src={resImages} alt="resume"  style={{width: "100%", height: "100%",}}/>
                    <a className='download-resume' href={resPdfFile} download>Click to download</a>
                </div>
            </div>   
        </div>
    );
}
 
export default Profile;
