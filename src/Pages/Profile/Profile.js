import React, { useEffect, useState } from 'react'
import Header from '../../Header/Header'


function Profile() {
  const[set, setData]= useState([])

  useEffect(()=>{
    fetch("https://restcountries.com/v2/all")
    .then((result)=>result.json())
    .then((resp)=>setData(resp))
  },[])
  console.log(set)

  function data(){
    return(
      <table>
        <tbody>
          {set.map(items=>(
            <tr>
              <td>{items.name}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
  return (
    <div> 
    <h1>List</h1> 
    {data()}
    </div>
  )
}

export default Profile