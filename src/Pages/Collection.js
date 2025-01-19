import React from "react";
import { Link } from "react-router-dom";

const CollectionsSection = () => {
  return (
    <section >
      <div className="card-section container">
        <div className="card-heding">
          <h2>Collections</h2>
        </div>
        <div className="heading-description d-flex justify-content-between">
          <p>
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Ahmedabad, based on trends
          </p>
          <Link to="#">
            All collections in{" "}
            <span style={{ fontWeight: 700 }}>Ahmedabad</span>
          </Link>
        </div>

        <div className="place-card mt-2">
          <div className="row gy-md-4">
            {/* Card 1 */}
            <div className="col-6 col-md-6 col-lg-3">
              <div className="place-card-content">
                <div className="p-card1-image"></div>
                <div className="p-desc">
                  <p
                    style={{
                      marginTop: "-60px",
                      color: "white",
                      marginLeft: "15px",
                      fontSize: "18px",
                    }}
                  >
                    Newly Opened Restaurants
                  </p>
                  <p
                    style={{
                      marginTop: "-15px",
                      color: "white",
                      marginLeft: "15px",
                      fontSize: "14px",
                    }}
                  >
                    15 places
                  </p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-6 col-md-6 col-lg-3">
              <div className="place-card-content">
                <div className="p-card2-image"></div>
                <div className="p-desc">
                  <p
                    style={{
                      marginTop: "-60px",
                      color: "white",
                      marginLeft: "15px",
                      fontSize: "18px",
                    }}
                  >
                    Best Insta-worthy Places
                  </p>
                  <p
                    style={{
                      marginTop: "-15px",
                      color: "white",
                      marginLeft: "15px",
                      fontSize: "14px",
                    }}
                  >
                    9 places
                  </p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-6 col-md-6 col-lg-3">
              <div className="place-card-content">
                <div className="p-card3-image"></div>
                <div className="p-desc">
                  <p
                    style={{
                      marginTop: "-60px",
                      color: "white",
                      marginLeft: "15px",
                      fontSize: "18px",
                    }}
                  >
                    The Legends of Ahmedabad...
                  </p>
                  <p
                    style={{
                      marginTop: "-15px",
                      color: "white",
                      marginLeft: "15px",
                      fontSize: "14px",
                    }}
                  >
                    15 places
                  </p>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="col-6 col-md-6 col-lg-3">
              <div className="place-card-content">
                <div className="content">
                  <div className="p-card4-image"></div>
                  <div className="p-desc">
                    <p
                      style={{
                        marginTop: "-60px",
                        color: "white",
                        marginLeft: "15px",
                        fontSize: "18px",
                      }}
                    >
                      Newly Opened Restaurants
                    </p>
                    <p
                      style={{
                        marginTop: "-15px",
                        color: "white",
                        marginLeft: "15px",
                        fontSize: "14px",
                      }}
                    >
                      27 places
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="collection-none d-sm-block d-md-none d-lg-none">
          <Link to="#">
            All collections in{" "}
            <span style={{ fontWeight: 700 }}>
              Ahmedabad <i className="fa-solid fa-caret-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
