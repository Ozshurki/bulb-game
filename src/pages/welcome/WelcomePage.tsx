import React, {useState} from "react";
import "./welcome-page.css";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {usersActions} from "../../store/slices/users";
import Button from "../../components/button/Button";

const WelcomePage: React.FC = () => {

    const [userName, setUserName] = useState("");
    const [isError, setIsError] = useState(false);

    const dispatch = useDispatch();
    const clickHandler = () => {
        if (userName.length === 0){
            setIsError(true);
            return;
        }

        setIsError(false);
        dispatch(usersActions.addUser({name: userName}))
    };

    return (
        <div className="welcome-page">

            <div className="sign-up-form">
                <h2 className="welcome-title">Welcome to Memory game</h2>
                {isError && <div className="error">Please enter your name</div>}
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
                <Button url="/game"
                        clickHandler={clickHandler}
                        text="Start game"/>
            </div>
        </div>
    );
};

export default WelcomePage;