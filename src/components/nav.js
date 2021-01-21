import React from "react"
import { Link } from "react-router-dom"

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
                    <Link to="/ReactPortfolio" className="nav-item nav-link active">Home</Link>
                    <Link to="/ReactPortfolio/portfolio" className="nav-item nav-link active">Portfolio</Link>
                    <Link to="/ReactPortfolio/videos" className="nav-item nav-link active">Videos</Link>
                    <Link to="/ReactPortfolio/contact" className="nav-item nav-link active">Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav