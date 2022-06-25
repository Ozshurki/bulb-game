import React, {useState} from "react";
import {FcApproval, FcCancel} from "react-icons/fc";
import {CountdownCircleTimer} from 'react-countdown-circle-timer';
import {useDispatch} from "react-redux";

import BulbsContainer from "../../bulbs-container/BulbsContainer";
import {usersActions} from "../../../store/slices/users";
import "./game.css";

const Game: React.FC = () => {

    const [round, setRound] = useState<number>(1);
    const [isPass, setIsPass] = useState<boolean>(false);
    const [isNotPass, setIsNotPass] = useState<boolean>(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const [count, setCount] = useState(10);
    const dispatch = useDispatch();

    const updateRounds = (isCorrect: boolean) => {

        if (isCorrect) {
            setIsPass(true);
            dispatch(usersActions.increaseScore());
            setTimeout(() => {
                setIsPass(false);
                setRound(round + 1);
            }, 1500);
            return;
        } else {
            setIsNotPass(true);
            dispatch(usersActions.initialScore());
            setTimeout(() => {
                setIsNotPass(false);
                setRound(1);
            }, 1500);
        }
    };


    return (
        <div className="game">
            <div className="result">
                {isPass && <FcApproval size="5rem"/>}
                {isNotPass && <FcCancel size="5rem"/>}
                <CountdownCircleTimer
                    isPlaying={isPlaying}
                    duration={count}
                    size={100}
                    initialRemainingTime={5}
                    isSmoothColorTransition={false}
                    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[8, 6.66, 3.33, 0]}
                    onComplete={() => ({shouldRepeat: true})}
                >
                    {({remainingTime}) => remainingTime}
                </CountdownCircleTimer>

            </div>
            <BulbsContainer rounds={round}
                            updateRounds={updateRounds}/>
        </div>
    );
};

export default Game;