import React from "react"
import "./navstyle.css"

function Nav() {
    return (
        <nav className="navbar navbar-expand-sm">
            <title className="navbar-brand">Carlos J Benitez</title>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><i className="fa fa-bars"></i></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="/ReactPortfolio">About<span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link active" href="/ReactPortfolio/portfolio">Portfolio</a>
                    <a className="nav-item nav-link active" href="/ReactPortfolio/contact">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav