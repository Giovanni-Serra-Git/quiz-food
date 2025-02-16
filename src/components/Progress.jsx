import { Logo } from "./Header"

/* eslint-disable react/prop-types */
function Progress({numQuestions, totalPoints, index, points, answer}) {

    console.log(answer)
    
    return (
        <div className="flex flex-col gap-[1rem] w-[80%] mx-auto items-center">
            <Logo />
            <progress 
                value={index + 1}
                max={numQuestions}
                className="w-[60%] h-4 rounded-full overflow-hidden 
                bg-gray-00 [&::-webkit-progress-bar]:bg-gray-00 
                [&::-webkit-progress-value]:bg-white [&::-webkit-progress-value]:rounded-full
                 [&::-moz-progress-bar]:bg-white"/>
            <div className="flex gap-4 w-[60%]">
                <p>{index + 1}/{numQuestions}</p>
                <p>{points} / {totalPoints}</p>
            </div>
        </div>
    )
}

export default Progress
