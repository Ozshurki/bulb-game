import React from "react";
import "./welcome-page.css";
import {Link} from "react-router-dom";

const WelcomePage: React.FC = () => {

    return (
        <div className="welcome-page">
            <div className="sign-up-form">
                <h1 className="welcome-title">Welcome to bulb game!</h1>
                <div className="input-container">
                    <label htmlFor="">Please enter your name:</label>
                    <input type="text" placeholder="Enter your name..."/>
                </div>
                <Link className="start-game-btn" to="/game">Start game</Link>
            </div>
        </div>
    );
};

export default WelcomePage;