import React, {useEffect, useState} from "react";
import {FcApproval, FcCancel} from "react-icons/fc";
import {CountdownCircleTimer} from 'react-countdown-circle-timer';
import {useDispatch} from "react-redux";

import CardsContainer from "../../cards-container/CardsContainer";
import {usersActions} from "../../../store/slices/users";
import "./game.css";

const Game: React.FC = () => {

    const [round, setRound] = useState<number>(1);
    const [isPass, setIsPass] = useState<boolean>(false);
    const [isNotPass, setIsNotPass] = useState<boolean>(false);
    const [showRules, setShowRules] = useState(true);
    const [time, setTime] = useState<number>(2);
    const [showCards, setShowCards] = useState<boolean>(false);

    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            setShowRules(false);
        }, 4000)
    },[])

    const updateRounds = (isCorrect: boolean) => {

        if (isCorrect) {
            setIsPass(true);
            dispatch(usersActions.increaseScore());
            setTimeout(() => {
                setIsPass(false);
                setRound(round + 1);
                setTime(3);
            }, 1500);
        } else {
            setIsNotPass(true);
            dispatch(usersActions.initialScore());
            setTimeout(() => {
                setRound(1);
                setIsNotPass(false);

            }, 1500);
        }
    };

    return (
        <div className="game">
            {showRules ? <h2 className="rules">Click the correct sequence after each round</h2> :
            <h2 className="round">Round: {round}</h2>}
            <div className="result">
                {isPass && <FcApproval size="5rem"/>}
                {isNotPass && <FcCancel size="5rem"/>}
            </div>
            <CardsContainer rounds={round}
                            updateRounds={updateRounds}
                            wait={time}
                            showCards={showCards}
                            toggleShowCards={(show:boolean) => setShowCards(show)}/>
        </div>
    );
};

export default Game;