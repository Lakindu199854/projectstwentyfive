import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css"
export default function StarRating({ noOfStars = 5 }) {

    const [rated,setRated]=useState(0);
    const [move,setMove]=useState(0);

    const hanldeOnClick=(index)=>{
        console.log(index);
        setRated(index);
    }

    const hanldeOnMouseMove=(index)=>{
        console.log(index);
        setMove(index);

    }
    const hanldeOnMouseLeave=()=>{
        console.log(rated);
    }
  return (
    <div>
      {[...Array(noOfStars)].map((_,index) => {
        index+=1;
        return(
        <FaStar 
            key={index}
            className={index<=(move) ? "Active":"Inactive"}
            //Stars that have the index below or equals to move has the class name as "Active"
            //and other stars have the class name as "Inactive"
            onClick={()=>hanldeOnClick(index)}
            onMouseMove={()=>hanldeOnMouseMove(index)}
            onMouseLeave={()=>hanldeOnMouseLeave()}
            size={50}
            
        />
        )
        
      })}
    </div>
  );
}
