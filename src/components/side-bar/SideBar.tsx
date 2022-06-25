import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {usersActions} from "../../store/slices/users";
import "./side-bar.css";
import {UserType} from "../../shared/types/user";


const scoreHistory = [
    {
        name: "Oz",
        score: "100",
        date: "21/6/2022"
    },
    {
        name: "Ariel",
        score: "120",
        date: "10/6/2022"
    },
    {
        name: "Daniel",
        score: "110",
        date: "1/5/2022"
    }
];

const SideBar: React.FC = () => {

    const users:UserType[] = useSelector((state: any) => state.users.allUsers);
    const dispatch = useDispatch();

    return (
        <div className="side-bar">
            <div className="logout-btn">
                <Link to="/" onClick={() => dispatch(usersActions.logout())}>Logout</Link>
            </div>
            <div className="top-users">
                {
                    users.map((user:UserType, index:number) => {
                        return (
                            <div className="score-history" key={user.name}>
                                <div className="player-position">{index + 1}</div>
                                <div>Name: {user.name}</div>
                                <div>Score: {user.bestScore}</div>
                                <div>Date: 21/6/2022</div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default SideBar;