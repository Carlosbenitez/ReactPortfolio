import React from "react"
import project1 from "./Project1.jpg"
import password from "./PasswordGenerator.jpg"
import quiz from "./CodeQuiz.jpg"
import scheduler from "./DayScheduler.jpg"
import weather from "./WeatherDashboard.jpg"

function Portfoliocards() {
    return (
        <>
    <div className="main">
        <div id="contentback">
        <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="content">
                    <img src={project1} alt="Project1 screenshot"/>
                    <h3>First Project</h3>
                    <section>This is the first project I have worked on in my coding career. It utilizes APIs to show
                        users top music tracks and also allows users to search for media. There is a review page and a
                        working profile page. While logged into your profile you can add media to your favorites. My responsiblity was the Reviews Page.
                        Click <a href="https://carlosbenitez.github.io/AppifyMusic/" target="_blank" rel="noreferrer">here</a> to explore my first project.</section>
                </div>
            </div>
        </div>
    </div>
</div>
</>
    )
}

export default Portfoliocards