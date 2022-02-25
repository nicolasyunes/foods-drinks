import React, { } from 'react';
import Figure from 'react-bootstrap/Figure';
import styled from "styled-components"
import Footer from "./components/Footer"

import ListFood from "./ListFood"


import {Navigate} from "react-router-dom"


function Home() {

  let token = localStorage.getItem('token')


  


    
   return (
  

   <Styled className="">
   { !token && <Navigate to="/" />}
    <div className="title">
      
        <Figure style={{width: '100%',height: '600px', margin: '0px'}}>
          <Figure.Image
              width={"100%"}
              alt="171x180"
              src="https://as2.ftcdn.net/v2/jpg/04/80/54/61/1000_F_480546153_XWGCHuc5gmuDuHJYOXqO7Gl8cIkSq4Qe.jpg"
              className="imageBackground "
          />
          
        </Figure>
        <div className="text-center">
          <div className="tracking-out-contract">FOODS AND DRINKS </div>
          <p >lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
        
    </div>  
    
    <div className="body  bg-light">
      <div className="list-foods col-lg-12 col-sm-12">
        <ListFood />
         <Footer />
      </div>
      
      
    </div>
  </Styled>
   )
  
}

export default Home;

const Styled = styled.div`

.text-center{
  font-family: 'Nunito', sans-serif;
font-family: 'Nunito Sans', sans-serif;
  font-size:54px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  >p{
    font-size:24px
  }
  
}

.imageBackground{
  vertical-align:bottom;
  height:100%;
      object-fit: cover;
  
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


.tracking-out-contract {
	-webkit-animation: tracking-out-contract 4000ms cubic-bezier(0.600, -0.280, 0.735, 0.045) infinite alternate-reverse both;
	        animation: tracking-out-contract 4000ms cubic-bezier(0.600, -0.280, 0.735, 0.045) infinite alternate-reverse both;
}

@-webkit-keyframes tracking-out-contract {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
}
@keyframes tracking-out-contract {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
}


`