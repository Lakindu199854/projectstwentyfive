import { useEffect, useState } from "react";

export default function RandomColor() {
    const [typeOfColor,settypeOfColor]=useState("hex");
    const [color,setColor]=useState('#000000');


    const getRandomNumber=(arrayLength)=>{
        let randomNum=Math.floor(Math.random()*arrayLength)
        return randomNum;
    }

    const handleCreateHexCol=()=>{
        if(typeOfColor==="hex"){
            const charsArray=["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
            let hexColor = "#";
            for(let i=0;i<6;i++){
                hexColor+=charsArray[getRandomNumber(charsArray.length)];

            }

            console.log(hexColor);
            setColor(hexColor); 
        }else{
            console.log("RGB Selected");
        }
       
    }

    const handleCreateRGBCol=()=>{
        const r=getRandomNumber(256);
        const g=getRandomNumber(256);
        const b=getRandomNumber(256);

        const rgbColor=`rgb(${r},${g},${b})`;
        console.log(rgbColor);
        setColor(rgbColor);
    }

    useEffect(()=>{
        typeOfColor==="hex"?(handleCreateHexCol()):handleCreateRGBCol();
        //Here we have to call the funtion.So we cant just use handleCreateHexCol):handleCreateRGBCol
    },[typeOfColor])



  return (
    <div style={{
        width:'100vh',
        height:'100vh',
        background:color,
    }}>
      Color-Generator
      <container>
        <button className="createHex" onClick={()=>settypeOfColor("hex")}>Hex Colour</button>
        <button className="createRGB" onClick={()=>settypeOfColor("RGB")}>RGB Colour</button>
        <button className="geneRandomColButton" onClick={typeOfColor==="hex"?(handleCreateHexCol) :handleCreateRGBCol}>Generate Random Colour</button>
        
        <div className="content"
        style={{display:"flex",justifyContent:"center",allignItems:"center",color:"white",fontSize:"60px",marginTop:"50px",flexDirection:"column",}}>
            <h2 className="color type">
                {typeOfColor==="hex" ? ("Hex Color") : "RGB Color"}
            </h2>
            <h1 className="color code">
                {color}
            </h1>
        </div>
      </container>
    </div>
  );
}
 