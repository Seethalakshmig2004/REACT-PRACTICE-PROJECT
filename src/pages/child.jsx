// export function Child({name,age,course})
// {
//     return(
//         <>
//         <h1>My name is {name}</h1>
//         <h2>My age is {age}</h2>
//         <h3>Course : {course}</h3>
//         </>
//     )
// }

export function Child({productname,price,brand})
{
    return(
        <>
        <pre>
Product : {productname}
Price : {price}
Brand : {brand}
        </pre>
        </>
    )
}