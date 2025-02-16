<!-- Questions -->
<!-- Number of Questions -->
<!-- Points -->
<!-- Index -->
<!-- Answer -->
<!-- Highscore -->
<!-- Timer -->
<!-- SecondsRemaining -->

<!-- Status -->
<!-- Loading -->
<!-- Ready -->
<!-- Error -->
<!-- Active -->
<!-- Finished -->

<!-- Active -->
<!-- Questions -->

<!-- Load Questions  -->
<!-- Start Timer  -->
<!-- Show Progress  -->
<!-- Show Points  -->
<!-- Show Questions  -->

<!-- On Click Answer  -->
<!-- Show right answer through index loaded  -->
<!-- Load Points  -->
<!-- Show Button Next  -->
<!-- Reload State  -->


<!-- Index Questions  - 1 ? Finish Questions  -->
<!-- State  -->
<!-- Finished -->
<!-- Stop Timer -->
<!-- Show Points -->
<!-- Show Highest Score -->
<!-- Restart App -->


<!-- We start creating the static structure of the website -->

<!-- We need :  -->

<!-- Header -->
<!-- Main section with -->
<!-- N of Questions -->

<!-- Install JSON Server -->
<!-- Load Fake Api ---- UseEffect -->

<!-- Create Initial State with useReducer -->
<!-- Status loading, error, ready, start, finished -->
<!-- 
    const initialState = {}
    function reducer(state, action) {}
    const [state, dispatch] = useReducer(reducer, initialState)
 -->


 <!-- If Loading  --- > status loading: loading true -->
 <!-- If Loading Succeed --- > case: data received ---- status -> ready -> loading false-->
 <!-- If Loading Failer --- > case: data failed ---- status -> error -->
 <!-- If Loading Succeed status ready --- > display startGame ---- pass questions to it -->
 
 <!-- Ready -->
 <!-- Show number of questions and button to start the game -->
 <!-- UI Start Game -->

 <!-- StartGame - questions - button - pass props dispatch and questions -->

 <!-- Status Active - Load Questions - UI Questions --- props questions -->
 <!-- We need to load questions and start from the first one -->
 <!-- In order to update the screen we need state - hence we add index to the initial state -->
 <!-- UI - Questions -- props questions - index  -->
 <!-- Every Question has an index -- we check the current clicked index with the prop right answer received by the state -->
 <!-- if true color in green - the others red -->
 <!-- currentIndex === answer ? " correct" : "wrong" -->
 <!-- element was clicked ? clcked class  -->
 <!-- We need a new state -->
 <!-- OnClick :  -->
 <!-- Disable buttons if there was an answer -->
 <!-- 
    Dispatch
    Show answer
        We need a new state, answer : null
        State Answer
        We dispatch the answer with the current index
        To know if the answer is correct we compare it to the correctOptions in the list of questions
        In the reducer we compare the current index we are at, with the answer, if true we upload points
        State -- Points
    Display *next button*
    Upload Points ---- questionPoints with currentPoints
    Upload Questions -- Click on next button we increment the index of 1 
    We display the next button if there is an answer otherwise we return null from the button itself - dispatch action - newAnswer
  -->

  <!-- 
    We need Progess UI
    <Progess numOfTotalQuestions numOfTotalPoints>
    Use a progess bar
   -->

   <!-- 
    index === numQuestions < 1 
    We have to show the score and the maxPossible amount of points
    FinishGame props points numbQuestion -> percentage

    When we finish the game we will display also the highestScore
    We need a new state
    state -- highscore

    case "finished" we return the score and the highestScore comparing the current score
    with the highestScore in the reducer state

   -->

<!-- 
    Restart Button
    Reset state and start from ready status
-->
<!-- Create a timer -->
<!-- useEffect
  Set Interval
  Clear the interval
  Set seconds remaining in state and update it 
  When Game starts calculate the totalSeconds
 -->