import React from "react";

const Popular = () => {
  return (
    <div>
      <section style={{ padding: "45px 0 45px 0" }}>
        <div className="localities-section container">
          <div className="localities-main-heading">
            <div className="loca-heading">
              <p>
                Popular localities in and around
                <span style={{ fontWeight: 550 }}>Ahmedabad</span>
              </p>
            </div>
          </div>
          <div className="localities-main-content-section">
            <div className="row gy-4 justify-content-center">
              {/* Locality 1 */}
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="main-popular">
                  <div className="po-content d-flex justify-content-between">
                    <div className="p-content1">
                      <h5>Bodakdev</h5>
                      <p>437 places</p>
                    </div>
                    <div className="p-icon">
                      <i className="fa-solid fa-chevron-right mt-4"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Locality 2 */}
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="main-popular">
                  <div className="po-content d-flex justify-content-between">
                    <div className="p-content1">
                      <h5>Navrangpura</h5>
                      <p>398 places</p>
                    </div>
                    <div className="p-icon">
                      <i className="fa-solid fa-chevron-right mt-4"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Locality 3 */}
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="main-popular">
                  <div className="po-content d-flex justify-content-between">
                    <div className="p-content1">
                      <h5>Prehlad Nagar</h5>
                      <p>248 places</p>
                    </div>
                    <div className="p-icon">
                      <i className="fa-solid fa-chevron-right mt-4"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Locality 4 */}
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="main-popular">
                  <div className="po-content d-flex justify-content-between">
                    <div className="p-content1">
                      <h5>Setellite</h5>
                      <p>414 places</p>
                    </div>
                    <div className="p-icon">
                      <i className="fa-solid fa-chevron-right mt-4"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Locality 5 */}
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="main-popular">
                  <div className="po-content d-flex justify-content-between">
                    <div className="p-content1">
                      <h5>Vastrapur</h5>
                      <p>295 places</p>
                    </div>
                    <div className="p-icon">
                      <i className="fa-solid fa-chevron-right mt-4"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Locality 6 */}
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="main-popular">
                  <div className="po-content d-flex justify-content-between">
                    <div className="p-content1">
                      <h5>C G Road</h5>
                      <p>414 places</p>
                    </div>
                    <div className="p-icon">
                      <i className="fa-solid fa-chevron-right mt-4"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Locality 7 */}
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="main-popular">
                  <div className="po-content d-flex justify-content-between">
                    <div className="p-content1">
                      <h5>Gurukul</h5>
                      <p>124 places</p>
                    </div>
                    <div className="p-icon">
                      <i className="fa-solid fa-chevron-right mt-4"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Locality 8 */}
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="main-popular">
                  <div className="po-content d-flex justify-content-between">
                    <div className="p-content1">
                      <h5>Thaltej</h5>
                      <p>451 places</p>
                    </div>
                    <div className="p-icon">
                      <i className="fa-solid fa-chevron-right mt-4"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* See More */}
              <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="main-popular">
                  <div
                    className="po-content d-flex justify-content-center align-items-center"
                    style={{ height: "95px" }}
                  >
                    <p style={{ fontSize: "18px" }}>
                      see more <i className="fa-solid fa-chevron-down ms-1"></i>
                    </p>
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

export default Popular;
