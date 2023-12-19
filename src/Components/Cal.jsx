import React, { useState } from 'react'

const Cal = () => {
    const [inp,setInp]=useState("")
    
    const handleClick=(e)=>{
        if(e.target.value === "="){
           CalculateResult();
        }else if(e.target.value === "CE"){
            setInp(" ")
        }else if(e.target.value === "---"){
            setInp(inp.slice(0,-1))
          }else{
            setInp(inp+e.target.value)
        }
   
    
    }

    const CalculateResult=()=>{
        const res=eval(inp);
        setInp(res)
    }

    const keyPress=(e)=>{
        if(e.key === 'Enter'){
            CalculateResult();
        }
    }
    const myStyle={
        "fontFamily": "Press Start 2P"
    }
    
    const[mode,setMode]=useState("☀️ Light Mode")
  const[btncolor , setBtncolor]=useState("btn-dark")
 

  const changeMode=()=>{
    if(mode === "☀️ Light Mode"){
      setMode("🌙 Dark Mode")
      setBtncolor("btn-light")
      
    }else{
      setMode("☀️ Light Mode")
      setBtncolor("btn-dark")
    
    }
   
  }

 

    return (
<>
        <div className='m-2' >
  <button className={`btn ${btncolor}`} value="Mode" onClick={(e)=>{changeMode(e)}}>{mode}</button>
  </div>
        <div className='container border border-2 border-dark text-center my-3  w-50' >
            <div className='my-3 '>
                <input className='form-control text-end p-3 ' type="text" style={myStyle} value={inp}  onKeyDown={(e)=>{keyPress(e)}}/>
            </div>
            <div className="container ">
                <div className="row m-1 p-1">
                    <button className="btn btn-outline-dark col mx-1 " value="CE" onClick={(e)=>{handleClick(e)}}>CE</button>
                    <button className="btn btn-outline-dark col mx-1 " value="---" onClick={(e)=>{handleClick(e)}}>---</button>
                    <button className="btn btn-outline-dark col mx-1 " value="/" onClick={(e)=>handleClick(e)}>/</button>
                    <button className="btn btn-outline-dark col mx-1 "value="*" onClick={(e)=>handleClick(e)}>*</button>
                </div>
                <div className="row  m-1 p-1">
                    <button className="btn btn-outline-dark col mx-1 " value="7" onClick={(e)=>handleClick(e)}>7</button>
                    <button className="btn btn-outline-dark col mx-1 " value="8" onClick={(e)=>handleClick(e)}>8</button>
                    <button className="btn btn-outline-dark col mx-1 " value="7" onClick={(e)=>handleClick(e)}>9</button>
                    <button className="btn btn-outline-dark col mx-1 " value="-" onClick={(e)=>handleClick(e)}>-</button>
                </div>
                <div className="row  m-1 p-1">
                    <button className="btn btn-outline-dark col mx-1 " value="4" onClick={(e)=>handleClick(e)}>4</button>
                    <button className="btn btn-outline-dark col mx-1 " value="5"onClick={(e)=>handleClick(e)} >5</button>
                    <button className="btn btn-outline-dark col mx-1 "value="6" onClick={(e)=>handleClick(e)}>6</button>
                    <button className="btn btn-outline-dark col mx-1 " value="+" onClick={(e)=>handleClick(e)}>+</button>
                </div>
                <div className="row  m-1 p-1">
                    <button className="btn btn-outline-dark col mx-1 " value="1" onClick={(e)=>handleClick(e)}>1</button>
                    <button className="btn btn-outline-dark col mx-1 " value="2" onClick={(e)=>handleClick(e)}>2</button>
                    <button className="btn btn-outline-dark col mx-1 " value="3" onClick={(e)=>handleClick(e)}>3</button>
                    <button className="btn btn-outline-dark col mx-1 " value="=" onClick={(e)=>handleClick(e)}>=</button>
                </div>
                <div className="row  m-1 p-1 ">
                    <button className="btn btn-outline-dark col row-span-2 mx-1 " value="0" onClick={(e)=>handleClick(e)}>0</button>
                    <button className="btn btn-outline-dark col row-span-2 mx-1 "value="00" onClick={(e)=>handleClick(e)}>00</button>
                    
                    <button className="btn btn-outline-dark col mx-1 " value="." onClick={(e)=>handleClick(e)}>.</button>
                   
                </div>
            </div>

        </div>
        </>
    )
}

export default Cal
