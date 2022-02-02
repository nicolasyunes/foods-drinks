import React, { useState } from 'react';
import Figure from 'react-bootstrap/Figure';
import styled from "styled-components"
import food from '../src/Static/Images/food-background.jpg'
import axios from 'axios';


function Home(props) {
    const [data,setData] = useState("")
    
    axios.get(`https://api.spoonacular.com/recipes/2255/information?apiKey=2e1014d723014a559ce39ea25f809844&includeNutrition=true`)
    .then(res => {
      setData(res.data)
    })

    console.log("DATAAA " , data);
    
    return (<Styled className=" bg-dark">
                <Figure style={{width: '100%',height: '100%' , margin: '0px'}}>
                    <Figure.Image
                        width={"100%"}
                        height={"320px"}
                        alt="171x180"
                        src={food}
                    />

                </Figure>
    </Styled>  );
}

export default Home;

const Styled = styled.div`

`