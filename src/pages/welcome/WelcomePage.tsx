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
                <h2 className="welcome-title">Welcome to Bulb game</h2>
                <div className="form">
                    <input type="text"
                           name="text"
                           autoComplete="off"
                           required
                           value={userName}
                           onChange={(event: React.FormEvent<HTMLInputElement>) => setUserName(event.currentTarget.value)}/>
                    <label htmlFor="text" className="label-name">
                        <span className="content-name">
                            Enter Your Name
                        </span>
                    </label>
                </div>
                <Link className="start-game-btn"
                      to="/game"
                      onClick={() => dispatch(usersActions.addUser({name: userName}))}>Start game</Link>
            </div>
        </div>
    );
};

export default WelcomePage;