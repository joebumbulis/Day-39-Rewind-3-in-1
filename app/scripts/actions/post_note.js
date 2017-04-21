import React from "react";
import container from "../containers/all.js";
import { connect } from "react-redux";

export default function postNote(note) {
  return function(dispatch) {
    dispatch({ type: "GET_NOTES" });

    return $.ajax({
      type: "POST",
      dataType: "json",
      url: "https://api.backendless.com/v1/data/markdown",
      headers: {
        "application-id": "85577861-2A70-62E0-FFC7-B56EDDAFC300",
        "secret-key": "71A87D8E-1294-CD5F-FFF6-C9311CC4CD00",
        "Content-Type": "application/json",
        "application-type": "REST"
      },

      data: JSON.stringify({
        notes: note
      })
    }).then((data, response) => {
      console.log(response);
      dispatch({ type: "CLEAR" });

      console.log(data, response);
    });
  };
}
