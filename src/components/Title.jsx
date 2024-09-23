import React from 'react'


const MAIN_TITLE = "Gabriel Copat"
const MAIN_DESC = "A little text describing me"


function Title() {
    return (
        <div id="Title">
            <h1>{MAIN_TITLE}</h1>
            <p>{MAIN_DESC}</p>
        </div>
    )
}

export default Title