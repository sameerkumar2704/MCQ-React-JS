import { useEffect, useReducer } from "react";
import StartPage from "./Startpage";
import Question from "./Question";
import Result from "./Result";

const intitalState = {
  status: "ready",
  questions: [],
  index: 0,
  score: 0,
  answer: [],
};
function reducer(state, action) {
  switch (action.type) {
    case "status":
      return { ...state, status: action.payload };
    case "loaded":
      return { ...state, questions: action.payload };
    case "next":
      return { ...state, index: state.index + 1 };
    case "prev":
      return { ...state, index: state.index - 1 };
    case "score":
      const question = state.questions[state.index];
      const correct = question.correctOption === action.payload;
      return {
        ...state,
        score: correct ? state.score + question.points : state.score,
        index: state.index + 1,
        status:
          state.index + 1 === state.questions.length ? "result" : state.status,
        answer :[...state.answer ,[ action.payload , question.correctOption]]
      };

    default:
      throw new Error("Wrong case");
  }
}
function App() {
  const [{ status, questions, index, score, answer }, dispatch] = useReducer(
    reducer,
    intitalState
  );

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((resp) => resp.json())
      .then((data) => dispatch({ type: "loaded", payload: data }));
  }, []);

  console.log(status);
  return (
    <div className="  bg-red-600 h-screen w-screen">
      {status === "ready" && <StartPage dispatch={dispatch} />}
      {status === "questions" && (
        <Question
          score={score}
          count={index + 1}
          total={questions.length}
          question={questions[index]}
          first={index === 0}
          lastQuestion={index + 1 === questions.length}
          dispatch={dispatch}
        />
      )}
      {status === "result" && <Result output={answer} questions={questions}/>}
    </div>
  );
}

export default App;
