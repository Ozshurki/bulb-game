import React, {useEffect, useState} from "react";

import "./card.css";
import classNames from "classnames";
import {motion} from "framer-motion";

interface CardInt {
    needToLight: boolean;
    increaseIndex: () => void;
    delay: number;
    isClickable: boolean;
    startRound: boolean;
    verifyClick: () => void;
}

const Card: React.FC<CardInt> = ({needToLight, increaseIndex, delay, isClickable, startRound, verifyClick}) => {

    const [isClick, setIsClick] = useState<boolean>(false);


    // Each card check if he need to light
    useEffect(() => {

        if(!startRound) return;


        if (needToLight) {
            // Let dad know that he is light
            setTimeout(() => {
                increaseIndex();
            }, 1500);
        }
    });

    const clickHandler = () => {

        if (!isClickable) return;

        verifyClick();
        setIsClick(true);

        setTimeout(() => {
            setIsClick(false);
        }, 1000);

    };

    const cardVariants = {
        hidden: {
            scale:0
        },
        visible: {
            scale: 1,
            transition: {delay: delay * 0.06, type: "spring"}
        }
    };

    return (
        <motion.div
            className={classNames("card", needToLight ? "light" : "dark", isClick && "click")}
            onClick={clickHandler}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{scale: 0.9}}>
        </motion.div>
    );
};

export default Card;