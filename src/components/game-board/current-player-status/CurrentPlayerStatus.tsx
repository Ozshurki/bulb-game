import React from "react";

import "./current-player-status.css";

const CurrentPlayerStatus:React.FC = () => {
    return(
        <div className="player-info">
            <div className="player-name info">Name: Oz</div>
            <div className="player-current-score info">Current score: 30</div>
            <div className="player-best-score info">Best score: 100</div>
        </div>
    )
}

export default CurrentPlayerStatus;