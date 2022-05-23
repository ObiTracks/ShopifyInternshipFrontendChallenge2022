import React from "react";

function Response(props) {
  return (
    <div className="response">
      <div className="body1">Prompt</div>
      <div className="body2">{props.prompt}</div>
      <div className="body1">Response</div>
      <div className="body2">{props.response}</div>
    </div>
  )
}

export default Response;
