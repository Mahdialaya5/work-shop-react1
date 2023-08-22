import React from 'react'
import Card1 from './Card'
import arr from "./data";
function CardList() {
  return (
    <div>
{arr.map((el)=>  
 <Card1 x={el}  /> )}
      
    </div>
  )
}

export default CardList