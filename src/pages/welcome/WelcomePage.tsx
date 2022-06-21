import React, {useState} from "react";
import "./welcome-page.css";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {usersActions} from "../../store/slices/users";

const WelcomePage: React.FC = () => {

    const [userName, setUserName] = useState("");

    const dispatch = useDispatch();

    return (
        <div className="welcome-page">
            <div className="sign-up-form">
                <h1 className="welcome-title">Welcome to Bulb game</h1>
                <div className="input-container">
                    <label htmlFor="">Please enter your name:</label>
                    <input type="text" placeholder="Enter your name..."
                           value={userName}
                           onChange={(event:React.FormEvent<HTMLInputElement>) => setUserName(event.currentTarget.value)}/>
                </div>
                <Link className="start-game-btn"
                      to="/game"
                      onClick={() => dispatch(usersActions.addUser({name:userName}))}>Start game</Link>
            </div>
        </div>
    );
};

export default WelcomePage;