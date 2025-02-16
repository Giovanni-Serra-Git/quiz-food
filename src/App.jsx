/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Error from "./components/Error";
import GameStarted from "./components/GameStarted";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import GameCompleted from "./components/GameCompleted";


function App() {

  const initialState = {
    questions: null,
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    highestScore: 0,
  }


  function reducer(state, action) {
    switch (action.type) {
      case "dataReceived":
        return {
          ...state,
          status: "ready",
          questions: action.payload,
        };
        case "dataFailed":
          return {
            ...state,
            status: "error",
        };
        case "startGame":
          return {
            ...state,
            status: "active",
        };
        case "answer":
          const currentQuestion = state.questions.at(state.index);

          return {
            ...state,
            answer: action.payload,
            points: action.payload === currentQuestion.correctOption ? currentQuestion.points + state.points : state.points    
        }
        case "nextQuestion":
          return {
            ...state,
            answer: null,
            index: state.index + 1
        }
        case "finishGame":
          return {
            ...state,
            status: "finished",
            highestScore: state.highestScore > state.points ? state.highestScore : state.points
        }
        case "restart":
          return {
           ...initialState,
           questions: state.questions,
           status: "ready",
           highestScore: state.highestScore
        }
    
      default: {
        throw new Error ("Action Uknown")
      }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)



  const {questions, status, index, answer, points, highestScore} = state;

  console.log("State: ", state)


  const numQuestions = questions?.length;
  console.log("Questions: ", questions)
  const totalAmountOfPoints = questions?.reduce((prev, curr) => {
    return prev + curr.points;
  }, 0);


  useEffect(() => {
    fetch('/.netlify/functions/questions')
      .then((res) => res.json())
      .then((data) => {
        console.log("Data: " + data)
        dispatch({ type: 'dataReceived', payload: data.questions })
      })
      .catch((err) => {
        console.log(err)
        dispatch({ type: 'dataFailed' })
      });
  }, []);
  
  










  return (
    <>
      {status === "loading" && <Loading />}
      {status === "error" && <Error />}
      {status === "ready" && <Header questions={questions} dispatch={dispatch} />}
      {status === "active" && (
        <div className="h-screen flex flex-col justify-center">
          <Progress  answer={answer} points={points} index={index} numQuestions={numQuestions} totalPoints={totalAmountOfPoints} />
          <GameStarted questions={questions} index={index} answer={answer} dispatch={dispatch} />
          <div className="w-[80%] mx-auto">
            <NextButton numQuestions={numQuestions} index={index} answer={answer} dispatch={dispatch} />
          </div>
         </div>
    )}
    {status === "finished" && 
    <div className="h-screen flex flex-col justify-center">
      <GameCompleted points={points} highestScore={highestScore} dispatch={dispatch} />
    </div>  }

    </>
  )
}

export default App
