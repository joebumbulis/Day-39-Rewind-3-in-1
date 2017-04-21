import React from "react";
import Input from "./editor-input.js";
import Output from "./editor-output.js";
import Button from "./editor-button.js";
import { connect } from "react-redux";
import container from "../containers/all.js";
import marked from "marked";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleKey = this.handleKey.bind(this);
  }

  handleKey(e) {
    let input = e.target.value;
    this.props.dispatch({ type: "INPUT_KEY", text: input });
  }

  render() {
    return (
      <main className="main-style">
        <h2 onClick={() => this.props.dispatch({ type: "DISMISS" })}>
          {this.props.confirmationMessage}
        </h2>
        <Input onChange={this.handleKey} textvalue={this.props.note} />
        <Output text={marked(this.props.note)} />

        <Button text={this.props.note} />

      </main>
    );
  }
}

export default connect(container.allState)(Editor);
