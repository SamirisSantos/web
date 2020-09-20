import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Partners from './pages/Business partners/Partners'
import Contatcs from './pages/Contacts/Contatcs'
import Dashboard from './pages/Dashboard/Dashboard'
import Message from './pages/Message/Message'
import MessageSent from './pages/MessageSent/MessageSent'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/sent" component={MessageSent}/>
            <Route path="/contacts" component={Contatcs}/>
            <Route path="/message" component={Message}/>
            <Route path="/partners" component={Partners}/>
        </BrowserRouter>
    )
}
