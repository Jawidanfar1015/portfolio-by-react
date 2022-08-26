import ProjectsList from "./ProjectsList";
import p1 from '../assets/images/dnd.png';
import p2 from '../assets/images/getOutside.png';
import p3 from '../assets/images/note.png';
import p4 from '../assets/images/weather.png';

const Projects = () => {

    const projects = ([
        {
          "title": "DnD Character Creator",
          "description": "This is a character creator application for D&D Game, Dangen and Dragon is a very famous game thesee days, Millions of people are playing this game with each other, With this Application, the player can create a Character in 5 mins maximun but without this App! a player to create a Character, it takes between 20 mins up to 2 hours, depending to the player scale and experience.\n it's a very exact and useful application.",
          "image": p1,
          "link": "https://guarded-bayou-66527.herokuapp.com/",
          "github_link": "https://github.com/Jean424/DnD-Character-Creater",
          "id": 1
        },
        {
            "title": "Get Outside",
            "description": "This is a simple application for searching the top rated Hiking Places near the User, We used Google Api and OpenWeatherMap Api for this application. The application was deployed but not running at the moment for security reasons.\n We built this application from scratch and our focus was on creating UI by using a CSS Framework, using a new API.",
            "image": p2,
            "link": "https://pdubya1632.github.io/Get-Outside/",
            "github_link": "https://github.com/pdubya1632/Get-Outside",
            "id": 2
          },
          {
            "title": "Note Keeper",
            "description": "This is a Note Taker application, User can create new notes, can look at the previous notes and the time which was created, User can Edit the notes or delete them.\n This application deployed to Heroku and is running on Heroku Server right now.\n Our focus was on Node.js creating routes and using FS package for reading and writing files.",
            "image": p3,
            "link": "https://note-keeper-01.herokuapp.com/",
            "github_link": "https://github.com/Jawidanfar1015/Note-Keeper",
            "id": 3
          },
          {
            "title": "Weather Check",
            "description": "This is a Weather app, I used OpenWeatherMap Api for this application.\n the user can search for a city to get the current and the five upcoming days weather.\n User Will have access to the search history in the app for faster search.\n Our focus was on UI, creating dynamic elements and using the Api.",
            "image": p4,
            "link": "https://jawidanfar1015.github.io/Weather-Check/",
            "github_link": "https://github.com/Jawidanfar1015/Weather-Check/tree/main",
            "id": 4
          }
      ]) 

  return (
    <div>
      <ProjectsList projects={projects} /> 
    </div>
  );
}
 
export default Projects;
