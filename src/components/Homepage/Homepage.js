import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => (
    <div>
        <h1>Homepage</h1>
        <ul>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </div>
)

export default Homepage