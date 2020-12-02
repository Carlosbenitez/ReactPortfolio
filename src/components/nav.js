import React from "react"


function Nav() {
    return (
        <nav className="navbar navbar-expand-sm">
            <a className="navbar-brand">Carlos J Benitez</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><i className="fa fa-bars"></i></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="/">About<span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link active" href="/portfolio">Portfolio</a>
                    <a className="nav-item nav-link active" href="/contact">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav