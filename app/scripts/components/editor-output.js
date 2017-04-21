import React from "react";

class Output extends React.Component {
  constructor(props) {
    super(props);
  }

  createMarkup() {
    return { __html: this.props.text };
  }

  render() {
    return (
      <div className="col-right">
        <div dangerouslySetInnerHTML={this.createMarkup()} className="output" />
      </div>
    );
  }
}

export default Output;
