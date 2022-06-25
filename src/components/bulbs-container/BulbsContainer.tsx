import React, {useEffect, useState} from "react";

import "./bulbs-container.css";
import Bulb from "../bulb/Bulb";


interface BulbsContainerInt {
    rounds: number;
    updateRounds: (isCorrect: boolean) => void;
    wait: number;
    showBulbs: boolean;
    toggleShowBulbs : (show:boolean) => void;
}

const BulbsContainer: React.FC<BulbsContainerInt> = ({rounds, updateRounds, wait, showBulbs, toggleShowBulbs}) => {

    const [randomizeBulbs, setRandomizeBulbs] = useState<number[]>([]);
    const [currIndex, setCurrIndex] = useState<number>(0);
    const [clickNumber, setClickNumber] = useState<number>(0);
    const [isBulbLight, setIsBulbLight] = useState<boolean>(false);



    // Dad increase the index
    const increaseIndex = () => {

        // If any bulb is light so start a timer
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
            // Check the next bulb
            setClickNumber(clickNumber + 1);
        } else{// User is wrong
            updateRounds(false);
            setTimeout(() => {
                setCurrIndex(0);
                setClickNumber(0);
                setIsBulbLight(false);
            }, 1500)
        }

    };

    useEffect(() => {
        console.log("container render")
        console.log(isBulbLight);
        console.log(currIndex);
        const arr: number[] = [];
        setIsBulbLight(false);
        for (let i = 0; i < rounds; i++) {
            const randomNumber = Math.floor(Math.random() * 6);
            arr.push(randomNumber);
        }
        setRandomizeBulbs(arr);
    }, [rounds]);


    useEffect(() => {
        setTimeout(() => {
            toggleShowBulbs(true);
        }, wait * 1000);
    }, []);

    return (
        <>
            {showBulbs && <div className="bulbs-container">
                <div className="row">
                    <Bulb needToLight={randomizeBulbs[currIndex] === 0 && !isBulbLight} increaseIndex={increaseIndex} verifyClick={() => verifyClick(0)}/>
                    <Bulb needToLight={randomizeBulbs[currIndex] === 1 && !isBulbLight} increaseIndex={increaseIndex} verifyClick={() => verifyClick(1)}/>
                    <Bulb needToLight={randomizeBulbs[currIndex] === 2 && !isBulbLight} increaseIndex={increaseIndex} verifyClick={() => verifyClick(2)}/>
                </div>
                <div className="row">
                    <Bulb needToLight={randomizeBulbs[currIndex] === 3 && !isBulbLight} increaseIndex={increaseIndex} verifyClick={() => verifyClick(3)}/>
                    <Bulb needToLight={randomizeBulbs[currIndex] === 4 && !isBulbLight} increaseIndex={increaseIndex} verifyClick={() => verifyClick(4)}/>
                    <Bulb needToLight={randomizeBulbs[currIndex] === 5 && !isBulbLight} increaseIndex={increaseIndex} verifyClick={() => verifyClick(5)}/>
                </div>
            </div>}
        </>
    );
};

export default BulbsContainer;