import React, { useState } from "react";

function FunCalci() {
  const [num1, setnum1] = useState("");
  const [num2, setnum2] = useState("");
  const [result, setresult] = useState("");

  const addition = (e) => {
    setresult(parseInt(num1) + parseInt(num2));
  };
  const subtraction = (e) => {
    console.log(typeof num1);
    console.log(typeof num2);
    setresult(num1 - num2);
  };
  const multiplication = (e) => {
    setresult(parseInt(num1) * parseInt(num2));
  };
  const divide = (e) => {
    setresult(parseInt(num1) / parseInt(num2));
  };

  return (
    <>
      <div>
        <input
          onChange={(e) => setnum1(e.target.value)}
          type="number"
          value={num1}
        />
        <input
          onChange={(e) => setnum2(e.target.value)}
          type="number"
          value={num2}
        />
      </div>
      <div>
        <button onClick={addition}>+</button>
        <button onClick={subtraction}>-</button>
        <button onClick={multiplication}>*</button>
        <button onClick={divide}>/</button>
      </div>
      <div>{result}</div>
    </>
  );
}
export default FunCalci;
