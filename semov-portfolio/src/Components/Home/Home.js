import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="home-text">
                <h1 className="home-text-header">Hello.</h1>
                <p>I'm <span className="home-text-name">Ivan Semov</span>.<br/>Full Stack Developer with React and ASP.Net CORE.</p>
            </div>
            <div className="home-img">
                <img src="images/WriteCodes.png" alt="Home Img"/>
            </div>
        </div>
    )
}
export default Home;