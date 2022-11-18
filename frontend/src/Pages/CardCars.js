import React from 'react'

const CardCars = ({cars}) => {
    console.log(cars,"cars")
  return (
    <div style={{margin:"20px"}}>
          <div className="content-groups">
             
             <div className="card" >
               <div className="card-body">
                 <img
                   src={cars.image}
                   className="img-cars"
                   alt=""
                 />
               </div>
               <div className="card-footer">
                 <div className="card-footer-top">
                   <h3 className="car-title">{cars.name}</h3>
               
                 </div>
                 <div>
                 fuelType : {cars.fuelType}
                 </div>
                 <div>
                    {cars.capacity}
                 </div>
                 <div>
                    {cars.price}
                 </div>
                 <div className="card-footer-bottom">
                   <button className="rent-now">Buy Now</button>
                 </div>
               </div>
             </div>
         
         </div>
    </div>
  )
}

export default CardCars
