import React from 'react'
import "../css/InfoCard.css"

function InfoCard() {
  return (
    <div className='infoCard'>
        <div className="infoCard-title-wrapper">
          <h1>I am</h1>
        </div>
        <div className="infoCard-info-wrapper">
          <p>
            Currently graduating with a <i> MSc in</i> <i>Software Engineering</i>
          </p>
          <p>
            Experienced with using <i>React</i> & <i>Vite</i> to create <i>Progressive Web Apps</i> utilizing <i>RESTful apis</i>
          </p>
        </div>
    </div>
  )
}

export default InfoCard