import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
        <h1>About page</h1>
        <p>This is my about page contents</p>
        <nav>
            <Link to='college'>About college</Link>
            <Link to='department'>About Department</Link>
        </nav>
         
    </div>
  )
}

export default About