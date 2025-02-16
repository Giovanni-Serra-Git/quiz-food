/* eslint-disable react/prop-types */
function NextButton({answer, numQuestions, index, dispatch}) {
    if (answer == null) return

    if (index < numQuestions - 1) {
        return (
            <button className="btn" onClick={() => dispatch({type: "nextQuestion"})}>
                Next
            </button>
        )
    }

    if (index == numQuestions - 1) {
        return (
            <button className="btn" onClick={() => dispatch({type: "finishGame"})}>
                Finish
            </button>
        )
    }
}

export default NextButton
