import React,{useContext, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { listContext } from '../ListContext'
import {itemContext} from   '../ItemContext'
import axios from 'axios'

export default function Tester() {

const {listId} = useParams()
const {allNames} = useContext(listContext)
const foundName = allNames.find(name => name._id === listId)
// console.log('found name is heree',foundName)
// console.log('found listId is heree',listId)
const {allItems, postItems} = useContext(itemContext)
// console.log('its all items',allItems)

const filteredItems = allItems.filter((item)=> item.wisher === listId)
console.log(filteredItems)
const initVal = {
  name: "",
  type: "",
  cost: 0
}
const [itemInfo, setItemInfo] = useState(initVal)
// every item has a name, type, and cost

function handleChange(e){
  // console.log(e.target.value)
  const {name, value} = e.target
  setItemInfo(prevInfo => {
    return {
      ...prevInfo,
      [name]: value
    }
  }
)}

function handleSubmit(e){
  e.preventDefault()
  // console.log(`submitted`, allItems)
  postItems(listId, itemInfo)
}
  return (
    <div>
      <h1>{foundName.name}</h1>
      <form onSubmit={handleSubmit} >
        <label> Item name: 
          <input
          type="text"
          name='name'
          value={itemInfo.name}
          onChange= {handleChange}
          placeholder="desired item here"
          />
        </label>
        <label> Item type: 
          <input
          type="text"
          name='type'
          value={itemInfo.type}
          onChange= {handleChange}
          placeholder="clothing? tech?"
          />
        </label>
        <label> Item cost: $
          <input
          type="number"
          name='cost'
          value={itemInfo.cost}
          onChange= {handleChange}
          placeholder="How much is it?"
          />
        </label>
        <button>Add Item</button>
      </form>
      <div>{filteredItems.map(item => {
        return (
          <div> 
            <h1>{item.name}</h1>
            <h3>{item.type}</h3>
            <p>${item.cost}</p>
            <p>{item._id}</p>
          </div>
        )
      })}</div>
    </div>
  )
}
