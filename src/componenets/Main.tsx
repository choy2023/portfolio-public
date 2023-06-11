import React from 'react'
import PersonalInfo from './PersonalInfo'
import PersonalStatement from './PersonalStatement'
import KeySkills from './KeySkills'
import Education from './Education'
import Projects from './Projects'

const App = () => {
    return (
        <div>
            <PersonalInfo/>
            <PersonalStatement/>
            <KeySkills/>
            <Education/>
            <Projects/>
        </div>
    )
}


export default App
