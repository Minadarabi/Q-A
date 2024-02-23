import { useState } from "react";
import data from "./data";
import "./styles.css";






export const Index = () => {

    const [selected , setSelected] = useState(null);

  return (
    <div className="container">

        
            {
            data && data.length > 0 ? data.map((item)=>{
                return (<div key={item.id}>
                    <ul>
                        <li className="question" onClick={()=> {setSelected(item.id)}}>{item.question}
                        <span>+</span>
                        </li>
                        </ul>
                        {selected === item.id && <div className="answer">
                            {item.answer}
                        </div> }
                     
                    
                </div>)

            }) : 
            (<div>No Data found</div>)
            }
        

        </div>
  )
}
