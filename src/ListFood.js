

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
import { Button } from '@mui/material';
import ItemCard from "./ItemCard"
import Ingredients from "./Ingredients"


axios.default.baseUrl =''

const propTypes = {};

const defaultProps = {};
//https://api.nal.usda.gov/fdc/v1/foods/list?dataType=Foundation,SR%20Legacy&pageSize=8&pageNumber=2&api_key=6h5o7nrDTHm5JkyOLccvSTpuRFvT8PQOUXuOHht5
function ListFood () {

    const [data,setData] = useState("")
    const [page, setPage] = React.useState(1);
    const [show, setShow] = useState(false);
    const [ingredient , setIngredient] = useState("");
    const [perPage, setPerPage] = useState(6);
    const [trolley , setTrolley] = useState([])
    
    //0b2e902fdbb14378a4079220ab9dbbd2
    
    const fetchData = () => {
        axios
        //www.themealdb.com/api/json/v1/1/search.php?f=a
        
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

    
    const handleChangePage = (event, newPage) => {
        console.log("EVENT " ,event , "+ " , newPage);
        setPage(newPage);
      };
 
    const handleClose = () => setShow(false);
     
    const renderModal = (element) => {
        setShow(true);
        setIngredient(element)
        
    }

    const addStore = (element) => {
        setTrolley(element)
    }

    console.log("trolley" , trolley);
    
    return <Style>
    <div className=" row  p-3 my-5  ">
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
            <Pagination
                count={data.results ?Math.ceil(data.results.length/perPage):null}  variant="outlined" page={page}  onChange={handleChangePage}
             />
            </div>
            
            </div>

            {data.results? data.results.map((element,i)=>{
                if(i < (page * perPage) && i >= (page * perPage)-perPage) 
                return(
                    <div className="col-lg-4 col-md-6 col-xl-4  col-sm-12  my-4 p-3 item">
                        <ItemCard element={element} handle={()=>renderModal(element)} trolley={trolley} setTrolley={setTrolley}/>
                    </div>
                )
                }):
            <div></div>}
        </div>
    </div>
    
    <Ingredients show={show} handleClose={handleClose} data={ingredient}/>
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
        <div className="containerCategories ">
            {categories.map((element)=>{
                return(
                    <div className="p-3   col-lg-3 col-md-3 ">
                        <div className="card-body-categories">
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



const Style = styled.div`

.containerList{
    display:flex;
    flex-direction:row;
    
}
img {
    border-radius:90px;
}

.containerCategories{
    display:flex;
    width:100%;!important;
    padding:20px;
    

    @media (max-width: 768px) {
        display:flex;
        flex-direction:column;
    }
}

.card-body-categories{
box-shadow: -2px 1px 10px 0px rgba(0,0,0,0.77);
-webkit-box-shadow: -2px 1px 10px 0px rgba(0,0,0,0.77);
-moz-box-shadow: -2px 1px 10px 0px rgba(0,0,0,0.77);
height:100%;
padding:20px;
}

.item{}







`

export default ListFood;



