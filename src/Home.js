import React, { useState } from 'react';
import Figure from 'react-bootstrap/Figure';
import styled from "styled-components"
import vegetables from '../src/Static/Images/vegetables.jpg'
import ListFood from "./ListFood"
import TotalResume from './TotalResume';

function Home(props) {
   
 
    return (<Styled className=" bg-dark container-fluid">
              <div className="title">
                <div className="">
                  <h1>
                   We Are GoodFood
                   <p className="text">Lorem ipsum dolor sit amet, consectetur adip</p>
                </h1>
                
                </div>
                  <Figure style={{width: '100%',height: '600px', margin: '0px'}}>
                
                    <Figure.Image
                        width={"100%"}
                        height={"auto"}
                        alt="171x180"
                        src={vegetables}
                        className="imageBackground"
                        
                    />

                </Figure>
              </div>  
              
              <div className="body d-flex">
                    <div className="list-foods col-9">
                        <ListFood/>
                    </div>
                    
                    <div className="list-total col-3">
                        <TotalResume/>
                    </div>
              </div>
                    



    </Styled>  );
}

export default Home;

const Styled = styled.div`
h1{
    color:white;
    position:relative;
    top:170px;
    opacity:0.5;
    left:-450px;
    right:0px;
    

}

.imageBackground{
  vertical-align:bottom;
  height:100%
}

.list-foods{
  display:flex;
  justify-content:space-between;
}

.body{
  display:flex;
  flex-direction:row
}

`