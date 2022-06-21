import React from "react";

import "./bulb.css";

interface BulbInt{
    bulbIndex:number;
}

const Bulb: React.FC<BulbInt>= ({bulbIndex}) => {
    return (
        <div className="bulb bulbIndex"/>
    );
};

export default Bulb;