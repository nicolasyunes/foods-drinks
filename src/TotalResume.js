import React from 'react';
import styled from "styled-components"
const TotalResume = () => {
    
    let amount = 123
    let kal = 155154
    let price = 100000
    
    
    
    
    return (
    <StyledResume className="resume sticky-md-top ">

            <div className="card-container " >
            <div className="card-header ">
                Shop
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <div>
                        Amount of dishes
                    </div>    
                    <div className="bold">
                        {amount}
                    </div>
                </li>
                <li className="list-group-item">
                <div>
                       Calories
                    </div>    
                    <div className="bold">
                        ${kal}
                    </div>
                </li>
                <li className="list-group-item price">
                <div>
                        Price
                    </div>    
                    <div className="bold">
                        ${price}
                    </div>
                </li>
            </ul>
            </div>


    </StyledResume>
    );
}

const StyledResume = styled.div`

width:100%;

.card-container {
    margin-top:20%;
    background-color:white;
    border:1px solid grey;
    border-radius:10px;
    width:80%;
    position:sticky;
    
    opacity:0.8;
    height:350px;
    align-items: start;
    
    
}

.list-group-item{
    justify-content:space-between;
    display:flex;
    weight:bold;
}

`




export default TotalResume;