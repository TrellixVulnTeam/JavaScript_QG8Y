import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import Logo from '../componentes/templates/Logo'
import Nav from '../componentes/templates/Nav'
import Home from '../componentes/home/Home'
import Footer from '../componentes/templates/Footer'

export default props =>
    <div className="app">
        <Logo/>
        <Nav/>
        <Home/>
        <Footer/>
    </div>
