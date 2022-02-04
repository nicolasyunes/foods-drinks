

import React,{useState,useEffect} from 'react';
import cocktail from './Static/Images/cocktail.jpg'
import cocktail2 from './Static/Images/cocktail2.png'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import Divider from '@mui/material/Divider/Divider';
import Pagination from '@mui/material/Pagination/Pagination';
import fruits from "./Static/Images/fruits.png"
import vegetables2 from "./Static/Images/vegetables2.png"
import juice from "./Static/Images/juice.png"
import { Button, ButtonBase } from '@mui/material';




axios.default.baseUrl =''

const propTypes = {};

const defaultProps = {};
//https://api.nal.usda.gov/fdc/v1/foods/list?dataType=Foundation,SR%20Legacy&pageSize=8&pageNumber=2&api_key=6h5o7nrDTHm5JkyOLccvSTpuRFvT8PQOUXuOHht5
const ListFood = () => {
    const [data,setData] = useState("")
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    //0b2e902fdbb14378a4079220ab9dbbd2
    
    const fetchData = () => {
        axios
            .get('https://api.spoonacular.com/recipes/complexSearch/?apiKey=0b2e902fdbb14378a4079220ab9dbbd2')
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log("DataR " , data);
    let results = data;
    
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
    
    
    
    return <Style>
    <div className=" row col-l12 p-3 my-5 ">
            <div className="text-light">
                <h2>MENUS</h2>
            </div>

        <div className="containerList row">
            <Categories/>
            
            <div className="mt-5">
            
                <Divider textAlign="left" >
                    <h6>Most Popular</h6>
                </Divider> 
            
            
            <div className="justify-content-end d-flex">
            <Pagination count={11} defaultPage={6} siblingCount={1} />
            </div>
            
            </div>


            {data.results ? data.results.map(element=>{
                return(
                <Card className="card col-lg-2 col-md-4  m-2  my-4 p-3 ">
                    <img className="card-img-top" src={element.image} alt={element.title}/>
                    <div className="card-body">
                    <span class="badge rounded-pill bg-primary my-3">$100</span>
                        <h6 className="card-title">{element.title}</h6>
                    </div>
                    <div className="btn-group ">
                        <Button className=" m-1 bg-dark">Ingredients</Button> 
                        <Button className="btn m-1 bg-dark">Add</Button>
                    </div>
                    
                </Card>
                )
                }):
            <div></div>}
        </div>
    </div>;
    </Style>    
    
}

const Categories  = () =>{
    let categories = [{title:"Vegetarian",icon:vegetables2} , {title:"Healthy",icon:juice} , {title:"Fruts and Vegetable",icon:fruits},{title:"Cocktails",icon:cocktail2} ];


    return(
        <div className="categories my-5">
        <div className="">
            
            <Divider textAlign="left" >
                <h6>Categories</h6>
            </Divider> 
        
        
        <div>
           
        </div>
        
        </div>
        <div className="containerCategories">
            {categories.map((element)=>{
                return(
                    <div className="card p-3 m-1 col-3 ">
                        <div className="card-body">
                            <h5 className="card-title">{element.title}</h5>
                            <div>
                                <img width="100" height="100" src={element.icon} alt={element.title} />
                            </div>
                            
                            
                        </div>
                    </div>
                )
            })}
        </div>
            


        </div>
    )
}

ListFood.propTypes = propTypes;
ListFood.defaultProps = defaultProps;

const Card = styled.div`
display:flex;

`

const Style = styled.div`
.containerList{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
}
img {
    border-radius:90px;
    
}

.containerCategories{
    display:flex;
    flex-direction:row;
    padding:20px;
    @media (max-width:1351px){
        flex-direction:column;
        display:flex;
    }
    
}

.card {
    width:300px;
    height:auto;
    
}
`

export default ListFood;



