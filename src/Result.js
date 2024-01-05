import ResultObj from "./ResultObj";

function Result({output , questions}){
    const total =  questions.reduce((presum , curr)=>presum+curr.points,0)
    const score = output.reduce((prev , curr , index)=>{
        if(curr[0] === curr[1]){
            return prev + questions[index].points
        }
        return prev;
    } , 0)
    const per = Math.round(score/total * 100);
    var emoj = '🏆'
    if(per<=100 && per>90){
        emoj = '🏆'
    }else if(per<=90 && per>70){
        emoj = '😊'
    }else if(per<=70 && per>50){
        emoj = '👍'
    }else{
        emoj  = '😟'
    }

    return (
        <div className=" flex flex-col gap-5 justify-center items-center pt-32">
            <p className=" start-font text-white text-5xl font-bold">Output</p>
            <div className=" w-[40vw] h-[50vh] border p-6 overflow-y-scroll">
                {
                    output.map((obj , index)=><ResultObj question={questions[index].question} input={questions[index].options[obj[0]]}
                    correctAnswer={questions[index].options[obj[1]]} correct={obj[0] === obj[1]}/>)
                }
            </div>
            <p className=" text-3xl text-white  start-font">your score <span className=" font-mono">{score}</span> out of <span className=" font-mono">{total}</span> {emoj} </p>

        </div>
    )
}
export default Result;
