import React from "react"

function Nav() {
    return (
        <nav class="navbar navbar-expand-sm">
            <a class="navbar-brand">Carlos J Benitez</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"><i class="fa fa-bars"></i></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="/">About<span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link active" href="/portfolio">Portfolio</a>
                    <a class="nav-item nav-link active" href="/contact">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav