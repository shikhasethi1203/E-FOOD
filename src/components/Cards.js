import React,{useState} from "react";
import "./Card.css";
import Button from '@mui/material/Button';
import Carddata from "./CardData";
import {useDispatch} from "react-redux";
import {ADD} from "../redux/actions/Actions"

export default function Cards()  {
  const [data,sendsData]=useState(Carddata);
  const dispatch=useDispatch();

  

  const send =(e)=>{
    //  console.log(e);
    dispatch(ADD(e));  
  }
  return (
    <>
      <div className="cards-div">
        <h1 className="cards-header">Add to Cart Projects</h1>

        <div className="multiplecards-div">  
          {
            data.map((elem)=> {
              return<div className="cards" key={elem.id}>
              <img src={elem.imgdata} alt="images"/>
              <h3>{elem.rname}</h3>
              <p>price:₹ {elem.price}</p>
<Button onClick={()=>{send(elem)}}> Add  to  Cart</Button>
</div>
            })
            
          }
          
        </div>
      </div>
    
    </>
  );
};

