import React from "react";
import "./side-bar.css"

const scoreHistory = [
    {
        name: "Oz",
        score: "100",
        date: "21/6/2022"
    },
    {
        name: "Ariel",
        score: "120",
        date: "10/6/2022"
    },
    {
        name: "Daniel",
        score: "110",
        date: "1/5/2022"
    }
]

const SideBar:React.FC = () => {
    return(
        <div className="side-bar-container">
            {
                scoreHistory.map((score, index) =>{
                    return(
                        <div className="score-history" key={score.name}>
                            <div className="player-position">{index+1}</div>
                            <div>Name: {score.name}</div>
                            <div>Score: {score.score}</div>
                            <div>Date: {score.date}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SideBar;