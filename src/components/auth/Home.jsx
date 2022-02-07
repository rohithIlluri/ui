import React from 'react';
import Navbar from '../navbar/Navbar';

import './home.css';
import Header from '../../containers/header/Header';
import {  Body, Footer} from '../../containers/index'

const Home = () => {
    return (
        <div className="header__class">
            <Navbar/>
            <Header/>
            <Body/>
            <Footer/>
            </div>
    )
}

export default Home
