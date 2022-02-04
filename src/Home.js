import React, { useState } from 'react';
import Figure from 'react-bootstrap/Figure';
import styled from "styled-components"
import vegetables from '../src/Static/Images/vegetables.jpg'
import ListFood from "./ListFood"
import TotalResume from './TotalResume';
import Shop from "./Shop"
function Home(props) {
   
 
    return (<Styled className="">
              <div className="title">
                <span>
                  <h1>
                   We Are GoodFood
                   <p className="text">Lorem ipsum dolor sit amet, consectetur adip</p>
                </h1>
                
                </span>
                  <Figure style={{width: '100%',height: '600px', margin: '0px'}}>
                
                    <Figure.Image
                        width={"100%"}
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
                    
                    <div className="list-total col-lg-3 col-md-4 col-sm-12">
                    <div className="shop"><Shop/></div>
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
    left:-10%;
  
    

}

.imageBackground{
  vertical-align:bottom;
  height:100%
}

.list-foods{
  display:flex;


}

.body{
  display:flex;
  flex-direction:row;
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
`