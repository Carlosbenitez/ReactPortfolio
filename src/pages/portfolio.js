import React from "react"

function Portfolio() {
    return (
        <>

<h1>Some of my current projects:</h1>
    <div className="main">
        <div id="contentback">
        <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="content">
                    <img src="img/Project1.jpg" alt="Project1 screenshot"/>
                    <h3>First Project</h3>
                    <section>This is the first project I have worked on in my coding career. It utilizes APIs to show
                        users top music tracks and also allows users to search for media. There is a review page and a
                        working profile page. While logged into your profile you can add media to your favorites.
                        Click <a href="https://carlosbenitez.github.io/AppifyMusic/" target="_blank">here</a> to explore my first project.</section>
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="content">
                    <img src="img/PasswordGenerator.jpg" alt="Password Generator screenshot"/>
                    <h3>Password Generator</h3>
                    <section>One of the first assignments I worked on was a password generator that uses prompts to
                        collect your preferences. Then it displays a passord using those conditions. Click <a
                            href="https://carlosbenitez.github.io/PasswordGeneratorPrompts/" target="_blank">here</a> to
                        get a randomly generated password.
                    </section>
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="content">
                    <img src="img/CodeQuiz.jpg" alt="Code Quiz screenshot"/>
                    <h3>Code Quiz</h3>
                    <section>A simple five question code quiz that records your score based on how many you get right.
                        Then it has the ability to tack highscores of people that have taken the quiz. Click <a
                            href="https://carlosbenitez.github.io/CodeQuiz/" target="_blank">here</a> to test your
                        coding knowledge.</section>
                </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="content">
                    <img src="img/DayScheduler.jpg" alt="Day Scheduler screenshot"/>
                    <h3>Day Scheduler</h3>
                    <section>This is a simple day scheduler that will update based on what time it is. Grey is a past hour, red is the current hour, and green means a future hour. You can type notes about that hour slot and they will save.
                        Click <a href="https://carlosbenitez.github.io/BasicScheduler/" target="_blank">here</a> to plan
                        your day out.</section>
                </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="content">
                    <img src="img/WeatherDashboard.jpg" alt="Weather Dashboard screenshot"/>
                    <h3>Weather Dashboard</h3>
                    <section>This is a very simple to use weather dashboard. Simply type in your desired city and it will give you all the weather information at the time. It also includes a simple five day forecast. Click <a href="https://carlosbenitez.github.io/SimpleWeatherDashboard/"
                            target="_blank">here</a> to see what the weather is like.</section>
                </div>
            </div>
        </div>
    </div>
</div>
</>
    )
}

export default Portfolio