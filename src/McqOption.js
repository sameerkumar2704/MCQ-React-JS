function McqOption({option , index , dispatch }){

    return(
        <button onClick={()=>{dispatch({type:"score"  , payload:index })}} className=" w-full text-start border m-2 hover:scale-105 hover:bg-white rounded-md px-3 py-1 transition-all duration-200 hover:text-red-600 text-white">
            <span className=" text-2xl  font-semibold">{option}</span>
        </button>

    )
}
export default McqOption;
