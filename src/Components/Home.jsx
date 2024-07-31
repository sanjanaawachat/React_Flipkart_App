import React from 'react';
import Products from './Products'
import Contact from './Contact';
import Pricing from './Pricing';
// import { Link } from 'react-router-dom';
const Home = () => {

  return (
    <div className='hero'>
        <div class="card bg-dark text-white">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>

  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/04bb152bb2d3f429.jpg?q=20" class="d-block w-100" alt="..."/>
    </div>
 
    <div class="carousel-item active">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/3c0e1e3aca8b3c9d.jpg?q=20" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b61d308e686f6f8e.jpg?q=20" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  {/* <img src="https://www.specbee.com/sites/default/files/styles/hero_small/public/2023-06/flipkart%202.jpg?itok=zbKjPBeJ" class="card-img" alt="background-img" height="550px"/> */}
  <div class="card-img-overlay d-flex flex-column justify-content-center">
    <h1 class="card-title" style={{textTransform:"capitalize"}}>NEW SEASON ARRIVALS</h1>
    <h5 class="card-text">CHECK OUT ALL OF THE TRENDS</h5>

  </div>

</div>
{/* <Link to="/products">Go to About</Link> */}
<Products/>
<Pricing/>
<Contact/>
    </div>
  )
}

export default Home