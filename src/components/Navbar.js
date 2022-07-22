import React from "react"
import Bird from "../images/Bird.png"

export default function Navbar() {
    return (
        <nav>
            <img className="navLogo" src={Bird} />
            <h1 className="navTitle">MEME GENGATOR</h1>
        </nav>
    )
}