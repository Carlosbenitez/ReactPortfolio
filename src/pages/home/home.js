import React from "react"
import "./homestyle.css"
import profile from "./Profilepicture.jfif"
import git from "./GitHub.jpg"
import link from "./LinkedIn.jpg"
import portfolio from "./Portfolio.jpg"

function Home() {
    return (
        <>
            <div className="row text-center"><div className="col-md-3 col-centered">
                <img id="profilepic" src={profile} alt="A photo of me." className="w-100" />
            </div>
            </div>
            <br />
            <div id="contentback">
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
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="content">
                            <img className="profilepics" src={link} alt="LinkedIn screenshot" />
                            <h3>LinkedIn</h3>
                            <section>My LinkedIn page so we can connect professionally.
                    Click <a href="https://www.linkedin.com/in/carlos-j-benitez-a2869411a/" target="_blank" rel="noreferrer">here</a> to
                    connect.</section>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="content">
                            <img className="profilepics" src={git} alt="GitHub screenshot" />
                            <h3>GitHub</h3>
                            <section>I actively update my GitHub with projects that I work on. Click <a
                                href="https://github.com/Carlosbenitez" target="_blank" rel="noreferrer">here</a> to
                    take a look at my page.
                </section>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="content">
                            <img className="profilepics" src={portfolio} alt="Portfolio screenshot" />
                            <h3>Portfolio</h3>
                            <section>You can click the Portfolio button at the top of the page or click <a href="portfolio.html">here</a> to take a look at a Portfolio of my work.</section>
                        </div>
                    </div>
                </div>
            </div>
            </>
    )
}

export default Home