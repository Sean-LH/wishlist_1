import React, {useState, useContext} from 'react'
import AllNames from './AllNames'
import {v4 as uuidv4} from 'uuid'
import { listContext } from '../ListContext'


export default function People_form() {
  const {allNames, newName, noName} = useContext(listContext)

  const initVal = {
    name: ''
  }
  const [listName, setListName]= useState(initVal)
 //Each item in the array is goint to be its own separate list

  const handleChange = (e) => {
    const {name, value} = e.target
    setListName(prevName => {
      return {
        ...prevName,
        [name]: value
      }
    })
  }

  console.log(listName)
  const handleSubmit = (e) =>{
    e.preventDefault()
    newName(listName)
    setListName(initVal)
  }
  const handleDelete = (deletedName) =>{
    // const changeList = allLists.filter((oneName)=> oneName !== deletedName)
    // const changeList = allNames.filter((oneName)=> oneName !== deletedName)
    // The logic of this function is handled in the Context file
    console.log("deleted")
    console.log('The name', deletedName)
    noName(deletedName._id)
    // setAllLists(changeList)
  }
  console.log(listName)
  // console.log('this shows the names', allLists)

  const showList = allNames.map((name)=>{
    // console.log('in the map function:',name)
    return <AllNames name = {name}
    key={name._id}
    deleteItem ={handleDelete}
    />
  })
  return (
    <div>
      <form className='name_form' onSubmit={handleSubmit}>
        <label>Name for List
          <input type='text' 
          name='name'
          value={listName.name} 
          onChange={handleChange}
          placeholder='Name'
          />
        </label>
        <button>Make Page</button>
      </form>
      {showList}
    </div>
  )
}
