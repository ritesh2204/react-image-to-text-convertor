import React, { Fragment, useState } from "react";
import { motion } from "framer-motion";

const MapButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <Fragment>
      <span
        className="rectIcon"
        style={styles.iconContainer}
        onClick={handleOpen}
      >
        <img src="maplight.svg" alt="map" className="call-to-action" />
        {open ? (
          <motion.div
            drag="x"
            initial={{ backgroundColor: "#000" }}
            animate={{ scale: 1, backgroundColor: "#fff" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5 }}
            style={styles.dropdownStyle}
            exit={{ scale: 1 }}
            className="boxShadow boxAnimate"
          >
            hello wolrd from india
          </motion.div>
        ) : null}
      </span>
    </Fragment>
  );
};

const styles = {
  iconContainer: {
    position: "absolute",
    right: "0px",
    top: "120px",
  },
  dropdownStyle: {
    borderRadius: 10,
    width: 120,
    padding: 8,
    zIndex: -1,
    marginTop: -22,
    boxShadow: "- 1px 0px 13px 0px rgba(0, 0, 0, 0.37",
    marginLeft: -140,
  },
};

export default MapButton;
