import React from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import Game from "./game.js";
import Quiz from "./quiz.js";
import Editor from "./editor";

class AppRoot extends React.Component {
  render() {
    return (
      <main>
        <h2>WELCOME to my Extraordinary TIY React/Redux Web Apps</h2>
        <p />
        <div>
          <Link to="/game">
            the BEST version of a Jeopardy Game on the Web
          </Link>
        </div>
        <div>
          {" "}
          <Link to="/quiz">the BEST version of a Questionnaire on the Web</Link>
        </div>
        <div>
          {" "}
          <Link to="/editor">
            the BEST version of a Markdown Editor on the Web
          </Link>
        </div>

      </main>
    );
  }
}

export default AppRoot;
