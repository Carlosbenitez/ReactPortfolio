import React from "react"
import "./portfoliostyle.css"
import project1 from "./img/Project1.jpg"
import password from "./img/PasswordGenerator.jpg"
import quiz from "./img/CodeQuiz.jpg"
import scheduler from "./img/DayScheduler.jpg"
import weather from "./img/WeatherDashboard.jpg"
import rogue from "./img/RogueBlitz.jpg"


function Portfolio() {
    const cardInfo = [
        { image: rogue, title: "Second Project", text: "The second project that I had the privledge to work on was a retro game called Rogue Blitz we utilized a library called Phaser. This game is a horde style game that has you battling to put your high score on top. I was responsible for enemy creation and the UI. Think you can beat my high score? Give it a try!", site: "https://rogueblitzgaming.herokuapp.com/" },
        
        { image: project1, title: "First Project", text: "This is the first project I have worked on in my coding career. It utilizes APIs to show users top music tracks and also allows users to search for media. There is a review page and a working profile page. While logged into your profile you can add media to your favorites. My responsiblity was the Reviews Page.", site: "https://carlosbenitez.github.io/AppifyMusic/", alt: "My First Project" },

        { image: password, title: "Password Generator", text: "One of the first assignments I worked on was a password generator that uses prompts to collect your preferences. Then it displays a passord using those conditions.", site: "https://carlosbenitez.github.io/PasswordGeneratorPrompts/", alt: "My Password Generator" },

        { image: quiz, title: "Code Quiz", text: "A simple five question code quiz that records your score based on how many you get right. Then it has the ability to tack highscores of people that have taken the quiz.", site: "https://carlosbenitez.github.io/CodeQuiz/", alt: "My Code Quiz" },

        { image: scheduler, title: "Day Scheduler", text: "This is a simple day scheduler that will update based on what time it is. Grey is a past hour, red is the current hour, and green means a future hour. You can type notes about that hour slot and they will save.", site: "https://carlosbenitez.github.io/BasicScheduler/", alt: "My Day Scheduler" },

        { image: weather, title: "Weather Dashboard", text: "This is a very simple to use weather dashboard. Simply type in your desired city and it will give you all the weather information at the time. It also includes a simple five day forecast.", site: "https://carlosbenitez.github.io/SimpleWeatherDashboard/", alt: "My Weather Dashboard" },

        
    ];


    const renderCard = (card, index) => {
        return (
            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="content" key={index}>
                    <a href={card.site} rel="noreferrer" target="_blank">
                        <img className="profilepics" src={card.image} alt={card.alt} />
                    </a>
                    <h3>{card.title}</h3>
                    <section>{card.text}</section>
                </div>
            </div>)
    }
    return (
        <>
            <h1>Some of my current projects:</h1>
            <h5>(Click the image to take a look!)</h5>
            <div className="main">
                <div id="contentback">
                    {/* card is imported here */}
                    <div className="row">
                        {cardInfo.map(renderCard)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio