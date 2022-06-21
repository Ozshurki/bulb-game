import React, {useEffect, useState} from "react";

import "./game.css";
import BulbsContainer from "../../bulbs-container/BulbsContainer";

const Game: React.FC = () => {

    const [round, setRound] = useState<number>(1);
    const [isCorrect, setIsCorrect] = useState<boolean>(false);

    const updateRounds = () => {

        if(isCorrect)
            setRound(round+1);
        else
            setRound(1);
    }


    return (
        <div className="game">
            <BulbsContainer rounds={round}
                            setIsCorrect={ (isCorrect:boolean) => setIsCorrect(isCorrect)}/>
        </div>
    );
};

export default Game;