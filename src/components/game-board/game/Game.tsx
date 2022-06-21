import React, {useEffect, useState} from "react";

import "./game.css";
import BulbsContainer from "../../bulbs-container/BulbsContainer";
import {useDispatch} from "react-redux";
import {usersActions} from "../../../store/slices/users";

const Game: React.FC = () => {

    const [round, setRound] = useState<number>(1);
    const dispatch = useDispatch();

    const updateRounds = (isCorrect:boolean) => {

        if (isCorrect){
            console.log("score!")
            dispatch(usersActions.increaseScore());
            setRound(round + 1);
        }
        else
            setRound(1);
    };


    return (
        <div className="game">
            <BulbsContainer rounds={round}
                            updateRounds={updateRounds}/>
        </div>
    );
};

export default Game;