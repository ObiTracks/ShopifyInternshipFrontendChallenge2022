import React, { Component } from "react";



class Prompt extends Component {
  copyPhrase = () => {
    navigator.clipboard.writeText(this.props.prompt)

    var inputField = document.getElementById("prompt-input");
    inputField.innerText = this.props.prompt;
  };

  render() {
    return (
      <div className="prompt" onClick={this.copyPhrase} id={this.props.id}>
        <div className="body1">Prompt</div>
        <div className="body2">{this.props.prompt}</div>
        <div className="overlay" />
      </div>
    )
  }
}

export default Prompt;
