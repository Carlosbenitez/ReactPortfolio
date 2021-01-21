import React from "react"
import profile from "./img/Profilepicture.jfif"
import family from "./img/FamilyIMG.JPEG"
import couple from "./img/CoupleIMG.JPG"


function Home() {

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
        link with me!
    </article>
            </div>
        </>
    )
}

export default Home