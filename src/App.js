import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import fire from "./fire";
import Editor from "./Editor/Editor";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null,
    };
  }
  render() {
    return (
      <div>
        <Editor />
      </div>
    );
  }

  componentDidMount = () => {
    fire
      .firestore()
      .collection("notes")
      .onSnapshot((serverUpdate) => {
        const notes = serverUpdate.docs.map((_doc) => {
          const data = _doc.data();
          data["id"] = _doc.id;
          return data;
        });
        console.log(notes);
        this.setState({
          notes: notes,
        });
      });
  };
}

export default App;
