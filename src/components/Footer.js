import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
export default function Footer() {
  return (
    <Styled>
        <div className="container d-flex py-5 ">
        <div className="col-3 ">
            <div className="footer-title">Product</div>
                <div className="footer-description">
                    <p>Menu</p>
                    <p>Vegan</p>
                    <p>Drinks</p>
                    <p>Foods</p>
                </div>
        </div>
        <div className="col-3">
            <div className=" footer-title">Support</div>
            <div className="footer-description">
                <p>Blog</p>
                <p>FAQ</p>
                <p>Portfolio</p>
                
            </div>
        </div>
        <div className="col-3">
            <div className=" footer-title">About us</div>
            <div className="footer-description">
                <p>About products</p>
                <p>About us</p>
                <p>Contact us</p>
                
            </div>
        </div>
        <div className="social-media col-3">
           <div>
            <div className=" footer-title mb-3">Follow</div>
            <div className="d-flex social">
                
                <i className="fa-brands fa-instagram"></i>  
                <i className="fa-brands fa-facebook-f"> </i>
                <i className="fa-brands fa-linkedin-in"> </i>
                <i className="fa-brands fa-github"> </i>

            </div>
           </div>
           <div className="mt-5 suscribe">
                <label >Suscribe!!</label>
                <input placeholder="Enter your email" type="email"></input>
                <Button variant="contained"   className="btn my-2" endIcon={<SendIcon />}>
                    Send
                </Button>
            </div>
           
            
        </div>
       



        
        
    </div>
    </Styled>
    
  )
}


const Styled = styled.div`

    background:black;
    color:white;

    .social{
        display:flex;
        flex-direction:row;
        gap:25px
    }

    .footer-description{
        font-size:16px;
        display:flex;
        flex-direction:column;
       justify-content:center;
       align-items:start;
        margin-top:10px
    }

    .footer-title{
        font-size:20px;
        font-family: 'Nunito', sans-serif;
        font-family: 'Nunito Sans', sans-serif;
    }

    .suscribe{
        display:flex;
        flex-direction:column;

        >Button{
        color:#e1f5fe;
        background-color:black;
        border:.5px solid white !important

        }
       }

`