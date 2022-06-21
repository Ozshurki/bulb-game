import React from "react";

import "./game.css";
import BulbsContainer from "../../bulbs-container/BulbsContainer";

const Game: React.FC = () => {
    return (
        <div className="game">
            <BulbsContainer/>
        </div>
    );
};

export default Game;