/*
This is the Item context page. Meant for housing the data and logic used manipulate the 
item list page. I need functions: 
- Getting the item data from an api
    -- placing the data in a useEffect to display the data

- Posting new items 
- Deleting the items
*/

import{ createContext, useState, useEffect} from 'react';
import axios from 'axios'

export const itemContext = createContext()

export default function ItemListing(props){
  const [allItems, setAllItems] = useState([])

  function getItems() {
    axios.get('/api/items')
    .then(res => setAllItems(res.data))
    .catch(err => console.log(err))
  }

function postItems(wisherId, newItem){
  axios.post(`/api/items/${wisherId}`, newItem)
  .then(res => setAllItems(prevItems => [...prevItems, res.data]))
  .catch(err => console.log(err))
}
useEffect(()=>{
  getItems()
}, [])

return (
  <itemContext.Provider value = {{allItems, getItems, postItems}}>
    {props.children}
  </itemContext.Provider>
)
}
/*
  Will my endpoint work? 
  Why aren't my function and constanants in different colors?
*/