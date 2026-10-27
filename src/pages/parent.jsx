// import { Child } from "./child"
// export function Parent(){
//     return(
// <Child name="Seethalakshmi" age={22} course="B.Sc.Computer Science"/>
//     )
// }
 
import { Child } from "./child"

export function Parent(){
    return(
        <>
        <Child productname="Laptop" price={50000} brand="HP" />
        </>
    )
}