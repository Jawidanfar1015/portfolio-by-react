const Home = () => {
    return (
        <div className="overlay"> 
            <div className="container main">
                <h1>Welcome</h1>
                <div className="d-flex flex-column">
                    <div className="col-sm-4 border d-flex flex-start">
                        <h2>About</h2>
                    </div>
                    <div className="col-sm-6 border d-flex flex-start">
                        <h2>Projects</h2>
                    </div>
                    <div className="col-sm-8 border d-flex flex-start">
                        <h2>Resume</h2>
                    </div>
                    <div className="col-sm-10 border d-flex flex-start">
                        <h2>Contac</h2>
                    </div>
                </div>
            </div> 
        </div>
    );
}
 
export default Home;
