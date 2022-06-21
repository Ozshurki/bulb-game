import React from "react";

import "./game-board.css";
import CurrentPlayerStatus from "./current-player-status/CurrentPlayerStatus";
import Game from "./game/Game";


const GameBoard: React.FC = () => {
    return (
        <div className="game-board-container">
            <CurrentPlayerStatus/>
            <Game/>
        </div>
    );
};

export default GameBoard;