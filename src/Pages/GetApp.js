import React from "react";

const GetApp = () => {
  return (
    <div>
      <section style={{ padding: "80px 0" }}>
        <div className="get-app-section d-flex justify-content-center align-items-center">
          <div className="main-app-content container">
            <div className="row gy-5">
              {/* Left Column */}
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="app-content1 d-sm-none d-md-block d-lg-block">
                  <img
                    src="https://b.zmtcdn.com/data/o2_assets/ce5bc038a8a2d4f8f24465c8826182af1726501431.png"
                    width="410"
                    height="400"
                    alt="Zomato App Preview"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="app-main-content">
                  <div className="app-content2">
                    <h2 style={{ color: "#1c1c1c", fontSize: "44px" }}>
                      Get The Zomato App
                    </h2>
                    <p
                      className="mt-4"
                      style={{
                        color: "#363636",
                        fontSize: "16px",
                        lineHeight: "35px",
                      }}
                    >
                      We will send you a link, open it on your
                      <br className="d-sm-block d-md-none d-lg-none" />
                      phone to download
                      <br className="d-none d-md-none d-lg-block" />
                      the app
                    </p>
                    <form className="row g-3 input-password">
                      <div className="radio d-flex">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                          >
                            Email
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                          >
                            Phone
                          </label>
                        </div>
                      </div>

                      <div className="col-auto">
                        <label
                          htmlFor="inputPassword2"
                          className="visually-hidden"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword2"
                          placeholder="Password"
                        />
                      </div>
                      <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">
                          Share <span className="d-md-none">App Link</span>
                        </button>
                      </div>
                    </form>

                    <p style={{ color: "#9c9c9c", fontSize: "14px" }}>
                      Download app from
                    </p>
                    <div className="download-app">
                      <img
                        src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                        width="137"
                        height="40"
                        alt="Google Play"
                      />
                      <img
                        src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                        width="137"
                        height="40"
                        alt="App Store"
                        style={{ marginLeft: "20px" }}
                      />
                    </div>
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

export default GetApp;
