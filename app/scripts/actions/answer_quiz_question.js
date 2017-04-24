export default function answerQuestion(answer, id) {
  console.log(answer);
  //All async action creators should return a function that takes 'dispatch' as its argument
  return dispatch => {
    //Before ajax call dispatch any needed actions
    dispatch({ type: "ANSWER_QUESTION", id: id, answer: answer });
    // console.log(answer, id);

    //
    //   //Do the ajax call
    //   return  $.ajax({
    //     url: "SOME_URL",
    //     headers: {
    //       "SOME_ID": "BLAH"
    //     }
    //     data: {
    //     }
    //   }).then(function (response) {
    //     //After the ajax call dispatch any needed actions
    //     dispatch( { type: "ENDING_EXAMPLE_ASYNC" });
    //   })
  };
}
