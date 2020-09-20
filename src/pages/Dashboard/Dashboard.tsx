import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import Sidebar from '../../components/Sidebar/Sidebar'
import Board from '../Board'


import './styles.css'

export default function Dashboard() {
    return (
        <div id="page-Dashboard">
            <PageHeader></PageHeader>
            <div className="container">
                <Sidebar></Sidebar>
                <div className="bodyboard">
                    <Board></Board>
                </div>
            </div>
        </div>
    )
}
