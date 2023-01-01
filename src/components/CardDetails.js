import React, { useState, useEffect } from "react";
import "./CardDetails.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DELETE, ADD, REMOVE } from "../redux/actions/Actions";

export default function CardDetails()  {
  const [data, setData] = useState([]);
  // console.log(data);

  const { id } = useParams();
  // console.log(id);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getData = useSelector((state) => state.cartreducer.carts);
  // console.log(getData);

  const compare = () => {
    let compareData = getData.filter((e) => {
      return e.id === parseInt(id);
    });
    setData(compareData);
  };

  // ADD DATA
  const send = (e) => {
    //  console.log(e);
    dispatch(ADD(e));
  };

  const del = (id) => {
    dispatch(DELETE(id));
    navigate("/");
  };

  // REMOVE ONE
  const remove = (item) => {
    dispatch(REMOVE(item));
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <>
      <div className="cardDetails-header">
        <h1>Iteams Details Page</h1>
        {data.map((element) => {
          return (
            <>
              <div className="cardDetails" key={element.id}>
                <div className="cardDetails-img">
                  <img src={element.imgdata} alt="" />
                </div>
                <div className="cardDetails-items">
                  <p className="card-restaurant">
                    <strong>Restaurant</strong> : {element.rname}
                  </p>
                  <p className="card-price">
                    <strong>Price</strong> : ₹ {element.price}
                  </p>
                  <p>
                    <strong>Dishes</strong> : {element.address}
                  </p>
                  <p className="card-total">
                    <strong>Total</strong> : ₹ {element.price * element.qnty}
                  </p>
                  <div className="deciInc-card">
                    <span
                      className="symbol"
                      onClick={
                        element.qnty <= 1
                          ? () => del(element.id)
                          : () => remove(element)
                      }>
                      -
                    </span>
                    <span className="quntsymbol">{element.qnty}</span>
                    <span className="symbols" onClick={() => send(element)}>
                      +
                    </span>
                  </div>
                </div>
                <div className="cardDetails-rating">
                  <p className="rating">
                    <strong>Rating :</strong>
                    <span>{element.rating} ★</span>
                  </p>
                  <p className="review-order">
                    <strong> Order Raview :</strong>
                    <span>{element.somedata} </span>
                  </p>
                  <p className="remove">
                    <strong>Remove :</strong>
                    <span>
                      <DeleteIcon
                        className="delete"
                        onClick={() => del(element.id)}
                      />
                    </span>
                  </p>
                </div>
              </div>
            </> 
          );
        })}
      </div>
    </>
  );
};

