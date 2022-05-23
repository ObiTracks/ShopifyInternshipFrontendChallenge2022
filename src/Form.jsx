import React from "react";
import Prompt from './Prompt';

function Form(props) {
  return (
    <div className="form">
      <div className="header2">Fun with AI</div>
      <div className="body2">Submit prompts to OpenAi’s GPT3 machine learning model and see what it has to say back! Or select one of the prefilled prompts on the right side of the form to get started!.</div>
        

      <div className="input-fields">
        <label htmlFor="" className="body1">Prompt
          <div className="prompts">
            <div className="header3">Choose a Prompt</div>
            <Prompt id="prompt-1"/>
            <Prompt id="prompt-2"/>
            <Prompt id="prompt-3"/>
          </div>
        </label>
        
        <textarea type="text" className="prompt-input" placeholder='Prompt'/>
        <hr />
        <button type="submit" className="style1">Submit</button>
      </div>
    </div>
  )
}

export default Form;
