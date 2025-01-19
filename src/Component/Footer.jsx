import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div class=" footer d-flex align-items-center">
        <div class="">
          <div class="f-content">
            <div class="zomato-header">
              <div class="row gy-4">
                <div class="col-sm-12 col-lg-12 "> 
                  <div class="h-img">
                    <img
                      src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
                      width="132px"
                      height="28px"
                      alt=""
                    />
                  </div>
                </div>
               </div> 
            </div>

            <div class="f-link mt-5">
              <div class="row ">
                <div class="link-1 col-6 col-md-4 col-lg-2">
                  <h6>ABOUT ZOMATO</h6>
                  <p>Who We Are</p>
                  <p>Blog</p>
                  <p>Work With Us</p>
                  <p>Investor Relations</p>
                  <p>Report Fraud</p>
                  <p>Press Kit</p>
                  <p>Contact Us</p>
                </div>

                <div class="link-1 col-6 col-md-4 col-lg-2">
                  <h6>ZOAVERSE</h6>
                  <p>Zomato</p>
                  <p>Blinkit</p>
                  <p>District</p>
                  <p>Feeding India</p>
                  <p>Hyper Pure</p>
                  <p>Zomato Live</p>
                  <p>
                    Zomaland <br />
                    <br />Weather Union
                  </p>
                </div>

                <div class="link-1 col-6 col-md-4 col-lg-2">
                  <h6>FOR RESTURENTS</h6>
                  <p>Partner With Us</p>
                  <p>Apps For You</p>
                </div>

                <div class="link-1 col-6 col-md-4 col-lg-2">
                  <h6>LEARN MORE</h6>
                  <p>Privacy</p>
                  <p>Security</p>
                  <p>Terms</p>
                </div>

                <div class="link-1 col-sm-6 col-md-4 col-lg-2">
                  <h6>SOCIAL LINK</h6>
                  <div class="social-link">
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-square-instagram ms-2"></i>
                    <i class="fa-brands fa-square-x-twitter ms-2"></i>
                    <i class="fa-brands fa-youtube ms-2"></i>
                    <i class="fa-brands fa-facebook ms-2"></i>
                  </div>
                </div>
              </div>
            </div>

            <hr class="mt-5" />

            <p style={{fontSize: '13px', color: '#4f4f4f'}}>
              By continuing past this page, you agree to our Terms of Service,
              Cookie Policy, Privacy Policy and Content Policies. All trademarks
              are properties of their respective owners. 2008-2024 © Zomato™
              Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
