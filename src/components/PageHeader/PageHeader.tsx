import React from 'react'
import logoImg from '../../assets/image/logo.svg'

import { FaUserCircle } from "react-icons/fa";


import './styles.css'

export default function PageHeader() {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <img src={logoImg} alt="Sante" className="logo" />
                <div className="user"> < FaUserCircle  /> <p> Dr(a) Rebecca Martins </p>  </div>
            </div>
        </header>
    )
}
