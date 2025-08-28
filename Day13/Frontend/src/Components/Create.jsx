import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Create() {

  const [formData, setFormData] =useState({
    title:"",
    author:"",
    year:""
  })

  const navigate = useNavigate()
  //const API_URL = "http://localhost:5001/books"
  const API_URL = "https://mern-stack-f2se.onrender.com/books"

  const handlesubmit = async (e) => {
    e.preventDefault()
    await axios.post(API_URL,formData)
    navigate("/")
  }


  return (
    <div className='card p-3 shadow'>
      <h3> Add New Book </h3>
      <form onSubmit={handlesubmit}>
      Title : <input placeholder='Enter Title' 
      value={formData.title} 
      onChange={(e)=>setFormData({...formData, title:e.target.value})}
      type='text' 
      className='form-control mb-2'
      required/> <br/>
      Author : <input placeholder='Enter Authon' 
      value={formData.author} 
      onChange={(e)=>setFormData({...formData, author:e.target.value})}
      type='text' 
      className='form-control mb-2'
      required/> <br/>
      Year : <input placeholder='Enter Year' 
      value={formData.year} 
      onChange={(e)=>setFormData({...formData, year:e.target.value})}
      type='number' 
      className='form-control mb-2'
      required/> <br/>
      <button className='btn btn-primary'>Add</button>
      </form>

      </div>
  )
}
