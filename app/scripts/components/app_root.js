import React from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import Game from "./game.js";
import Quiz from "./quiz.js";
import Editor from "./editor";

class AppRoot extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick({ history }) {
    return (
      <div>
        <h1 onClick={() => history.push("/game")}>
          Click here for the BEST version of a Jeopardy Game on the Web
        </h1>
        <h1 onClick={() => history.push("/quiz")}>
          Click here for the BEST version of a Questionnaire on the Web
        </h1>
        <h1 onClick={() => history.push("/editor")}>
          Click here for the BEST version of a Markdown Editor on the Web
        </h1>
      </div>
    );
  }

  render() {
    return (
      <main>
        <h2>WELCOME to my Extraordinary TIY React/Redux Web Apps</h2>
        <Route render={this.handleClick} />
      </main>
    );
  }
}

export default AppRoot;
