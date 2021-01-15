import React from "react"
import rogue from "./img/RogueBlitz.jpg"
import project1 from "./img/Project1.jpg"
import project3 from "./img/Project3.jpg"
import password from "./img/PasswordGenerator.jpg"
import quiz from "./img/CodeQuiz.jpg"
import scheduler from "./img/DayScheduler.jpg"
import weather from "./img/WeatherDashboard.jpg"
import note from "./img/NoteTaker.jpg"
import burger from "./img/BurgerLogger.jpg"
import fitness from "./img/FitnessTracker.jpg"
import budget from "./img/ProgressiveBudget.jpg"

function Portfolio() {
    const cardInfo = [
        {image: project3, title: "VG Gaming", text: "For the third project our group wanted to continue developing games so we focused our efforts on creating a game hosting platform for the two games in production. The page became known as VG Gaming where we host two games Dino Dynasty and Rogue Blitz. The high scores for both games are linked to an accounts gamertag and are displayed for the world to see. Create an account today so you can compete against your friends all over the world.", site: "https://vguniverse.herokuapp.com/", alt: "My Third Project"},

        {image: rogue, title: "Rogue Blitz", text: "The second project that I had the privledge to work on was a retro game called Rogue Blitz. We utilized a library called Phaser to animate everything and add physics. This game is a horde style game that has you battling to put your high score on top. I was responsible for enemy creation and the UI. Think you can beat my high score? Give it a try!", site: "https://rogueblitzgaming.herokuapp.com/", alt: "My Second Project"},

        // { image: project1, title: "First Project", text: "This is the first project I have worked on in my coding career. It utilizes APIs to show users top music tracks and also allows users to search for media. There is a review page and a working profile page. While logged into your profile you can add media to your favorites. My responsiblity was the Reviews Page.", site: "https://carlosbenitez.github.io/AppifyMusic/", alt: "My First Project" },

        { image: burger, title: "Burger Logger", text: "Do you have a hit list of burgers to eat? Then this is the app for you. Store new burgers to a list or add ones you have already devoured. Once you have eaten a saved burger mark it as devoured. Lose interest or regret devouring it? Just delete it.", site: "https://burger-app-cjb.herokuapp.com/", alt: "My Burger Logger" },

        { image: budget, title: "Progressive Budget", text: "Think you have been spending too much money? Put your financials into this progressive budget that has a live graph as you add or subtract funds. Great for getting on a visual on your spending or gaining.", site: "https://budget-cjb.herokuapp.com/", alt: "My Progressive Budget" },

        { image: note, title: "Note Taker", text: "This app is used to create, save, and delete notes. It is great to keep your thoughts typed out so your mind is free to think about what to do the next quarantine.", site: "https://note-taker-cjb.herokuapp.com/", alt: "My Note Taker" },

        // { image: fitness, title: "Fitness Tracker", text: "This is a great app for storing your workouts. It takes into account a multitude of variables for both cardio and resistance workouts. Then it shows you a breakdown on a dashboard with great visuals including graphs.", site: "https://fitness-tracker-cjb.herokuapp.com/", alt: "My Fitness Tracker" },

        { image: weather, title: "Weather Dashboard", text: "This is a very simple to use weather dashboard. Simply type in your desired city and it will give you all the weather information at the time. It also includes a simple five day forecast.", site: "https://carlosbenitez.github.io/SimpleWeatherDashboard/", alt: "My Weather Dashboard" },

        { image: password, title: "Password Generator", text: "One of the first assignments I worked on was a password generator that uses prompts to collect your preferences. Then it displays a passord using those conditions.", site: "https://carlosbenitez.github.io/PasswordGeneratorPrompts/", alt: "My Password Generator" },

        // { image: quiz, title: "Code Quiz", text: "A simple five question code quiz that records your score based on how many you get right. Then it has the ability to tack highscores of people that have taken the quiz.", site: "https://carlosbenitez.github.io/CodeQuiz/", alt: "My Code Quiz" },

        { image: scheduler, title: "Day Scheduler", text: "This is a simple day scheduler that will update based on what time it is. Grey is a past hour, red is the current hour, and green means a future hour. You can type notes about that hour slot and they will save.", site: "https://carlosbenitez.github.io/BasicScheduler/", alt: "My Day Scheduler" },
    ];


    const renderCard = (card, index) => {
        return (
            <div className="col-sm-12 col-md-3 col-lg-3">
                <div className="content" id="portfoliocontent" key={index}>
                    <a href={card.site} rel="noreferrer" target="_blank">
                        <img className="profilepics" src={card.image} alt={card.alt} />
                    </a>
                    <h3 id="portfolioh3">{card.title}</h3>
                    <section>{card.text}</section>
                </div>
            </div>)
    }
    return (
        <>
            <h1 id="portfolioh1">My Applications:</h1>
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