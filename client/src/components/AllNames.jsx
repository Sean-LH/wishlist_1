import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'


export default function AllNames(props) {
  const {name, deleteItem} = props
  const navigate = useNavigate()
  console.log('the name',name)
  const handleClick = ( ) =>{
    navigate(`/list/${name._id}`)
  }
// console.log("in the AllNames component:", props)
// console.log("the function",deleteItem)
  return (
    <div className="list-box">
      <h1>{name.name}</h1>
      <button onClick={handleClick}>Create List</button>
      <button onClick={()=>deleteItem(name)}>Delete</button>
    </div>
  )
}
/*
  Whatever I place in the "name" space on line 12 is what will be deleted
*/