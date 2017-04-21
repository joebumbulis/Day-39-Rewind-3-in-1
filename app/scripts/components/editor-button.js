import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import postNote from "../actions/post_note.js";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.clickSave = this.clickSave.bind(this);
  }
  clickSave() {
    var note = this.props.text;
    if (note.length >= 50) {
      this.props.dispatch(postNote(note));
    } else {
      alert("Note must be at least 50 characters in length to save");
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.clickSave}>SAVE</button>
      </div>
    );
  }
}

export default connect()(Button);
