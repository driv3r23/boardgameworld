import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.css'

const Header = ({ title }) => (
    <header className={ styles.header }>
        <b className={ styles.title }>{ title }</b>
        <ul className={ styles.nav }>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </header>
)

export default Header