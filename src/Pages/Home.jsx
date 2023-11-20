import { useState } from "react";
import Banner from "../components/Banner";


const Home = () => {
  const [query,setQuery]=useState("");
  const handleInputChange=(e)=>{
      setQuery(e.target.value);
    
  }
  console.log(query);
  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange}/>
    </div>
  )
}

export default Home