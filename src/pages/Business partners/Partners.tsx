import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import Sidebar from '../../components/Sidebar/Sidebar'


import './styles.css'

export default function Partners() {
    return (
        <div id="page-Dashboard">
            <PageHeader></PageHeader>
            <div className="container">
                <Sidebar></Sidebar>
                <div className="body">
                    <p>Você não possui parceiros </p>
                </div>

            </div>
        </div>
    )
}
