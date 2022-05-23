import React, { Component } from "react";



class Prompt extends Component {
  copyPrompt = () => {
    /* Get the text field */
    var copyText = this.props.prompt;

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
    return;
  }
  render() {
    return (
      <div className="prompt" onClick="this.copyPrompt" id="{this.props.id}">
        <div className="body1">Prompt</div>
        <div className="body2">Prompt{this.props.prop}</div>
        <div className="overlay" />
      </div>
    )
  }
}

export default Prompt;
