import {React,useEffect,useState} from 'react'

import axios from "axios";
import Divider from "@mui/material/Divider/Divider"

export default function Menu({data}) {
  
  const [random,setRandom] = useState([])

  const fetchRandom = () =>{
    axios.get('https://api.spoonacular.com/recipes/random/?apiKey=0b2e902fdbb14378a4079220ab9dbbd2')
        .then((response) => setRandom(response.data.recipes[0]))
        .catch(console.error);
  }

  useEffect(() => { 
    fetchRandom();
  }, []);

  console.log("data msp  " , data)


  return (
    <div className="p-4 randomCard " style={{"marginTop":"100px"}}>
      <Divider textAlign="center" className="pb-4">
        <h6>Menu</h6>
      </Divider> 
      <div>
      
      </div>
      
      
    </div>
  )
}
