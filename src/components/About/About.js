import React from 'react'
import { Link } from 'react-router-dom'

const About = () => (
    <div>
        <h1>About</h1>
        <ul>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </div>
)

export default About