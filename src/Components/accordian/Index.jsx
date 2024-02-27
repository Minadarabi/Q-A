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
                let isOpen = false;
                if(showMultipleAnswer === true &&  multipled.indexOf(item.id) > -1){
                   isOpen = true
                }
                if(showMultipleAnswer === false && selected === item.id){
                    isOpen = true;
                }



 
                return (<div className="qa" key={item.id}>
                    <ul>
                        <li className="question" onClick={()=> {
                            if(showMultipleAnswer === false){
                                setSelected(isOpen ? null : item.id)
                            }else{
                                setMultipled((prev)=>{
                                    if(prev.indexOf(item.id) > -1){
                                        const newSelected = prev.splice(prev.indexOf(item.id), 0)
                                        return newSelected
                                    }
                                    return [...prev , item.id] 
                                })
                            }
                            
                            }}>Question:{item.question}
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
       
        <button className="btn" onClick={()=>{
                setShowMultipleAnswer((prev)=> !prev)
                setSelected(null)
                setMultipled([])
            }}>
            {showMultipleAnswer ? "Show Single Answer" : "Show Multiple Answers"}</button>
        </>
  )
}
