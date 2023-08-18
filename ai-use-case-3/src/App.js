import { useState } from "react";
import "./App.css";
import {textRegexFunction,validateString} from './utils'
import { MAX_LENGTH } from "./constants";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  function handleChange(event) {
    const value = event.target.value;
    setInputValue(value);
    setIsValid(validateString(value, MAX_LENGTH));
  }

  return (
    <div className="wrapper">
      <button onClick={textRegexFunction}>Test Regex function</button>
      <input type="text" value={inputValue} onChange={handleChange} />
      {isValid ? (
        <p className="valid">Valid</p>
      ) : (
        <p className="invalid">Invalid</p>
      )}
    </div>
  );
}

export default App;
