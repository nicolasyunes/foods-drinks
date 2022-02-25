

import React,{useState,useEffect,useRef} from 'react';
import cocktail2 from './Static/Images/cocktail2.png';
import styled from 'styled-components';
import axios from 'axios';
import Divider from '@mui/material/Divider/Divider';
import Pagination from '@mui/material/Pagination/Pagination';
import fruits from "./Static/Images/fruits.png"
import vegetables2 from "./Static/Images/vegetables2.png"
import juice from "./Static/Images/juice.png"
import { ListGroupItem, ListGroup, Button } from 'react-bootstrap';
import ItemCard from "./ItemCard"
import Ingredients from "./Ingredients"
import swal from 'sweetalert';


axios.default.baseUrl =''

const propTypes = {};

const defaultProps = {};
//https://api.nal.usda.gov/fdc/v1/foods/list?dataType=Foundation,SR%20Legacy&pageSize=8&pageNumber=2&api_key=6h5o7nrDTHm5JkyOLccvSTpuRFvT8PQOUXuOHht5
function ListFood ({dataMenu},props) {

    const [data,setData] = useState("")
    const [page, setPage] = React.useState(1);
    const [show, setShow] = useState(false);
    const [ingredient , setIngredient] = useState("");
    const [perPage, setPerPage] = useState(8);
    const [trolley , setTrolley] = useState([]);
    const listRef = React.useRef(null)


    
    
    const fetchData = () => {
        axios
        //www.themealdb.com/api/json/v1/1/search.php?f=a
        
            .get('https://api.spoonacular.com/recipes/complexSearch?query=vegan&number=12&apiKey=d213a7d9b7de47d3a6419902b2f5cb94')
            .then((res) => {
              
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
        setPage(newPage);
      };
 
    const handleClose = () => setShow(false);
     
    const renderModal = (element) => {
        setShow(true);
        setIngredient(element)
        
    }

    const addStore = (element) => {
        if(trolley.includes(element)){
            swal("Element already")
        }else{
         
           setTrolley(arr=> [...arr , element]); 
           window.scrollTo(0,1000)
        }
        
    }

    const deleteItem = (e) => {
       let result = trolley.filter(item => item.id !== e.id);
       setTrolley(result)
    }

    const titlesList = ["ID","Name","Description","Price","Actions"]
    
    return <Style>
    <div className=" container p-3 my-5">
            

        <div className="containerList row">
            <Categories/>
            <div className="text-light menu-content" ref={listRef}>
                   
                
                    {trolley.length > 0 ?
                    <>
                     <h2 >MENUS</h2>
                    <div className="bg-dark d-flex p-3 ">
                            {titlesList.map(title =><div className="items">
                                {title}
                            </div>)}
                        </div>
                    </>
                        

                    : null}
                    
                    
                    <ListGroup >
                        { trolley.map(e=>
                            <ListGroupItem className=" d-flex ">
                                <div className="items2" >{e.id}</div>
                                <div className="items2" >{e.title}</div>
                                <div className="items2" >{"Description"}</div>
                                <div className="items2" >{"$120"}</div>
                                    
                                <div className="">
                                    <em onClick={()=>swal("More details")} className="text-success">View Details</em>
                                    <i onClick={()=>deleteItem(e)} className={`fa-solid fa-trash mx-5`} ></i>
                                </div>  

                        </ListGroupItem>)}
                    </ListGroup>

                    {trolley.length > 0 ?
                    
                        <div className="my-2 d-flex justify-content-center">
                          <Button>Go to buy</Button>
                        </div>

                    : null}


            </div>
            
            
            <div className="mt-5">
                <Divider textAlign="left" >
                    <h6>Recipes</h6>
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
                    <div className="col-lg-3 col-md-6 col-xl-3  col-sm-12  my-4 p-3 item">
                        <ItemCard element={element} handle={()=>renderModal(element)} trolley={trolley} setTrolley={()=>addStore(element)} />
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

.listMenu{
    display:flex;
    justify-content: space-between;
    border: none;
    background-color:#F0F3F4;
}

.items{
    width:20%;
    
}
.items2{
    width:20%
}

h2{
    color:black;

}
i,em{
    cursor:pointer;
}

.menu-content{
    background-color:#f2f2f2
}






`

export default ListFood;



