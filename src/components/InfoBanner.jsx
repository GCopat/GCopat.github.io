import React from 'react'
import * as icons from '../images';
import "../css/InfoBanner.css"

function InfoBanner() {
  return (
    <div className="infoBanner">
      <img src={icons.reactIcon} alt="" className="img-logo"/>
      <img src={icons.viteIcon} alt="" id="vite" className="img-logo"/>
      <img src={icons.cssIcon} alt="" id="vite" className="img-logo"/>
      <img src={icons.htmlIcon} alt="" id="vite" className="img-logo"/>
      <img src={icons.jsIcon} alt="" id="vite" className="img-logo"/>
      <img src={icons.mariadbIcon} alt="" id="mariadb-icon" className="img-logo"/>
      <img src={icons.javaIcon} alt="" id="java-icon" className="img-logo"/>
      <img src={icons.springIcon} alt="" id="spring-icon" className="img-logo"/>
      <img src={icons.pythonIcon} alt="" id="spring-icon" className="img-logo"/>
    </div>
  )
}

export default InfoBanner