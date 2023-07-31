import React from "react";

import { useDispatch } from "react-redux";
import { cartItem,descriptData } from "../cartSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export const MenCloth = () => {
  const dispatch = useDispatch();
  
  const clothData = useSelector((state) => state.cart.items);
  let navigate=useNavigate();
  
  const requiredData = clothData[0].filter((product) => product.category === "men's clothing");
  

  
//addingdata
const handleAdd = (val) => {
  let data = { ...val };
  data.uniqueId = Math.random();
  console.log(data);
  dispatch(cartItem(data));
};

      return (
        <>
          <div>
           
            <h2>Product</h2>
    
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                border: "2px solid black",
                borderRadius: "10px",
                backgroundColor: "silver",
              }}
            >
              {requiredData.map((val) => (
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
                  
                          dispatch(descriptData(val))
                  navigate('/description');
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
                       onClick={() => handleAdd(val)}
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
};
