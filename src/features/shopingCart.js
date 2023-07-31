import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { cartItem, itemList, descriptData } from "./cartSlice";
import { useNavigate } from "react-router-dom";
export function ShopingCart() {
  const [data, setData] = useState([]);
  let navigate = useNavigate();
  // Fetch product data from API
  const fetchData = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    response = await response.json();
    console.log(response);
    dispatch(itemList(response));
    setData(response); //update data state variable
  };
  const dispatch = useDispatch();

  // Fetch data from API when component mounts
  useEffect(() => {
    fetchData();
  }, []);
  //descriptiondata
  //   const discpData = (val) => {
  //     dispatch(descriptData(val));
  //   };

  //   //addingdata
  //   const handleAdd = (val) => {
  //     let data = { ...val };
  //     data.uniqueId = Math.random();
  //     console.log(data);
  //     dispatch(cartItem(data));
  //   };
  return (
    <>
      <div style={{padding:'12px'}}>
        <h2>Product</h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            border: "2px solid black",
            borderRadius: "10px",
            backgroundColor: "silver",
            padding:'70px',
            margin:'2px'
          }}
        >
          {data.map((val) => (
            <div key={val.id}>
              <div
                className="card"
                style={{
                  width: "20rem",
                  margin: "8px",
                  flexBasis: "25%",
                  height: "500px",
                }}
              >
                <img
                  className="card-img-top"
                  src={val.image}
                  alt="Card image cap"
                  style={{ height: "200px", width: "200px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <p>{val.id}</p>
                    Title: {val.title}
                  </h5>
                  <div>
                    <button
                      onClick={() => {
                        dispatch(descriptData(val));
                        // discpData(val);
                        navigate("/description");
                      }}
                      className="btn btn-info"
                    >
                      Go to Description
                    </button>
                  </div>

                  <span>
                    <button type="button" className="btn btn-danger ">
                      Price: {Math.round(val.price)}
                    </button>
                  </span>
                </div>
                <div style={{ backgroundColor: "green" }}>
                  <button
                    onClick={() => {
                      //handleAdd(val);
                      dispatch(cartItem(val));
                    }}
                    className="btn btn-success"
                  >
                    Add to Cart+
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
