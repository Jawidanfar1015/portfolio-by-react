
const ProjectsList = ({ projects }) => {
  return (
    <div className="container project-container">
        <div className="row">
            { projects.map(proj => (
                <div className="card col-sm-11 col-md-5" key={proj.id}>
                    <div className="card-header col-sm-12 d-flex flex-row">
                        <h3>{ proj.title }</h3>
                            <a href={proj.link}>
                                <img src={proj.image} alt="one view of the project"/>
                            </a>
                    </div>
                    <div className="card-body col-sm-12">
                        <h3>Info</h3>
                            <p>
                                {proj.description}
                            </p>
                        <a href={proj.github_link}>Check the code here</a>
                    </div>
                </div>
            ))}
      </div>
    </div>
  );
}
 
export default ProjectsList;