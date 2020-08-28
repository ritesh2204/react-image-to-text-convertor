import React from "react";
import MapButton from "../components/MapButton";
import CallButton from "../components/CallButton";
import ImageButton from "../components/ImageButton";

const SecondCard = () => {
  return (
    <div className="container middlecard">
      <div className="row">
        <div className="col-md-6 col-lg-5 mx-auto col-sm-8 col-xs-6 pl-0 pr-0">
          <div>
            <div className="d-flex justify-content-around bg-light  p-3">
              <div>
                <i className="fab fa-facebook-f text-primary" />
              </div>
              <div>
                <i className="fab fa-instagram text-danger" />
              </div>
              <div>
                <i className="fab fa-linkedin-in text-secondary" />
              </div>
              <div>
                <i className="fab fa-twitter text-info" />
              </div>
              <div>
                <i className="fab fa-github text-dark" />
              </div>
            </div>
            <MapButton />
            <CallButton />
            <ImageButton />
            {/* <div class="bg-primary borderRadius" style="height:10em;"></div> */}

            <div>
              <div className=" d-flex justify-content-center ">
                <img
                  className="img-fluid rounded-circle profileimg"
                  src="https://i.imgur.com/r0bsDqL.jpg"
                  alt="avatar"
                />
              </div>
              <div className="card-body text-center">
                <h4 className="card-title text-center lato mt-2">
                  Manish Sahu
                </h4>
                <span className="pill text-center mx-auto text-primary fw400 ">
                  Freelancer{" "}
                  <span>
                    <img src="/freelancer.svg" alt="svg"></img>
                  </span>
                </span>

                <p className="card-text roboto mt-4">
                  “A Web Developer with over 5 years of experience in Website
                  Design & Development.”
                </p>

                <div className="d-flex justify-content-around mt-4">
                  <div>
                    <span className="pill text-center mx-auto text-primary fw400 ">
                      UI & UX
                    </span>
                  </div>
                  <div>
                    <span className="pill text-center mx-auto text-primary fw400 ">
                      App Developmet
                    </span>
                  </div>
                  <div>
                    <span className="pill text-center mx-auto text-primary fw400 ">
                      >
                    </span>
                  </div>
                </div>

                <div className="d-flex justify-content-around mt-5 text-primary font-weight-light">
                  <div> &bull; 100% customer satifaction</div>
                  <div>&bull; 1000+ happy customer</div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-around bg-light p-3 text-primary mt-4">
              <div>
                <img src="share.svg" alt="share" style={{ width: 25 }} />
              </div>
              <div>
                <img src="download.svg" alt="share" style={{ width: 25 }} />
              </div>
              <div>
                <img src="download.svg" alt="share" style={{ width: 25 }} />
              </div>
              <div>
                <img src="download.svg" alt="share" style={{ width: 25 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondCard;
