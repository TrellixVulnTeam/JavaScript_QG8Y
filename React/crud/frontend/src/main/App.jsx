import './App.css'
import React from 'react'
import Logo from '../componentes/templates/Logo'
import Nav from '../componentes/templates/Nav'
import Main from '../componentes/templates/Main'
import Footer from '../componentes/templates/Footer'

export default props =>
    <div className="app">
        <Logo/>
        <Nav/>
        <Main/>
        <Footer/>
    </div>
