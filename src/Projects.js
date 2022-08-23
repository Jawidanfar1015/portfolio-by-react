import p1 from "./images/dnd.png"
import p2 from "./images/getOutside.png"
import p3 from "./images/first.png"
import p4 from "./images/third.png"

const Projects = () => {
    return (  
        <div className="container">
        <h1 src="https://pdubya1632.github.io/Get-Outside/">Projects</h1>
        <div className="row">
            <div className="card col-sm-11 col-md-5">
                <div className="card-header col-sm-12 d-flex flex-row">
                    <h2>DND Character Creator</h2>
                    <img src={p1} alt="one view of the project"/>
                </div>
                <div className="card-body col-sm-12">
                    <h3>Info</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sapiente
                        ut ipsa unde labore tempore consequatur aut ratione sequi praesentium quibusdam 
                        quidem illum ducimus quisquam reprehenderit deleniti, et eius quae.
                    Repudiandae magni nostrum voluptates eum voluptatem provident saepe. Laudantium labore,
                    molestias praesentium possimus vitae eaque sapiente, et nihil maiores nesciunt cumque 
                    inventore id dolor eos reprehenderit, quidem porro consequatur. Beatae!
                    </p>
                    <a href="https://github.com/Jean424/DnD-Character-Creater">Check the code here</a>
                </div>
            </div>
            <div className="card col-sm-11 col-md-5">
                <div className="card-header col-sm-12 d-flex flex-row">
                    <h2>Get Outside</h2>
                    <img src={p2} alt="one view of the project" />
                </div>
                <div className="card-body col-sm-12">
                    <h3>Info</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sapiente
                        ut ipsa unde labore tempore consequatur aut ratione sequi praesentium quibusdam 
                        quidem illum ducimus quisquam reprehenderit deleniti, et eius quae.
                    Repudiandae magni nostrum voluptates eum voluptatem provident saepe. Laudantium labore,
                    molestias praesentium possimus vitae eaque sapiente, et nihil maiores nesciunt cumque 
                    inventore id dolor eos</p>
                    <a href="https://github.com/pdubya1632/Get-Outside">Check the code here</a>
                </div>
            </div>    
            <div className="card col-sm-11 col-md-5">
                <div className="card-header col-sm-12 d-flex flex-row">
                    <h2>Note Keeper</h2>
                    <img src={p3} alt="one view of the project" />
                </div>
                <div className="card-body col-sm-12">
                    <h3>Info</h3>
                    <p></p>
                    <a href="https://github.com/Jawidanfar1015/Note-Keeper">Check the code here</a>
                </div>
            </div>
            <div className="card col-sm-11 col-md-5">
                <div className="card-header col-sm-12 d-flex flex-row">
                    <h2>Weather Check</h2>
                    <img src={p4} alt="one view of the project" />
                </div>
                <div className="card-body col-sm-12">
                    <h3>Info</h3>
                    <p></p>
                    <a href="https://github.com/Jawidanfar1015/Weather-Check/tree/main">Check the code here</a>
                </div>
            </div>
        </div>    
    </div>
    );
}
 
export default Projects;
