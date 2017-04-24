import React from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import container from "../containers/all.js";
import answerQuestion from "../actions/answer_quiz_question.js";
import Results from "./quiz_results.js";

class quizQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.prevClick = this.prevClick.bind(this);
  }

  handleClick() {
    console.log("Answered Clicked");
    let answer = this.refs.answer.value;
    this.props.dispatch(answerQuestion(answer, this.props.match.params.id));
    this.refs.answer.value = " ";
  }

  prevClick({ history }) {
    console.log("Click Previous");
    if (this.props.match.params.id <= 1) {
      return <div />;
    } else {
      return (
        <h1
          className="previous-btn"
          onClick={() =>
            history.push(
              "/question/" + (Number(this.props.match.params.id) - 1)
            )}
        >
          Previous
        </h1>
      );
    }
  }

  render() {
    var maxLength = this.props.questions.length;
    if (this.props.onlyQuestion) {
      return <p>{this.props.question.question}</p>;
    } else {
      question = this.props.questions[this.props.match.params.id];
      var question = this.props.questions.filter((question, ind, arr) => {
        return question.questionNumber == this.props.match.params.id;
      })[0];
    }
    if (question === undefined) {
      return (
        <div>
          <Results />
        </div>
      );
    } else {
      return (
        <div className="question-holder">
          <h3 className="question">{question.question}</h3>
          <input
            className="question-input"
            ref="answer"
            type="text"
            placeholder="answer"
          />
          <h6 className="question-counter">
            {question.questionNumber} of {maxLength}
          </h6>
          <div className="button-holder">
            <h4 className="next-button" onClick={this.handleClick}>
              <Link
                to={"/question/" + (Number(this.props.match.params.id) + 1)}
              >
                next
              </Link>
            </h4>
            <Route render={this.prevClick} />
          </div>
        </div>
      );
    }
  }
}

export default connect(container.allState)(quizQuestion);
