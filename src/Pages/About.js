import React from "react";

const About = () => {
  return (
    <div>
      <section style={{padding:'50px 0px'}}>
      <div class="three-card-section container">
        <div class="row gy-4">
          <div class="col-6 col-md-6 col-lg-4">
            <div class="card1">
              <div class="card-image"></div>
              <div class="card-content">
                <h6>Order Online</h6>
                <p>Stay home and order to your doorstep</p>
              </div>
            </div>
          </div>

          <div class="col-6 col-md-6 col-lg-4">
            <div class="card1">
              <div class="card-image2"></div>
              <div class="card-content">
                <h6>Dining</h6>
                <p>View the city's favourite dining...</p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-12 col-lg-4">
            <div class="card3">
              <div class="card1">
                <div class="card-image3"></div>
                <div class="card-content">
                  <h6>Live Events</h6>
                  <p>Discover India’s best events & concerts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default About;
