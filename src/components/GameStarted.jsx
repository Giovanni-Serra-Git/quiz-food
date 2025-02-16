
/* eslint-disable react/prop-types */
function GameStarted({questions, index, dispatch, answer}) {
    const currentQuestion = questions[index];
    const hasAnswered = answer != null;
    
    return (
            <div className="w-[80%] md:w-[60%] my-[1rem]  mx-auto flex flex-col items-center gap-[1rem]">
                <p className="text-center md:text-left text-xl my-[1rem]">{currentQuestion.question}</p>
                {currentQuestion.options.map((option, index) =>  {
                    return (
                        <button 
                            className={`
                                max-w-fit
                                py-[0.5rem]
                                px-[1rem]
                                rounded-[10px]
                                transition-all
                                duration-[200ms]
                                block cursor-pointer
                                font-bold
                                ${answer === index ? "border-1 border-[#fff]" : ""}
                                ${hasAnswered ? index === currentQuestion.correctOption  ?  "bg-[#1ecbfa] translate-x-4" : "bg-[#ff8c1a]" : "bg-[#404040]" }
                                `}
                            key={index}
                            disabled={hasAnswered}
                            onClick={() => dispatch({type: "answer", payload: index})}>
                                {option}
                        </button>
                    )
                }
                )}
            </div>

    )
}

export default GameStarted
