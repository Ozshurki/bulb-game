import React from "react";
import {Link} from "react-router-dom";

import "./Button.css";


interface ButtonInt {
    url: string;
    clickHandler: () => void;
    text: string;
}

const Button: React.FC<ButtonInt> = ({url, clickHandler, text}) => {
    return (
        <Link className="btn"
              to={url}
              onClick={clickHandler}>
            {text}
        </Link>
    );
};

export default Button;