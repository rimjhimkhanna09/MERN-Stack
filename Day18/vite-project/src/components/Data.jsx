import axios from "axios"
import { useEffect } from "react"


export const Data = () => {

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => console.log(res.data[1].address.city))
    },[])
  return (
    <>
    <div>Data from Api</div>

    </>
  )
}