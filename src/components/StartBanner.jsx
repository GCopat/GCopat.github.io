import React from 'react'
import "../css/StartBanner.css"

function StartBanner() {
  return (
    <>
        <div className="animated-intro" id="top-bar">
            <h1 id="title"><a href="/">Gabriel Pezzi Copat</a></h1>
            <nav id="navbar">
                <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Education</a></li>
                    <li><a href="/">Contact Me</a></li> 
                </ul>
            </nav> 
        </div>
        
        <div className="animated-intro" id="bottom-bar">
            <h1 id="title-bottom">Web Developer</h1> 
        </div>
    </>
  )
}

export default StartBanner