import './Projects.sass'
import GetInTouch from "../components/getInTouch/GetInTouch";
import WorkContainer from "../components/workContainer/WorkContainer";

export default function Projects() {
    return (
        <div className="Projects">
            <div className="title" data-aos="fade-down">
                <h1>Projects</h1>
                <span>Projects and ideas I’ve worked on</span>
            </div>
            <WorkContainer />
            <div className="yourProject">
                <img className='stars' src="./portfolio/stars.png" alt="" />
                <div>
                    <h2>YOUR PROJECT GOES HERE</h2>
                    <span>Let's turn idea into visual reality</span>
                </div>
                <GetInTouch />
            </div>
        </div>
    )
}