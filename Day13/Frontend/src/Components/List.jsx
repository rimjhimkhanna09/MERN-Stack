import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function List() {
    const[books,setBooks] = React.useState([])

    //const API_URL = "http://localhost:5001/books"
    const API_URL = "https://mern-stack-f2se.onrender.com/books"


    useEffect(()=>{
        axios.get(API_URL)
        .then(res => setBooks(res.data))
    },[])
    const handleDelete= async(id)=>{
        await axios.delete(`${API_URL}/${id}`)
        setBooks(books.filter((b)=>b,_id !== id))
    }

  return (
    <table className='table table-dark table-hover'>
        <thead>
            <tr>
                <th> Title</th>
                <th> Author</th>
                <th> Year </th>
                <th style={{width:'180px'}}> Actions </th>
            </tr>
        </thead>
        <tbody>
            {books.map((books)=>(
                <tr key={books._id}>
                    <td>{books.title}</td>
                    <td>{books.author}</td>
                    <td>{books.year}</td>
                    <td> 
                        <Link to={`/update/${books._id}`} className='btn btn-warning btn-sm me-3'> edit</Link>
                        <button onClick={()=>{
                            handleDelete(books._id)
                        }} 
                        className='btn btn-warning btn=sm'> delete </button>
                    </td>
                    
                </tr>
            ))}

        </tbody>
    </table>
  )
}
