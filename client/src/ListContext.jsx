import { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const listContext = createContext()


import React from 'react'

export default function ListProvider(props) {

  const [allNames, setAllNames]= useState([])


  function getNames(){
    axios.get('/api/names')
    .then(res => setAllNames(res.data))
    .catch(err => console.log(err))
  }

  function newName(data){
    axios.post('/api/names', data)
    .then(res => {
      console.log(res.data)
      setAllNames(prevNames => [...prevNames, res.data])
    })
    .catch(err => console.log(err))
  }

  useEffect(()=>{
    getNames()
  },[])

  function noName(iDdata){
    axios.delete(`/api/names/${iDdata}`)
    .then(res =>{
      console.log(res.data)
      setAllNames(prevNames => prevNames.filter(name=> name._id !== iDdata))
    })
  }
  return (
    <listContext.Provider value={{allNames, newName, noName}}>
      {props.children}
    </listContext.Provider>
  )
}
/* 
I had the idea to create an additional context provider for the "items" 
page. But I'm not sure how to blend it with context provider I currently have. Also
I'm not sure how to implement the right paths & endpoints to make sure everything works
*/