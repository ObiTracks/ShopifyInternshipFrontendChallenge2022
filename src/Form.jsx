import React, { useState } from "react";
import Prompt from './Prompt';


function Form(props) {
  const prompts = {
    prompt1: 'Write a poem about a dog wearing skis',
    prompt2: 'What is the meaning of life?',
    prompt3: 'Write a tagline for an ice cream shop.',
  }

  const [prompt, setPrompt] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const prompt = event.target[0].value
    alert(`A prompt was submitted: ` + prompt);
    console.log(`A prompt was submitted: ` + prompt);
    console.log(event.target[0].value);
    var result = getGPT3Response(prompt);
    console.log(result);


  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="header2">Fun with AI</div>
      <div className="body2">Submit prompts to OpenAi’s GPT3 machine learning model and see what it has to say back! Or select one of the prefilled prompts on the right side of the form to get started!.</div>


      <div className="input-fields">
        <label htmlFor="" className="body1">Prompt
          <div className="prompts">
            <div className="header3">Choose a Prompt</div>
            <Prompt id="prompt-1" prompt={prompts.prompt1} />
            <Prompt id="prompt-2" prompt={prompts.prompt2} />
            <Prompt id="prompt-3" prompt={prompts.prompt3} />
          </div>
        </label>

        <textarea type="text" value={prompt} onChange={e => { setPrompt(e.target.value) }} className="prompt-input" id="prompt-input" placeholder='Prompt' />
        <hr />
        <button type="submit" className="style1">Submit Prompt</button>
      </div>
    </form>
  )
}

function getGPT3Response(prompt) {
  var result;
  const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

  const data = {
    prompt: prompt,
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(data => result = data);

  return (result);
}

export default Form;
