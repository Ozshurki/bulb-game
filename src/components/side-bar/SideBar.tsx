import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {usersActions} from "../../store/slices/users";
import "./side-bar.css";
import {UserType} from "../../shared/types/user";
import Button from "../button/Button";


const SideBar: React.FC = () => {

    const users:UserType[] = useSelector((state: any) => state.users.allUsers);
    const dispatch = useDispatch();


    const logoutHandler = () =>{
        dispatch(usersActions.logout());
        dispatch(usersActions.sort());
    }

    return (
        <div className="side-bar">
            <div className="logout-btn">
                <Button url="/" clickHandler={logoutHandler} text="Logout"/>
            </div>
            <div className="top-5">Top 5</div>
            <div className="top-users">
                {
                    users.map((user:UserType, index:number) => {
                        if (index+1 > 5) return
                        return (
                            <div className="score-history" key={user.name}>
                                <div className="player-position">{index + 1}</div>
                                <div>Name: {user.name}</div>
                                <div>Score: {user.bestScore}</div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default SideBar;