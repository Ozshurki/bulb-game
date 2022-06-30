import React, {useEffect, useState} from "react";

import "./bulb.css";
import classNames from "classnames";
import {motion} from "framer-motion";

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
        <motion.div
            className={classNames("bulb", needToLight ? "light" : "dark", isClick && "click")}
            onClick={clickHandler}
            animate={{needToLight} && {rotateX: 180}}
            transition={{needToLight} && {duration: "1"}}/>
    );
};

export default Bulb;