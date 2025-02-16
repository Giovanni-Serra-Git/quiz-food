import { Logo } from "./Header"

/* eslint-disable react/prop-types */
function GameCompleted({points,highestScore, dispatch}) {
    return (
        <div className="flex flex-col items-center">
            <Logo />
            <div className="w-[80%] text-center flex flex-col items-center gap-[1rem]">
                <p className="bg-[#1ecbfa] w-[200px] px-[1rem] py-[0.2rem] rounded-[10px]"> You got total {points} points </p>
                <p>The highest score is : {highestScore}</p>
                <button className="btn px-[1rem]" onClick={() => dispatch({type: "restart"})}>restart game</button>
            </div>
        </div>
    )
}

export default GameCompleted
