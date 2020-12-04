import React from "react"
import "./homestyle.css"
import profile from "./img/Profilepicture.jfif"
import git from "./img/GitHub.jpg"
import linkedin from "./img/LinkedIn.jpg"
import portfolio from "./img/Portfolio.jpg"


function Home() {
    const cardInfo = [
        { image: linkedin, title: "LinkedIn", text: "My LinkedIn page so we can connect professionally.", site: "https://www.linkedin.com/in/carlos-j-benitez-a2869411a/", alt: "My LinkedIn" },
        { image: git, title: "GitHub", text: "I actively update my GitHub with projects that I work on.", site: "https://github.com/Carlosbenitez", alt: "My Github" },
        { image: portfolio, title: "Portfolio", text: "Check out what I have been working on!", site: "/ReactPortfolio/portfolio", alt: "My Portfolio" },
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
            <div className="col-md-3 col-centered">
                <img id="profilepic" src={profile} alt="Carlos Benitez" className="w-100" />
            </div>
            <br />
            <div className="contentback">
                <article>
                    With seven years of logistics experience I am looking for a new career path by learning the language of code.
        <br />
                    <br />
        Rutgers University's Center for Continuing Professional Development offers a full stack coding program for
        career driven individuals looking to get an edge in the current job market. The future is moving towards a work
        from home model with an emphasis on computer logic/language. I want to be as prepared for that future as I can
        be.
        <br />
                    <br />
        Here is a page dedicated to some of the projects I have worked on. If you enjoy my work please feel free to
        link with me on my professional websites below.
    </article>
    </div>
    <div id="contentback">
    <h4>(Click the image to take a look!)</h4>
                {/* card is imported here */}
                <div className="row">
                    {cardInfo.map(renderCard)}
                </div>
                </div>
        </>
    )
}

export default Home