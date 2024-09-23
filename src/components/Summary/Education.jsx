import React from 'react'

const DEGREE_1 = {
    title: "MSc Software Engineering",
    uni: "Cardiff University",
    grade: "TBA",
    years : {
        start: "2023",
        end: "2024",
    },
}
const DEGREE_2 = {
    title: "BSc Sport and Exercise Science",
    uni: "Cardiff Metropolitan University",
    grade: "2.1",
    years : {
        start: "2019",
        end: "2022",
    },
}
const DEGREE_3 = {
    title: "Foundation Degree in Math, Engineering and Physical Sciences",
    uni: "University of Exeter",
    grade: "Distinction",
    years : {
        start: "2016",
        end: "2016",
    },
}

const DEGREES = [DEGREE_1, DEGREE_2, DEGREE_3]

function Education() {
    return (
        <div id='Education'>
            <h2 className='summary-title pizzaz teko-h2 '>Education</h2>
            {DEGREES.map((degree, index) => {
                return (
                    <div className="degree" key={index}>
                        <h3 className='degree-title teko-h3'>{degree.title}</h3>
                        <p className='degree-desc'>{degree.uni} {degree.years.start}-{degree.years.end}</p>        
                    </div>
                ) 
            })}
            
        </div>
    )
}

export default Education