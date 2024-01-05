function QuestionDesgin({children , head}){
    return (
        <div className=" border rounded-md p-10 inline-block w-[40vw] transition-all duration-500 ">
              <p className=" text-4xl start-font text-white  ">{head}</p>
              <div className=" p-3">
                {children}

              </div>
        </div>
    )
}
export default QuestionDesgin;
