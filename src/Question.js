import McqOption from "./McqOption";
import QuestionDesgin from "./QuestionDesgin";

function Question({question , count , total  , lastQuestion, dispatch , first , score}) {

  return (
    <div className=" flex flex-col justify-center items-center pt-32    ">
        <div>
            <div className=" flex justify-between m-10">
            <p className=" text-white text-5xl flex justify-center items-center"> <span className=" text-xl font-semibold">{count}</span>/<span className=" text-white  text-xl font-semibold">{total}</span></p>
            <p className=" text-white  font-semibold">points : <span className=" text-xl">{score}</span></p>
            </div>

        <QuestionDesgin  head = {question.question}>
            {question.options.map((option , index)=><McqOption index = {index}  dispatch = {dispatch} option={option} />)}

        </QuestionDesgin>

        </div>



    </div>
  );
}
export default Question;
