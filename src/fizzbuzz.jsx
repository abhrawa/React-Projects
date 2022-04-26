import { useState, useEffect } from "react";

const Fizzbuzz = () => {
  const [input1, Setinput1] = useState("");
  const [output, Setoutput] = useState("");

  useEffect(() => {
    if (input1 === "") {
      Setoutput("");
    } else if (input1 % 15 === 0) {
      Setoutput("fizzbuzz");
    } else if (input1 % 3 === 0) {
      Setoutput("Fizz");
    } else if (input1 % 5 === 0) {
      Setoutput("buzz");
    }
  }, [input1]);
  return (
    <div>
      <input
        type="text"
        value={input1}
        onChange={(e) => {
          Setinput1(e.target.value);
        }}
      />
      <p>{output}</p>
    </div>
  );
};
export default Fizzbuzz;
