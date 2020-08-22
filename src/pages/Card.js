import React from "react";
import RectIcon from "../components/MapButton";
import Roll from "react-reveal/Roll";
import MapButton from "../components/MapButton";
import CallButton from "../components/CallButton";
import ImageButton from "../components/ImageButton";

const Card = () => (
  <div className="container middlecard">
    <Roll top>
      <div className="row">
        <div className="col-md-6 col-lg-5 mx-auto col-sm-8 col-xs-6">
          <div className="card shadow">
            <MapButton />
            <CallButton />
            <ImageButton />
            {/* <div class="bg-primary borderRadius" style="height:10em;"></div> */}
            <div
              className=" bg-secondary d-flex justify-content-center"
              style={{
                height: "100px",
                borderRadius: "1px solid red",
              }}
            >
              <img
                className="img-fluid rounded-circle profileimg"
                src="https://i.imgur.com/r0bsDqL.jpg"
                alt="avatar"
              />
            </div>
            <div className="card-body text-center">
              <h4 className="card-title text-center lato mt-6">Manish Sahu</h4>
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

              <div
                className="text-center text-primary mt-4"
                style={{ fontSize: 12 }}
              >
                Let's Connect
              </div>
              <div
                className="d-flex justify-content-around mx-auto socialiconsize mt-3 mb-4"
                style={{ width: "70%", color: "#152766" }}
              >
                <i className="fab fa-facebook-f" />
                <i className="fab fa-instagram" />
                <i className="fab fa-linkedin-in" />
                <i className="fab fa-twitter" />
                <i className="fab fa-github" />
              </div>
              <a
                href="#!"
                style={{ color: "#E83882" }}
                // className="btn font-weight-bold btn-block text-white"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </Roll>
  </div>
);

export default Card;
