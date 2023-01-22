import React from 'react'
import './Cards.css'

 
function Cards(props) {
  return (
    <>
    <div className="container" >
       
      <div className="card">
  <img src="http://www.zedamagazine.com/wp-content/uploads/2018/06/Indian-Food-Samosa-Dish-HD-Wallpapers.jpg" className="card-img-top" alt="Samosa" />
  
    <h5 className="card-title">Samosa</h5>
    <p className="card-text">Best Samosas ever</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
    </div>
    
  
 
  <div className="card">  
   <img src="https://th.bing.com/th/id/OIP.AgaH5bQ7CUjx70jLjuM-WAHaE8?w=277&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="card-img-top" alt="Idli" />
 
   <h5 className="card-title">Idli</h5>
   <p className="card-text">Best Idlis ever</p>
   <a href="/" className="btn btn-primary">Go somewhere</a>
   </div>



<div className="card">  

 <img src="https://www.bing.com/th?id=OIP.CE_llp-VNPRGtaIeQqTBmAHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className="card-img-top" alt="Paneer" />

   <h5 className="card-title">Paneer</h5>
   <p className="card-text">Best Paneer ever</p>
   <a href="/" className="btn btn-primary">Go somewhere</a>
   </div>


 <div className="card">
 
  <img src="https://th.bing.com/th/id/OIP.pYsIp-P7djNI4ag4H4SYHwHaFJ?w=292&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="card-img-top" alt="Paratha" />
 
    <h5 className="card-title">Paratha</h5>
    <p className="card-text">Best Paratha ever</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
    
  </div>


  <div className="card">
  
  <img src="https://th.bing.com/th/id/OIP.Onfa_SDA2o3H1UKOgSWVDQHaE8?w=282&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="card-img-top" alt="Noodles" />
  
    <h5 className="card-title">Noodles</h5>
    <p className="card-text">Best Noodles ever</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  
  </div>

  
 <div className="card">
 
  <img src="https://th.bing.com/th/id/OIP.QsvLYtrhbQo_M0awAFt4KgHaE7?w=274&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="card-img-top" alt="Fried Rice" />
  
    <h5 className="card-title">Fried Rice</h5>
    <p className="card-text">Fried Rice</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
    
    </div>
 </div>

</>
  )
}

export default Cards