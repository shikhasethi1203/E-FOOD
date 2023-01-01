import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { DELETE } from "../redux/actions/Actions";

export default function Header() {
  const [show, showData] = useState(false);
  const [price, setPrice] = useState();
  //  console.log(price);

  

  const getData = useSelector((state) => state.cartreducer.carts);

  console.log(getData);

  const dispatch = useDispatch();

  const del = (id) => {
    dispatch(DELETE(id));
  };

  const total = () => {
    let price = 0;
    getData.map((element, k) => {
      price = element.price * element.qnty + price;
    });
    setPrice(price);
  };
  useEffect(() => { 
    total();
  }, [total]);


  return (
    <>
      <div className="header">
        <div className="leftheader-div">
          <div className="headcard-div">
            <Link to="/">Add to cart</Link>
          </div>
          <div className="home-div">
            <Link to="/home">Home</Link>
          </div>
        </div>

        <div className="card-div">
          <Badge badgeContent={getData.length} color="primary">
            <ShoppingCartIcon onClick={() => showData(!show)} />
          </Badge>
          {show ? (
            getData.length ? (
              <div className="header-show">
                <div className="headerCard-details">
                  <h3>Photo</h3>
                  <h3>Restaurant Name</h3>
                </div>
                <hr />

                {getData.map((element) => {
                  return (
                    
                    <>
                      <div className="header-cardDetalies" key={element.id}>
                        <NavLink 
                          to={`cart/${element.id}`}
                          onClick={() => showData(false)}>
                          <div className="cart-img">
                            <img src={element.imgdata} alt="" />
                          </div>
                        </NavLink>
                        <div className="cart-paragraph">
                          <p>{element.rname}</p>
                          <p>Price : ₹{element.price}</p>
                          <p>Quantity : {element.qnty}</p>
                        </div>
                        <div className="remove-cart">
                          <DeleteIcon onClick={() => del(element.id)} />
                        </div>
                      </div>
                      <hr />
                    </>
                  );
                })}
                <p className="cart-total">
                  Total : <span className="rsSymbol"> ₹ {price}</span>
                </p>
              </div>
            ) : (
              <div className="headercard-div">
                <div className="closeicon-div">
                  <CloseIcon onClick={() => showData(false)} />
                </div>
                <div className="texts-div">
                  <p>Your card to empty</p>
                  <img src="./cart.gif" alt="" />
                </div>
              </div>
            )
          ) : null}
          
        </div>
      </div>
    </>
  );
}
