import React from "react"
import profile from "./img/Profilepicture.jfif"
import git from "./img/GitHub.jpg"
import linkedin from "./img/LinkedIn.jpg"
import portfolio from "./img/Portfolio.jpg"
import family from "./img/FamilyIMG.JPEG"
import couple from "./img/CoupleIMG.JPG"


function Home() {
    const cardInfo = [
        { image: linkedin, title: "LinkedIn", text: "My LinkedIn page so we can connect professionally.", site: "https://www.linkedin.com/in/carlos-j-benitez-a2869411a/", alt: "My LinkedIn" },
        { image: git, title: "GitHub", text: "I actively update my GitHub with projects that I work on.", site: "https://github.com/Carlosbenitez", alt: "My Github" },
        { image: portfolio, title: "Portfolio", text: "Check out what I have been working on!", site: "/ReactPortfolio/portfolio", alt: "My Portfolio" },
    ];

    const renderCard = (card, index) => {
        return (
            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="content" id="homecontent" key={index}>
                    <a href={card.site} rel="noreferrer" target="_blank">
                        <img className="profilepics" src={card.image} alt={card.alt} />
                    </a>
                    <h3 id="homeh3"><span className="hometextbg">{card.title}</span></h3>
                    <section className="hometextbg">{card.text}</section>
                </div>
            </div>)
    }
    return (
        <>
            <div id="homecarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 homepersonalpics" src={profile} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 homepersonalpics" src={family} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 homepersonalpics" src={couple} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#homecarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#homecarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <br />
            <div className="contentback">
                <article id="hometext" className="hometextbg">
                    With seven years of logistics experience I am looking for a new career path by learning the language of code.
        <br />
                    <br />
        Rutgers University's Center for Continuing Professional Development offers a full stack coding program for
        career driven individuals looking to get an edge in the current job market. The future is moving towards a work
        from home model with an emphasis on computer logic/language. I want to be as prepared for that future as I can
        be.
        <br />
                    <br />
        Here is a page dedicated to
        the projects I have worked on. If you enjoy my work please feel free to
        link with me on my professional websites below.
    </article>
            </div>
            <div id="contentcard">
                {/* card is imported here */}
                <div className="row">
                    {cardInfo.map(renderCard)}
                </div>
            </div>
        </>
    )
}

export default Home