

import React,{useState,useEffect} from 'react';
import cocktail from './Static/Images/cocktail.jpg'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';


axios.default.baseUrl =''

const propTypes = {};

const defaultProps = {};

const ListFood = () => {
    const [data,setData] = useState("")
    
    const fetchData = () => {
        axios
            .get('https://api.nal.usda.gov/fdc/v1/foods/list?dataType=Foundation,SR%20Legacy&pageSize=25&pageNumber=2&api_key=6h5o7nrDTHm5JkyOLccvSTpuRFvT8PQOUXuOHht5')
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
    
    
    
    
    return <Style>
    <div className=" row col-12 p-3 my-5 ">
            <div className="text-light">
                <h2>MENUS</h2>
            </div>

        <div className="containerList row">
            {data ? data.map(element=>{
                return(
                <Card className="card col-3 m-2 my-4 p-3 ">
                    <img className="card-img-top" src={cocktail} alt={element.description}/>
                    <div className="card-body">
                        <h5 className="card-title">{element.description}</h5>
                    </div>
                </Card>
                )
                }):
            <div></div>}
        </div>
    </div>;
    </Style> 
    
    
    
        
    
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
    justify-content:space-around;
    

}
`

export default ListFood;