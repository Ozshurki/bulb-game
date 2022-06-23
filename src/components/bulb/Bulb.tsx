import React, {useEffect, useMemo, useState} from "react";

import "./bulb.css";
import classNames from "classnames";

interface BulbInt {
    NeedToLight: boolean;
    increaseIndex: () => void;
    bulbIndex: number;
    verifyClick: (index: number) => void;
}

const Bulb: React.FC<BulbInt> = ({NeedToLight, increaseIndex, bulbIndex, verifyClick}) => {

    const [isLight, setIsLight] = useState<string>("dark");
    const [isClick, setIsClick] = useState<boolean>(false);


    useEffect(() => {

        if (NeedToLight) {
            console.log("on")
            setIsLight("light");
            setTimeout(() => {
                setIsLight("dark");
                increaseIndex();
            }, 1000);
        }
    }, [NeedToLight]);

    const clickHandler = () => {

        verifyClick(bulbIndex);
        setIsClick(true);

        setTimeout(() =>{
            setIsClick(false);
        }, 1000);

    };

    return (
        <div className={classNames("bulb", isLight, isClick && "click")}
             onClick={clickHandler}/>
    );
};

export default Bulb;