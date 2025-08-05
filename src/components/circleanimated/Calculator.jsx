import React, { useState } from 'react';
import './Calculator.css';

const buttons = [
  { id: "clear", value: "AC" },
  { id: "divide", value: "/" },
  { id: "multiply", value: "*" },
  { id: "seven", value: "7" },
  { id: "eight", value: "8" },
  { id: "nine", value: "9" },
  { id: "subtract", value: "-" },
  { id: "four", value: "4" },
  { id: "five", value: "5" },
  { id: "six", value: "6" },
  { id: "add", value: "+" },
  { id: "one", value: "1" },
  { id: "two", value: "2" },
  { id: "three", value: "3" },
  { id: "equals", value: "=" },
  { id: "zero", value: "0" },
  { id: "decimal", value: "." },
];

const Calculator = () => {
  const [input, setInput] = useState("0");
  const [formula, setFormula] = useState("");

  const handleClick = (val) => {
    if (val === "AC") {
      setInput("0");
      setFormula("");
    } else if (val === "=") {
      try {
        const result = eval(formula.replace(/--/g, "+"));
        setInput(result.toString());
        setFormula(result.toString());
      } catch (e) {
        setInput("Error");
        setFormula("");
      }
    } else {
      if (/[\d.]/.test(val)) {
        if (val === "." && input.includes(".")) return;
        if (input === "0" && val !== ".") {
          setInput(val);
          setFormula(val);
        } else {
          setInput((prev) => prev + val);
          setFormula((prev) => prev + val);
        }
      } else {
        setInput(val);
        if (/[+\-*/]$/.test(formula)) {
          setFormula((prev) => prev.replace(/[+\-*/]+$/, val));
        } else {
          setFormula((prev) => prev + val);
        }
      }
    }
  };

  return (
    <div className='bodyCalc'>
    <div className="calculator-container" id="calculator">
      <div id="display" className="calculator-display">{input}</div>
      <div className="calculator-buttons">
        {buttons.map((btn) => (
          <button
            id={btn.id}
            key={btn.id}
            className="calculator-btn"
            onClick={() => handleClick(btn.value)}
          >
            {btn.value}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Calculator;
