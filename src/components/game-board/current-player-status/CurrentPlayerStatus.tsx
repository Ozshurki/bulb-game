import React from "react";
// @ts-ignore
import {RootStateOrAny, useSelector} from "react-redux";

import "./current-player-status.css";
import {UserType} from "../../../shared/types/user";

const CurrentPlayerStatus: React.FC = () => {

    const user:UserType = useSelector((state: RootStateOrAny) => state.users.currentUser);

    return (
        <div className="player-info">
            <div className="player-name info">Name: {user.name}</div>
            <div className="player-current-score info">Current score: {user.currentScore}</div>
            <div className="player-best-score info">Best score: {user.bestScore}</div>
        </div>
    );
};

export default CurrentPlayerStatus;