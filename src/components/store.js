const ProjectList = () => {
    return (  
        <div className="container project-container">
            <div className="row">
                <div className="card col-sm-11 col-md-5">
                    <div className="card-header col-sm-12 d-flex flex-row">
                        <h3>DND Character Creator</h3>
                            <a href="https://guarded-bayou-66527.herokuapp.com/">
                                <img src={p1} alt="one view of the project"/>
                            </a>
                    </div>
                    <div className="card-body col-sm-12">
                        <h3>Info</h3>
                            <p>
                                This is a character creator application for D{"&"}D Game, Dangen and Dragon is a very famous game thesee days, Millions of people are playing this game with each other, With this Application, the player can create a Character in 5 mins maximun but without this App! a player to create a Character, it takes between 20 mins up to 2 hours, depending to the player scale and experience. it's a very exact and useful application. 
                            </p>
                        <a href="https://github.com/Jean424/DnD-Character-Creater">Check the code here</a>
                    </div>
                </div>
                <div className="card col-sm-11 col-md-5">
                    <div className="card-header col-sm-12 d-flex flex-row">
                        <h3>Get Outside</h3>
                        <a href="https://pdubya1632.github.io/Get-Outside/">
                            <img src={p2} alt="one view of the project" />
                        </a>
                    </div>
                    <div className="card-body col-sm-12">
                        <h3>Info</h3>
                            <p>
                                This is a simple application for searching the top rated Hiking Places near the User, We used Google Api and OpenWeatherMap Api for this application. The application was deployed but not running at the moment for security reasons. We built this application from scratch and our focus was on creating UI by using a CSS Framework, using a new API. 
                            </p>
                        <a href="https://github.com/pdubya1632/Get-Outside">Check the code here</a>
                    </div>
                </div>    
                <div className="card col-sm-11 col-md-5">
                    <div className="card-header col-sm-12 d-flex flex-row">
                        <h3>Note Keeper</h3>
                        <a href="https://note-keeper-01.herokuapp.com/">
                            <img src={p3} alt="one view of the project" />
                        </a>
                    </div>
                    <div className="card-body col-sm-12">
                        <h3>Info</h3>
                            <p>
                                This is a Note Taker application, User can create new notes, can look at the previous notes and the time which was created, User can Edit the notes or delete them. This application deployed to Heroku and is running on Heroku Server right now. Our focus was on Node.js creating routes and using FS package for reading and writing files.
                            </p>
                        <a href="https://github.com/Jawidanfar1015/Note-Keeper">Check the code here</a>
                    </div>
                </div>
                <div className="card col-sm-11 col-md-5">
                    <div className="card-header col-sm-12 d-flex flex-row">
                        <h3>Weather Check</h3>
                        <a href="https://jawidanfar1015.github.io/Weather-Check/">
                            <img src={p4} alt="one view of the project" />
                        </a>
                    </div>
                    <div className="card-body col-sm-12">
                        <h3>Info</h3>
                            <p>
                                This is a Weather app, I used OpenWeatherMap Api for this application. the user can search for a city to get the current and the five upcoming days weather. User Will have access to the search history in the app for faster search. Our focus was on UI, creating dynamic elements and using the Api. 
                            </p>
                        <a href="https://github.com/Jawidanfar1015/Weather-Check/tree/main">Check the code here</a>
                    </div>
                </div>
            </div>    
        </div>
    );
}
 
export default ProjectList;

