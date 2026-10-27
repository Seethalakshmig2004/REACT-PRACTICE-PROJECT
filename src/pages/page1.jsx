import { useState } from "react";
export function Name() {
  return (
    <>
      <h1>Name : Seethalakshmi              -- Normal HTML Tag</h1>
    </>
  );
}

export function Education()
{
    const[education,seteducation]=useState("B.Sc.Computer Science")
    const[passedyear,setpassedyear]=useState(2025)
return(
    <>
 <h1>Qualification : {education} - {passedyear}           -- With useState</h1>
    </>
)
}

export function CalAge(){
    const[birthyear,setbirthyear]=useState(2004)
    const[currentyear,setcurrentyear]=useState(2026)
    return(
        
        <><h1>Calculate Age : {currentyear-birthyear}           -- Calculation</h1>
        </>
    )
}

export function Profession()
{
    const[Profession,setProfession]=useState("Studying")
    return(
        <>
        <h1>Profession : {Profession=="Studying" ? "Student" : "Work" }          -- Expression</h1>
        </>
    )
}