import React from "react";

class Input extends React.Component {
  render() {
    return (
      <div className="col-left">
        <textarea
          type="text"
          onChange={this.props.onChange}
          value={this.props.textvalue}
        />
      </div>
    );
  }
}

export default Input;
