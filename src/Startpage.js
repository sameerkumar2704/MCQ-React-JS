function StartPage({dispatch}){
    return (
        <div className=" flex  flex-col items-center    pt-56  py-10 space-y-8 h-full ">
            <h1 className=" start-font text-6xl font-bold  text-white ">React JS 🎯</h1>
            <button className=" relative border group rounded-2xl overflow-hidden text-3xl  " onClick={()=>{dispatch({type:"status" ,payload:'questions'})}}>
                <span className=" px-8 py-2 inline-block text-white">Start</span>
                <span className=" py-2 start-font absolute left-0 right-0 top-0 bottom-0  group-hover:w-full w-0 overflow-hidden bg-white transition-all duration-500  ">Go</span>
            </button>

        </div>
    )
}
export default StartPage;
