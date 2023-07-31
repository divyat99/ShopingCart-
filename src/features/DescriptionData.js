import React from 'react'
import { useDispatch,useSelector, } from 'react-redux'


const Description = () => {
  const descriptionData=useSelector((state)=>state.cart.descData)
console.log('ddddd',descriptionData)
    const dispatch = useDispatch()
  return (
    <>
        
      
       
    {console.log('descriptionData',descriptionData)}
        {descriptionData.length>0 ? (
          <div
            style={{
              width: "20rem",
              margin: "50px",
              flexBasis: "25%",
              height: "500px",
              backgroundColor: "#9e8fba",
            }}
          >
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={descriptionData.image}
                style={{ height: "180px", width: "180px" }}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{descriptionData.title}</h5>
                <h6 className="card-text">
                  Description: {descriptionData.description}
                </h6>
              </div>
            </div>
          </div>
        ) : (
          <h3 style={{padding:'100px',color:'blueviolet'}}>Loading description...</h3>
        )}
  
   

    </>
  )
}

export default Description