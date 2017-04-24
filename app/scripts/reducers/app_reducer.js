import { createStore } from "redux";
import store from "../store.js";

export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      note: "",
      confirmationMessage: "",
      questions: [
        { questionNumber: 1, question: "What is my top priority?" },
        {
          questionNumber: 2,
          question: "What is the hardest part I can start now?"
        },
        { questionNumber: 3, question: "What should I delegate?" },
        { questionNumber: 4, question: "What are the anticipated roadblocks?" },
        { questionNumber: 5, question: "Who is my customer for this?" },
        { questionNumber: 6, question: "How will this create value?" },
        { questionNumber: 7, question: "What should I skip?" },
        {
          questionNumber: 8,
          question: "Where should I spent the majority of my time today?"
        },
        {
          questionNumber: 9,
          question: "Who needs to be updated on my progress?"
        },
        { questionNumber: 10, question: "Who can I ask for help?" }
      ],
      answers: [],
      confirmSavedSurvey: ""
    };
  }

  switch (action.type) {
    case "INPUT_KEY":
      return Object.assign({}, state, { note: action.text });

    case "CLEAR":
      return Object.assign({}, state, {
        note: "",
        confirmationMessage: "Your note saved ⓧ"
      });

    case "DISMISS":
      return Object.assign({}, state, { confirmationMessage: "" });

    case "ANSWER_QUESTION":
      let newAnswer = state.answers.slice();
      let answer = { id: action.id, answer: action.answer };
      newAnswer.push(answer);
      return Object.assign({}, state, { answers: newAnswer });

    case "CONFIRM_SAVED":
      return Object.assign({}, state, {
        confirmSavedSurvey: "Your answers saved"
      });
  }
  console.log("Unhandled State!");
  return state;
}
