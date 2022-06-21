import React from "react";

import "./bulbs-container.css";
import Bulb from "../bulb/Bulb";

const BulbsContainer: React.FC = () => {
    return (
        <div className="bulbs-container">
            <div className="row">
                <Bulb/>
                <Bulb/>
                <Bulb/>
            </div>
            <div className="row">
                <Bulb/>
                <Bulb/>
                <Bulb/>
            </div>
        </div>
    );
};

export default BulbsContainer;