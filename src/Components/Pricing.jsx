import React from 'react'


const About = () => {
  return (
    <>
  
   
    <section id="pricing" class="pricing section">

      <div class="container section-title" data-aos="fade-up">
      <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder ' style={{marginTop:"64px"}}>Pricing</h1>
                        <hr />
            




                    </div>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
            <div class="pricing-item">
              <h3>Free Plan</h3>
              <p class="description">Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater</p>
              <h4><sup>$</sup>0<span> / month</span></h4>
              {/* <a href="#" class="cta-btn">Start a free trial</a> */}
              <p class="cta-btn">Start a free trial</p>
              <p class="text-center small">No credit card required</p>
          
            </div>
          </div>

          <div class="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
            <div class="pricing-item featured">
              <p class="popular">Popular</p>
              <h3>Business Plan</h3>
              <p class="description">Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater</p>
              <h4><sup>$</sup>29<span> / month</span></h4>
              {/* <a href="#" class="cta-btn">Start a free trial</a> */}
              <p class="cta-btn">Start a free trial</p>
              <p class="text-center small">No credit card required</p>
             
            </div>
          </div>

          <div class="col-lg-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="pricing-item">
              <h3>Developer Plan</h3>
              <p class="description">Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater</p>
              <h4><sup>$</sup>49<span> / month</span></h4>
         
              <p class="cta-btn">Start a free trial</p>
              <p class="text-center small">No credit card required</p>
           
            </div>
          </div>

        </div>

      </div>

    </section>

    </>


  )
}

export default About