/* eslint-disable react/prop-types */

function Header({questions, dispatch}) {
    console.log(questions)
    return (
        <>
            <div className="flex flex-col gap-[1rem] w-[95%] md:w-[80%] h-screen mx-auto items-center justify-center">
                <div>
                <Logo />
                <div className="flex flex-col items-center">
                    <p className="text-2xl text-center my-[1rem]">Quiz App</p>
                    <p className="text-xl my-[1rem]">Solve {questions.length } questions from this quiz</p>
                    <button className="bg-[#595959] py-2 px-4 rounded-[10px] w-fit  hover:bg-[#404040] transition-colors duration-[5ms]" 
                         onClick={() => dispatch({ type: 'startGame' })}>Start game</button>
                </div>
                
                </div>

            </div>
        </>
    )
}

export function Logo() {
    return (
        <div className="flex gap-y-[1rem] flex-row items-center my-[1.5rem] md:my-[1rem]">
            <img src="./react_logo.png" alt="React Logo Quiz" className="w-[120px] h-[60px] md:w-[200px] md:h-[100px]" />
            <h2 className="capitalize text-3xl md:text-4xl">the react quiz</h2>
        </div>
    )
}

export default Header
