import store from "./store.js";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRoot from "./components/app_root.js";
import Game from "./components/game.js";
import Quiz from "./components/quiz.js";
import Editor from "./components/editor.js";

const Nav = () => (
  <nav>
    <li><NavLink to="/">Welcome</NavLink></li>
    <li><NavLink to="/game">Game</NavLink></li>
    <li><NavLink to="/quiz">Quiz</NavLink></li>
    <li><NavLink to="/editor">Editor</NavLink></li>
  </nav>
);

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={AppRoot} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/editor" component={Editor} />
        </div>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}
