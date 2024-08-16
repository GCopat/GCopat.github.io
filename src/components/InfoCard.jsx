import React from 'react'
import "../css/InfoCard.css"
import { gitlabIcon, githubIcon, githubIconWhite } from '../images'

function InfoCard() {
  return (
    <>
    <div className='infoCard'>
        <p>
          <i>Welcome. I am Gabriel</i>, currently graduating with a <i>MSc in</i> <i>Software Engineering</i>.
          <br/>My focus is in using <i>React</i> & <i>NextJS</i> to create beatiful and modern <i>Websites & Applications</i>.
        </p>
    </div>
    <div className="bannerButtons-wrap">
      <button className='banner-buttons' id='first-banner-button'>Contact Me</button>
      <button className='banner-buttons'> Download CV</button>
      <div className='minor-bnbuttons-wrap'>
        <button className='banner-buttons'><a href="https://git.cardiff.ac.uk/c23127194"><img src={gitlabIcon} alt="Gitlab Logo" id='gitlabLogo'/></a></button>
        <button className='banner-buttons'><a href="https://github.com/GCopat"><img src={githubIcon} alt="Github Logo" id='githubLogo'/></a></button>

        
        <button className='banner-buttons'><a href="/"><img src={githubIcon} alt="Github Logo" id='githubLogo'/></a></button>
      </div>
    </div>
    </>
  )
}

export default InfoCard