import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import container from "../containers/all.js";
import postAnswers from "../actions/post_quiz_answers.js";

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Results Clicked");
    this.props.dispatch(
      postAnswers(this.props.answers.answer, this.props.answers.questionNumber)
    );
  }

  render() {
    return (
      <section>
        <h2>Results</h2>
        <h4>{this.props.confirmSavedSurvey}</h4>
        <table>
          <thead>
            <tr>
              {this.props.questions.map((question, j) => {
                return <th key={j}>{question.question}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {this.props.answers.map((answer, j) => {
                return <td key={j}>{answer.answer}</td>;
              })}
            </tr>
          </tbody>
        </table>

        <button onClick={this.handleClick}>SUBMIT</button>
      </section>
    );
  }
}

export default connect(container.allState)(Results);
