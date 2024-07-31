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
                <button class="btn" type="submit">Submit</button>
              </div>
              <ul class="icon2 text-center">
                <li>
                  <a href="javascript:;"
                    ><i class="fa-brands fa-square-facebook fa-3x"></i></a>
                </li>
                <li>
                  <a href="javascript:;"
                    ><i class="fa-brands fa-square-twitter fa-3x"></i></a>
                </li>
                <li>
                  <a href="javascript:;"
                    ><i class="fa-brands fa-square-google-plus fa-3x"></i></a>
                </li>
                <li>
                  <a href="javascript:;"
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
                  <li><a href="javascript:;">Examples</a></li>
                  <li><a href="javascript:;">Shops</a></li>
                  <li><a href="javascript:;">License</a></li>
                </ul>
              </div>
              <div class="col-1 offset-1">
                <ul>
                  <li><a href="javascript:;">Contact</a></li>
                  <li><a href="javascript:;">About</a></li>
                  <li><a href="javascript:;">Privacy</a></li>
                  <li><a href="javascript:;">Terms</a></li>
                </ul>
              </div>
              <div class="col-1 offset-1">
                <ul>
                  <li><a href="javascript:;">Dowunload</a></li>
                  <li><a href="javascript:;">Support</a></li>
                  <li><a href="javascript:;">Documents</a></li>
                </ul>
              </div>
              <div class="col-1 offset-1">
                  <ul>
                    <li><a href="javascript:;">Media</a></li>
                    <li><a href="javascript:;">Blog</a></li>
                    <li><a href="javascript:;">Forums</a></li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default Footer