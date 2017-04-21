import { createStore } from "redux";
import store from "../store.js";

export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      note: "",
      confirmationMessage: ""
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
  }
  console.log("Unhandled State!");
  return state;
}
