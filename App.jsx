import { useState } from "react"


function App() {
 
  return (
    <>
    {/* <Card inner={<Logic></Logic>}></Card>
    <Card inner={<Logic2></Logic2>}></Card> */}
    
    <Card>
      Hi there i am child
    </Card>
    </>
  )
}

function Card({children})
{
  return <>
    <div style={{border : "2px solid black" , padding : 2}}>
    {children}
    </div>
  </>
}
// function Logic (){
//   return <>Hi iam logic</>
// }

// function Logic2(){
//   return <>Hi iam Logic2</>
// }


export default App