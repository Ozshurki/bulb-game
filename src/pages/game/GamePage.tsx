import React, {useEffect} from "react";

import SideBar from "../../components/side-bar/SideBar";
import GameBoard from "../../components/game-board/GameBoard";
import "./game-page.css";


const GamePage: React.FC = () => {

    return (
        <div className="game-page">
            <SideBar/>
            <GameBoard/>
        </div>
    );
};

export default GamePage;