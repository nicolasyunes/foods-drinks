import {React,useEffect,useState} from 'react'
import ItemCard from "./ItemCard";
import axios from "axios";
import Divider from "@mui/material/Divider/Divider"

export default function Random() {
  
  const [random,setRandom] = useState([])

  const fetchRandom = () =>{
    axios.get('https://api.spoonacular.com/recipes/random/?apiKey=0b2e902fdbb14378a4079220ab9dbbd2')
        .then((response) => setRandom(response.data.recipes[0]))
        .catch(console.error);
  }

  useEffect(() => { 
    fetchRandom();
  }, []);

  console.log("RANDOM " , random)


  return (
    <div className="p-4 randomCard " style={{"marginTop":"100px"}}>
      <Divider textAlign="center" className="pb-4">
        <h6>Best seller </h6>
      </Divider> 
      
      <ItemCard element={random} />
    </div>
  )
}
