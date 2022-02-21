import React,{useEffect,useState} from 'react'
import { Button } from '@mui/material';
import styled from 'styled-components';


export default function ItemCard(props,{setTrolley,trolley}) {
    const { element } = props;


  return (
    <Card>
      <div className="card flip-in-hor-bottom  p-4" >
                        <img className="card-img-top" src={element.image} alt="abc"/>
                        <div className="card-body">
                        <span class="badge rounded-pill bg-primary my-3">$100</span>
                            <h6 className="card-title">{element.title}</h6>
                        </div>
                        <div className="">
                            {props.handle?
                            <Button  className="p-3  m-1 bg-dark" onClick={()=>props.handle?props.handle():null}>
                            Ingredients
                            </Button>:null }
                            
                            <Button className="btn m-1 bg-dark" 
                              onClick={()=>props.setTrolley?props.setTrolley():null}>Add</Button>
                        </div>
                        
                    </div>
    </Card>
  )
}

const Card = styled.div`
display:flex;

.flip-in-hor-bottom{
    animation:flip-in-hor-bottom .8s cubic-bezier(.25,.46,.45,.94) both
    }
@keyframes flip-in-hor-bottom{0%{transform:rotateX(80deg);opacity:0}100%{transform:rotateX(0);opacity:1}}



`
