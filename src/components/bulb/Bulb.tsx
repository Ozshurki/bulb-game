import React, {useEffect, useMemo, useState} from "react";

import "./bulb.css";
import classNames from "classnames";

interface BulbInt {
    needToLight: boolean;
    increaseIndex: () => void;
    verifyClick: () => void;
}

const Bulb: React.FC<BulbInt> = ({needToLight, increaseIndex, verifyClick}) => {

    const [isClick, setIsClick] = useState<boolean>(false);


    // Each bulb check if he need to light
    useEffect(() => {

        if (needToLight) {

            // Let dad know that he is light
            setTimeout(() => {
                increaseIndex();
            }, 1000);
        }
    });

    const clickHandler = () => {

        verifyClick();
        setIsClick(true);

        setTimeout(() => {
            setIsClick(false);
        }, 1000);

    };

    return (
        <div className={classNames("bulb", needToLight ? "light" : "dark", isClick && "click")}
             onClick={clickHandler}/>
    );
};

export default Bulb;