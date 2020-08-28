import React, { Fragment } from "react";

const CallButton = () => (
  <Fragment>
    <span className="rectIcon" style={styles}>
      <img src="image.svg" alt="map" className="CallToActionButton" />
    </span>
  </Fragment>
);

const styles = {
  position: "absolute",
  right: "0px",
  top: "210px",
};

export default CallButton;
