import React from 'react'

const EXP_1 = {
    title: "Cafcass Application",
    desc: "Description of experience",
    languages: "React.JS"
}
const EXP_2 = {
    title: "VZTA Application",
    desc: "Description of experience",
    languages: "React.JS"
}

const EXPERIENCES = [EXP_1, EXP_2]



function Experience() {
    return (
        <div id='Experience' className='summary-child'>
            <h2 className='summary-title  pizzaz teko-h2'>Experience</h2>
            {EXPERIENCES.map((exp, index) => {
                return (
                    <div className="degree" key={index}>
                        <h3 className='degree-title teko-h3'>{exp.title}</h3>
                        <p className='degree-desc'>{exp.desc}</p>        
                    </div>
                ) 
            })}
            
        </div>
    )
}

export default Experience