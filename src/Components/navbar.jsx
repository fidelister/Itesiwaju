import React from 'react'

function navbar() {
    return (
        <>
            <header id="header" className="fixed-top d-flex align-items-center bg-light">
                <div className="container d-flex align-items-between">
                    <div className="logo mr-auto">
                        <h1 className="text-light"><a href="/"><img src={require("../Assets/img/ite2.png")}/></a></h1>
                    </div>
                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li className="active"><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/service">Services</a></li>
                            <li><a href="/faq">FAQ</a></li>
                            <li><a href="/team">Team</a></li>
                            <li><a href="/login">Sign in</a></li>
                            <li className="get-started"><a href="/register">Get Started</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

        </>
    )
}

export default navbar