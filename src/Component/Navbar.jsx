import React from "react";
import {Link} from "react-router-dom";

const navbar = () => {
  return (
    <>
    <header>
      <div className="navbar-main container-fluid">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand d-none d-lg-block" to="#">
              <i className="fa-solid fa-mobile-screen-button text-light"></i> Get the App
            </Link>
            {/* Toggle Button for Modal */}
            <button
              style={{ display: "block", border: "none", background: "transparent" }}
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="d-sm-block d-md-block d-lg-none mt-md-2"
            >
              <span>
                <i
                  className="fa-solid fa-bars text-light outline-light"
                  style={{ fontSize: "20px" }}
                ></i>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="#">
                    Investor Relation
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Add Restaurant
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Log in
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <img
                  src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
                  width="150px"
                  className="img-fluid"
                  alt=""
                />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {/* Get the App Link */}
                <Link to="#">
                  <i className="fa-solid fa-mobile-screen-button"></i> Get the App
                </Link>
                {/* Other Links */}
                <ul className="list-unstyled">
                  <li>
                    <Link to="#" className="text-decoration-none d-block py-2">
                      Investor Relation
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-decoration-none d-block py-2">
                      Add Restaurant
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-decoration-none d-block py-2">
                      Log in
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-decoration-none d-block py-2">
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-content">
          <div className="nav-heading mt-5 d-flex justify-content-center">
            <img
              className="img-fluid"
              src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
              width="300px"
              height="60px"
              alt=""
            />
          </div>
          <div className="h-description d-flex justify-content-center mt-5">
            <h1>Discover the best food & drinks in Ahmedabad</h1>
          </div>
          <div className="div d-flex justify-content-center">
            <div className="nav-search">
              <div className="search-bar">
                <div
                  className="nav-location d-flex align-items-center bg-light"
                  style={{ borderRadius: "10px" }}
                >
                  <i className="fa-solid fa-location-dot icon-location"></i>
                  <p style={{ marginTop: "15px" }}>Navrangpura, Ahmedabad</p>
                </div>
              </div>
              <div className="bar">|</div>
              <div className="input-part d-flex align-items-center bg-light">
                <i
                  className="fa-solid fa-magnifying-glass"
                  style={{ fontSize: "18px", marginLeft: "15px" }}
                ></i>
                <input
                  type="text"
                  placeholder="Search for restaurant, cuisine or Link dish"
                  className="input-text"
                  style={{
                    height: "50px",
                    backgroundColor: "transparent",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default navbar;
