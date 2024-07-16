import React from 'react'
import Greet from './Greet'

const App = () => {

  let users=[
    {id:1,
    name:'mounika',
    age:32,
    place:'hyderabad'
},
{
  id:2,
  name:'vedansh',
  age:4,
  place:'del'
},
{
  id:3,
  name:'ramesh',
  age:36,
  place:'bpl'
}
  ]

  return (
    <>
   {
    users.map(
      (u)=>{
        return <Greet key={u.id} id={u.id} name={u.name} place={u.place} age={u.age}/>
      }
    )
   }
    </>
  )
}

export default App
