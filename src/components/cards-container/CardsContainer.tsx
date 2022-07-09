import React, {useEffect, useState} from "react";

import "./cards-container.css";
import Card from "../card/Card";


interface BulbsContainerInt {
    rounds: number;
    updateRounds: (isCorrect: boolean) => void;
    wait: number;
    showCards: boolean;
    toggleShowCards: (show: boolean) => void;
}

const CardsContainer: React.FC<BulbsContainerInt> = ({rounds, updateRounds, wait, showCards, toggleShowCards}) => {

    const [randomizeBulbs, setRandomizeBulbs] = useState<number[]>([]);
    const [currIndex, setCurrIndex] = useState<number>(0);
    const [clickNumber, setClickNumber] = useState<number>(0);
    const [isBulbLight, setIsBulbLight] = useState<boolean>(false);
    const [canUserClick, setCanUserClick] = useState<boolean>(false);
    const [startRound, setStartRound] = useState<boolean>(false);


    // Dad increase the index
    const increaseIndex = () => {

        // Verify if the user can start clicking
        if (currIndex + 1 === randomizeBulbs.length) setCanUserClick(true);


        // If any card is light so start a timer
        setIsBulbLight(true);
        setCurrIndex(currIndex + 1);

        setTimeout(() => {
            setIsBulbLight(false);
        }, 1000);
    };

    const verifyClick = (bulbIndex: number) => {

        // User is right
        if (bulbIndex === randomizeBulbs[clickNumber]) {

            if (clickNumber + 1 === randomizeBulbs.length) {
                updateRounds(true);
                setCurrIndex(0);
                setClickNumber(0);
                setRandomizeBulbs([]);
                return;
            }
            // Check the next card
            setClickNumber(clickNumber + 1);
        } else {// User is wrong
            updateRounds(false);
            setTimeout(() => {
                setCurrIndex(0);
                setClickNumber(0);
                setIsBulbLight(false);
            }, 1500);
        }

    };

    useEffect(() => {
        const arr: number[] = [];
        setCanUserClick(false);
        setIsBulbLight(false);

        for (let i = 0; i < rounds; i++) {
            const randomNumber = Math.floor(Math.random() * 9);
            arr.push(randomNumber);
        }
        setRandomizeBulbs(arr);
    }, [rounds]);


    useEffect(() => {
        setTimeout(() => {
            toggleShowCards(true);
        }, wait * 2000);

        setTimeout(() => {
            setStartRound(true);
        }, 6000);

    }, []);

    return (
        <>
            {showCards &&
            <div className="cards-container">
                <div className="row row-1">
                    <Card needToLight={randomizeBulbs[currIndex] === 0 && !isBulbLight}
                          increaseIndex={increaseIndex}
                          delay={0}
                          startRound={startRound}
                          isClickable={canUserClick}
                          verifyClick={() => verifyClick(0)}/>
                    <Card needToLight={randomizeBulbs[currIndex] === 1 && !isBulbLight}
                          increaseIndex={increaseIndex}
                          delay={1}
                          startRound={startRound}
                          isClickable={canUserClick}
                          verifyClick={() => verifyClick(1)}/>
                    <Card needToLight={randomizeBulbs[currIndex] === 2 && !isBulbLight}
                          increaseIndex={increaseIndex}
                          delay={2}
                          startRound={startRound}
                          isClickable={canUserClick}
                          verifyClick={() => verifyClick(2)}/>
                </div>
                <div className="row row-2">
                    <Card needToLight={randomizeBulbs[currIndex] === 3 && !isBulbLight}
                          increaseIndex={increaseIndex}
                          delay={3}
                          startRound={startRound}
                          isClickable={canUserClick}
                          verifyClick={() => verifyClick(3)}/>
                    <Card needToLight={randomizeBulbs[currIndex] === 4 && !isBulbLight}
                          increaseIndex={increaseIndex}
                          delay={4}
                          startRound={startRound}
                          isClickable={canUserClick}
                          verifyClick={() => verifyClick(4)}/>
                    <Card needToLight={randomizeBulbs[currIndex] === 5 && !isBulbLight}
                          increaseIndex={increaseIndex}
                          delay={5}
                          startRound={startRound}
                          isClickable={canUserClick}
                          verifyClick={() => verifyClick(5)}/>
                </div>
                <div className="row row-3">
                    <Card needToLight={randomizeBulbs[currIndex] === 6 && !isBulbLight}
                          increaseIndex={increaseIndex}
                          delay={6}
                          startRound={startRound}
                          isClickable={canUserClick}
                          verifyClick={() => verifyClick(6)}/>
                    <Card needToLight={randomizeBulbs[currIndex] === 7 && !isBulbLight}
                          increaseIndex={increaseIndex}
                          delay={7}
                          startRound={startRound}
                          isClickable={canUserClick}
                          verifyClick={() => verifyClick(7)}/>
                    <Card needToLight={randomizeBulbs[currIndex] === 8 && !isBulbLight}
                          increaseIndex={increaseIndex}
                          delay={8}
                          startRound={startRound}
                          isClickable={canUserClick}
                          verifyClick={() => verifyClick(8)}/>
                </div>
            </div>
            }
        </>
    );
};

export default CardsContainer;