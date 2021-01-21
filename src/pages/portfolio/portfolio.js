import React from "react"
import rogue from "./img/RogueBlitz.jpg"
import project3 from "./img/Project3.jpg"
import scheduler from "./img/DayScheduler.jpg"
import weather from "./img/WeatherDashboard.jpg"
import burger from "./img/BurgerLogger.jpg"
import budget from "./img/ProgressiveBudget.jpg"

function Portfolio() {
    const cardInfo = [
        { image: project3, title: "VG Gaming", text: "For the third project our group wanted to continue developing games so we focused our efforts on creating a game hosting platform for the two games in production. The page became known as VG Gaming where we host two games Dino Dynasty and Rogue Blitz. The high scores for both games are linked to an accounts gamertag and are displayed for the world to see. Create an account today so you can compete against your friends all over the world.", site: "https://vguniverse.herokuapp.com/", alt: "My Third Project" },

        { image: rogue, title: "Rogue Blitz", text: "The second project that I had the privledge to work on was a retro game called Rogue Blitz. We utilized a library called Phaser to animate everything and add physics. This game is a horde style game that has you battling to put your high score on top. I was responsible for enemy creation and the UI. Think you can beat my high score? Give it a try!", site: "https://rogueblitzgaming.herokuapp.com/", alt: "My Second Project" },

        { image: burger, title: "Burger Logger", text: "Do you have a hit list of burgers to eat? Then this is the app for you. Store new burgers to a list or add ones you have already devoured. Once you have eaten a saved burger mark it as devoured. Lose interest or regret devouring it? Just delete it.", site: "https://burger-app-cjb.herokuapp.com/", alt: "My Burger Logger" },

        { image: budget, title: "Progressive Budget", text: "Think you have been spending too much money? Put your financials into this progressive budget that has a live graph as you add or subtract funds. Great for getting on a visual on your spending or gaining.", site: "https://budget-cjb.herokuapp.com/", alt: "My Progressive Budget" },

        { image: weather, title: "Weather Dashboard", text: "This is a very simple to use weather dashboard. Simply type in your desired city and it will give you all the weather information at the time. It also includes a simple five day forecast.", site: "https://carlosbenitez.github.io/SimpleWeatherDashboard/", alt: "My Weather Dashboard" },

        { image: scheduler, title: "Day Scheduler", text: "This is a simple day scheduler that will update based on what time it is. Grey is a past hour, red is the current hour, and green means a future hour. You can type notes about that hour slot and they will save.", site: "https://carlosbenitez.github.io/BasicScheduler/", alt: "My Day Scheduler" },
    ];


    const renderCard = (card, index) => {
        return (
            <div className="col-sm-8 col-md-2 col-lg-5" key={index}>
                <div className="content" id="portfoliocontent" >
                    <a href={card.site} rel="noreferrer" target="_blank">
                        <img className="projectpics" src={card.image} alt={card.alt} />
                    </a>
                    <h3 id="portfolioh3" ><span className="portfoliotext">{card.title}</span></h3>
                    <section className="portfoliotext">{card.text}</section>
                </div>
            </div>)
    }
    return (
        <>
            <h1 id="portfolioh1"><span id="portfolioh1bg">My Top Applications:</span></h1>
            <div className="main">
                <div id="portfoliocontentback">
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