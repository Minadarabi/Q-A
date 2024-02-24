import { useState } from "react";
import data from "./data";
import "./styles.css";



export const Index = () => {

    const [selected , setSelected] = useState(null);
    const [multipled , setMultipled] = useState([]);
    const [showMultipleAnswer , setShowMultipleAnswer] = useState(false);

   
 

  return (
   <>
   <h1>React Q&A</h1>
  
    <div className="container">

        
            {
            data && data.length > 0 ? data.map((item)=>{
                const isOpen = selected === item.id
                const toggle = isOpen ? null : item.id
                return (<div className="qa" key={item.id}>
                    <ul>
                        <li className="question" onClick={()=> {setSelected(toggle)}}>Question:{item.question}
                        <span>+</span>
                        </li>
                        </ul>
                        {isOpen && <div className="answer">
                         Answer:{item.answer}
                        </div> }
                     
                    
                </div>)

            }) : 
            (<div>No Data found</div>)
            
            }
        

        </div>
       
        <button className="btn" onClick={()=>{setShowMultipleAnswer((prev)=> !prev)}}>
            {showMultipleAnswer && multipled ? "Show Single Answer" : "Show Multiple Answers"}</button>
        </>
  )
}
