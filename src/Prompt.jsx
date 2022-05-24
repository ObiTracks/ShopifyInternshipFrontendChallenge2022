import React, { Component } from "react";



class Prompt extends Component {
  copyPhrase = () => {
    navigator.clipboard.writeText(this.props.prompt)

    var inputField = document.getElementById("prompt-input");
    inputField.innerText = this.props.prompt;

    // var event = new Event('change');
    // inputField.fireEvent("onchange")
    // inputField.dispatchEvent(event);

    // if ("createEvent" in document) {
    //   var evt = document.createEvent("HTMLEvents");
    //   evt.initEvent("change", false, true);
    //   inputField.dispatchEvent(evt);
    // }
    // else
    // inputField.fireEvent("onchange");
  };
  // onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}};

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
