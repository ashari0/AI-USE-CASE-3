import { MAX_LENGTH } from "./constants";

export const validateString = (str, maxLength) =>  {
    const specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    const regex = new RegExp(
      `^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[${specialChars}])[A-Za-z\\d${specialChars}]{1,${maxLength}}$`
    );
  
    return regex.test(str);
  }

const testRegexValidation = (validateStringFunc, maxLength) => {
    const tests = [
        {input: 'y', expected: false, desc: 'Too short input'},
        {input: 'Y'* (maxLength + 1), expected: false, desc: 'Too long input'},
        {input: 'Y'* maxLength, expected: false, desc: 'Matching input length but missing other criteria'},
        {input: 'yY1!', expected: true, desc: 'Valid string with uppercase, lowercase, digit, and special character'},
        {input: 'yY1', expected: false, desc: 'Missing special character'},
        {input: 'yy1!', expected: false, desc: 'Missing uppercase'},
        {input: 'YY1!', expected: false, desc: 'Missing lowercase'},
        {input: 'Yy!', expected: false, desc: 'Missing digit'},
        {input: ' Yy1!', expected: false, desc: 'Starting with a whitespace'},
        {input: 'Yy1! ', expected: false, desc: 'Ending with a whitespace'},
        {input: 'Yy 1!', expected: false, desc: 'Whitespace in the middle'}
    ];

    let allPassed = true;

    tests.forEach(test => {
        const result = validateStringFunc(test.input, maxLength);
        console.log(`${test.desc}: ${result === test.expected ? 'PASSED' : 'FAILED'}`);
        if (result !== test.expected) {
            allPassed = false;
        }
    });

    return allPassed;
}

export const textRegexFunction = () => {
    const allTestsPassed = testRegexValidation(validateString, MAX_LENGTH);

    console.log(`All tests ${allTestsPassed ? 'passed' : 'failed'}`);
}