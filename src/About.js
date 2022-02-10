import React, { useState } from 'react';
import styled from 'styled-components';
function About(props) {
    return (<StyledAbout>
        <h1>
            Welcome!!
        </h1>
        <div className="p-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr49m0oKrJm4PNcT-ovnee3HXMs4u4xdkezA&usqp=CAU" width="100%" height="100%" alt="about-food" />
        </div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            lorem ipsum dolor sit amet, con
        </p>
    </StyledAbout>  );
}

const StyledAbout = styled.div`
border: 0.2px ;
margin:20px;
background-color: #E7E6EF;
margin-top:100px;
height:auto;
border-radius:10px;
`

export default About;