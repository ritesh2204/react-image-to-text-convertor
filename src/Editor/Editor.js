import React from "react";
import ReactQuill from "react-quill";
import debounce from "../helpers";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      text: "",
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.editorContainer}>
        <ReactQuill></ReactQuill>
      </div>
    );
  }
}

export default withStyles(styles)(Editor);
