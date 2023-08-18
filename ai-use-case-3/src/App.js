import { useState } from "react";
import "./App.css";
import { MAX_VALUE } from "./constants";

function validateString(str, maxLength) {
  const specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  const regex = new RegExp(
    `^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[${specialChars}])[A-Za-z\\d${specialChars}]{1,${maxLength}}$`
  );

  return regex.test(str);
}

function App() {
  return (
     <div></div>
  );
}

export default App;
