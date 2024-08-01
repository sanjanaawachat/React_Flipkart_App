import React from 'react'

const Footer = () => {
  return (
    <>



     <section class="footerSection">
        <div class="container">
          <div class="row">
            <div class="col-9 offset-1">
              <div class="text-center">
                <h1 class="pri-heading">Keep In Touch With Us</h1>
                <p class="sec-heading">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent vitae eros eget tellus tristique bibendum. Donec rutrum
                  sed sem quis venenatis.
                </p>
              </div>
              <div class="form text-center">
                <lable class="email">email</lable>
                <input type="email" placeholder="Enter your email to update" />
                <button class="btn btn-warning" type="submit">Submit</button>
              </div>
              <ul class="icon2 text-center">
                <li>
                  <a href="index.html
                  "
                    ><i class="fa-brands fa-square-facebook fa-3x"></i></a>
                </li>
                <li>
                  <a href="index.html
                  "
                    ><i class="fa-brands fa-square-twitter fa-3x"></i></a>
                </li>
                <li>
                  <a href="index.html
                  "
                    ><i class="fa-brands fa-square-google-plus fa-3x"></i></a>
                </li>
                <li>
                  <a href="index.html
                  "
                    ><i class="fa-brands fa-square-pinterest fa-3x"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-3">
                {/* <address class="text-white">
                  <ul class="footerLinks">
               <li> HALOVIETNAM LTD</li>  <br />
                 <li>66, Dang Van ngu, Dong Da</li> <br />
               <li>  Hanoi, Vietnam</li> <br />
                  <a class="text-white" href="contact@halovietnam.com"
                    >contact@halvovietnam.com</a><br />
                 <a href="tel:+91">84435149182</a> 

                </ul>
                </address> */}
<img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="Flipkart-app" style={{width:"200px"}} />
              </div>
  
              <div class="col-1 offset-1">
                <ul>
                  <li>Examples</li>
                  <li>Shops</li>
                  <li>License</li>
                </ul>
              </div>
              <div class="col-1 offset-1">
                <ul>
                  <li>Contact</li>
                  <li>About</li>
                  <li>Privacy</li>
                  <li>Terms</li>
                </ul>
              </div>
              <div class="col-1 offset-1">
                <ul>
                  <li>Dowunload</li>
                  <li>Support</li>
                  <li>Documents</li>
                </ul>
              </div>
              <div class="col-1 offset-1">
                  <ul>
                    <li>Media</li>
                    <li>Blog</li>
                    <li>Forums</li>
                  </ul>
                </div>
            </div>
          </div>
        </div>

    </section>
    <div class="d-flex flex-column flex-sm-row justify-content-center py-2 my-4">
      <h5>&copy; 2024 Company, Inc. All rights reserved.</h5>
  
    </div>

    </>
  )
}


export default Footer