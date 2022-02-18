import React, { useState } from 'react';
import Figure from 'react-bootstrap/Figure';
import styled from "styled-components"
import vegetables from '../src/Static/Images/vegetables.jpg'
import About from './About';
import ListFood from "./ListFood"
import Random from './Random';
import Login from './Login'
import {Navigate} from "react-router-dom"


function Home() {

  let token = localStorage.getItem('token')
 
  
    
   return (
  

   <Styled className="">
   { !token && <Navigate to="/" />}
    <div className="title d-flex">
      
        <Figure style={{width: '100%',height: '600px', margin: '0px'}}>
          <Figure.Image
              width={"100%"}
              alt="171x180"
              src={vegetables}
              className="imageBackground "
          />
        </Figure>
    </div>  
    
    <div className="body  bg-light">
      <div className="list-foods col-lg-9 col-sm-12">
        <ListFood/>
      </div>
      
      <div className="about col-lg-3 col-sm-12">
        <About/>
        <Random />
      </div>
    </div>
  </Styled>
   )
  
}

export default Home;

const Styled = styled.div`


.imageBackground{
  vertical-align:bottom;
  height:100%
}

.body{
  display:flex;
  flex-direction:row;
  width:100%;
  


  @media (max-width: 992px){
    flex-direction:column;
    
  }
  @media (max-width: 768px){
    flex-direction:column-reverse;
    
    
  }
}

.shop{
  position:sticky;
  top:50px;
}


.MuiButton-root{
  background-color:#929095;
  color:white;
  font-weight:bold;
  width:50%;
}

.about{
  @media (max-width: 992px){
    flex-direction:row;
    display:flex;
  }
  @media (max-width: 768px){
    flex-direction:column;
    display:flex;
  }
}




`