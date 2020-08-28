import React, { Fragment } from "react";

const CallButton = () => (
  <Fragment>
    <span className="rectIcon" style={styles}>
      <img src="call.svg" alt="map" className="CallToActionButton" />
    </span>
  </Fragment>
);

const styles = {
  position: "absolute",
  right: "0px",
  top: "165px",
};

export default CallButton;
