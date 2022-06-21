import React, {useCallback, useEffect, useState} from "react";

import "./bulbs-container.css";
import Bulb from "../bulb/Bulb";

interface BulbsContainerInt{
    rounds:number
    setIsCorrect: (isCorrect:boolean) => void;
}

const BulbsContainer: React.FC<BulbsContainerInt>= ({rounds}) => {

    const [randomizeBulbs, setRandomizeBulb] = useState([]);

    const setChosenNumber = useCallback((chosenNumber: number) => {

        console.log(chosenNumber);
    }, [randomizeBulb]);

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 6);
        setChosenNumber(randomNumber);
    }, [setChosenNumber]);

    return (
        <div className="bulbs-container">
            <div className="row">
                <Bulb bulbIndex={0}/>
                <Bulb bulbIndex={1}/>
                <Bulb bulbIndex={2}/>
            </div>
            <div className="row">
                <Bulb bulbIndex={3}/>
                <Bulb bulbIndex={4}/>
                <Bulb bulbIndex={5}/>
            </div>
        </div>
    );
};

export default BulbsContainer;