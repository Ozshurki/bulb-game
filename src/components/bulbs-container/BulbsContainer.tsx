import React, {useEffect, useState} from "react";

import "./bulbs-container.css";
import Bulb from "../bulb/Bulb";

interface BulbsContainerInt {
    rounds: number;
    updateRounds: (isCorrect: boolean) => void;
}

const BulbsContainer: React.FC<BulbsContainerInt> = ({rounds, updateRounds}) => {

    const [randomizeBulbs, setRandomizeBulbs] = useState<number[]>([]);
    const [currIndex, setCurrIndex] = useState<number>(0);
    const [clickNumber, setClickNumber] = useState<number>(0);

    const increaseIndex = () => setCurrIndex(currIndex + 1);

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
        } else // User is wrong
            updateRounds(false);
    };

    const updateArray = (arr: number[]) => {
        //console.log([...arr]);
        //setRandomizeBulbs(arr);
        setRandomizeBulbs([1, 0, 2]);
    };

    useEffect(() => {
        const arr: number[] = [];
        for (let i = 0; i < rounds; i++) {
            const randomNumber = Math.floor(Math.random() * 6);
            arr.push(randomNumber);
        }
        updateArray(arr);
    }, [rounds]);

    return (
        <div className="bulbs-container">
            <div className="row">
                <Bulb NeedToLight={randomizeBulbs[currIndex] === 0}
                      increaseIndex={increaseIndex}
                      verifyClick={verifyClick}
                      bulbIndex={0}/>
                <Bulb NeedToLight={randomizeBulbs[currIndex] === 1}
                      increaseIndex={increaseIndex}
                      verifyClick={verifyClick}
                      bulbIndex={1}/>
                <Bulb NeedToLight={randomizeBulbs[currIndex] === 2}
                      increaseIndex={increaseIndex}
                      verifyClick={verifyClick}
                      bulbIndex={2}/>
            </div>
            <div className="row">
                <Bulb NeedToLight={randomizeBulbs[currIndex] === 3}
                      increaseIndex={increaseIndex}
                      verifyClick={verifyClick}
                      bulbIndex={3}/>
                <Bulb NeedToLight={randomizeBulbs[currIndex] === 4}
                      increaseIndex={increaseIndex}
                      verifyClick={verifyClick}
                      bulbIndex={4}/>
                <Bulb NeedToLight={randomizeBulbs[currIndex] === 5}
                      increaseIndex={increaseIndex}
                      verifyClick={verifyClick}
                      bulbIndex={5}/>
            </div>
        </div>
    );
};

export default BulbsContainer;