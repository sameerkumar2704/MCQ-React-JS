function ResultObj({input , correctAnswer,question , correct}){
    const emoj = correct?'✅':'❌';
    return(
        <div className=" bg-gray-100 p-3 rounded-md m-4 ">
            <p className=" start-font font-bold text-xl text-gray-500">Q - {question}</p>

        <div className=" bg-white text-xl border border-gray-300  m-4 p-3 rounded-md">
            {
                correct && <p className="  text-green-400"> <span className=" font-bold">Correct Option : </span>{input} {emoj}</p>
            }
            {
                !correct &&
                (<><p className=" text-red-400" ><span className=" font-bold">your Answer :</span> {input} {emoj}</p> <p className=" text-green-400"> <span className=" font-bold ">Correct Option : </span> {correctAnswer} {'✅'}</p> </>)

            }
        </div>
        </div>
    )
}
export default ResultObj;
