import React, { useState } from 'react'
import './App.css'

function App() {
  let obj=[{
    id:1,
    name:"A/C"
},
{
    id:2,
    name:"BACK"
},

{
    id:3,
    name:"ON"
},

{
    id:4,
    name:"+"
},

{
    id:5,
    name:"1"
},

{
    id:6,
    name:"2"
},

{
    id:7,
    name:"3"
},

{
    id:8,
    name:"-"
},

{
    id:9,
    name:"4"
},

{
    id:10,
    name:"5"
},

{
    id:11,
    name:"6"
},

{
    id:12,
    name:"*"
},

{
    id:13,
    name:"7"
},
{
    id:14,
    name:"8"
},

{
    id:15,
    name:"9"
},

{
    id:16,
    name:"/"
},

{
    id:17,
    name:"."
},
{
    id:18,
    name:"0"
},
{
    id:19,
    name:"%"
},

 

 
]
  const[box,setbox]=useState(obj)
  const [input, setInput] = useState('');
 

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
if (value=="A/C") {
    setInput("")
}
if (value=="BACK") {
    setInput((prevInput) => prevInput.slice(0, -5));
}
};
 
  
function answerValue(){
    let value=eval(input)
    setInput(value)

}
  return (
    <>
        <div className='inputbox'>

        <input type="text"  value={input} disabled />
        </div>
     <div className="container">
       {box.map((e)=>{
        return <>
        <div className='button'>
          <button onClick={(e)=>{handleButtonClick(e.target.innerHTML)}}>{e.name}</button>
          </div> 

          </>
       })}
       
     <button style={{backgroundColor:'rgb(230 45 45)',color:'white'}} onClick={answerValue}>=</button>
     </div>
     {/* <button onClick={() => handleGetValue('+')}>+</button>
          <button onClick={() => handleGetValue('-')}>-</button>
          <button onClick={() => handleGetValue('*')}>*</button>
          <button onClick={() => handleGetValue('/')}>/</button> */}

    
    </>
  )
}

export default App
