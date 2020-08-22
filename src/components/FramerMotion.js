import React from "react";
import { motion } from "framer-motion";

const FramerMotion = () => <motion.div style={styles.square}></motion.div>;

const styles = {
  square: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100px",
    height: "100px",
    borderRadius: "20px",
    background: "#000",
    border: "1px solid red",
  },
};

export default FramerMotion;
