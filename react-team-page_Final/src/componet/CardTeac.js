import React from "react";

function Cardstyle (props){
    return(
      
        <div className=" mt-10  "  >
                <img className="h-[7rem] absolute  z-10 " src={props.src}></img>
                <div className=" absolute grid mt-5 text-white">
                <span className="bg-[#62C6FF] rounded-sm text-black font-semibold py-2 ml-12 pl-10 w-[15rem] ">{props.name}</span>
                <span className="bg-transparent border border-solid rounded border-slate-100 rounded-l-xl text-xs mt-1 py-2 ml-12 pl-10 w-[15rem] " >
                  {props.post}
                </span>
                </div>
                 </div>
        
        
      
    )
}

export default Cardstyle;