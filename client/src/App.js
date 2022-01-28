import React from 'react';
import './App.css';
import Home from './pages/home'
import { Helmet } from 'react-helmet'

function App() {
    return (
        <>
            <Helmet>
                <title>PogCars</title>
                <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16"/>
            </Helmet>
            <Home/>


        </>
    );
}

export default App;
