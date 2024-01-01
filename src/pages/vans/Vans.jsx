import { useState, useEffect } from "react"
const Vans = () => {

  const [vans, setVans] = useState([null])
  useEffect(()=>{
    fetch('api/vans')
    .then(res => res.json())
    .then(data => console.log(data))
   
    
  },[])
  return (
    <div></div>
  )
}
export default Vans