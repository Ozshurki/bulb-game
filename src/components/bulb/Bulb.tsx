import React, {useEffect, useState} from "react";

import "./bulb.css";
import classNames from "classnames";

interface BulbInt {
    isOn: boolean;
    increaseIndex: () => void;
    bulbIndex: number;
    verifyClick: (index: number) => void;
}

const Bulb: React.FC<BulbInt> = ({isOn, increaseIndex, bulbIndex, verifyClick}) => {

    const [isLight, setIsLight] = useState<string>("dark");

    useEffect(() => {

        if (isOn) {
            console.log(`Bulb number ${bulbIndex} is on`);
            setIsLight("light");

            setTimeout(() => {
                setIsLight("dark");
                increaseIndex();
            }, 1000);
        }

    }, [isOn]);

    const click = () => {
        verifyClick(bulbIndex);
    };

    return (
        <div className={classNames("bulb", isLight)}
             onClick={click}/>
    );
};

export default Bulb;