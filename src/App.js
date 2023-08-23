import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');

  const handleInput1Change = (e) => {
    setInput1(e.target.value);
  };

  const handleInput2Change = (e) => {
    setInput2(e.target.value);
  };

  const handleAdd = () => {
    if (input1 && input2) {
      setResult(parseFloat(input1) + parseFloat(input2));
    }
  };

  const handleSubtract = () => {
    if (input1 && input2) {
      setResult(parseFloat(input1) - parseFloat(input2));
    }
  };

  const handleMultiply = () => {
    if (input1 && input2) {
      setResult(parseFloat(input1) * parseFloat(input2));
    }
  };

  const handleDivide = () => {
    if (input1 && input2) {
      setResult(parseFloat(input1) / parseFloat(input2));
    }
  };

  return (
    <>
      <input type="text" value={input1} onChange={handleInput1Change} />
      <br />
      <input type="text" value={input2} onChange={handleInput2Change} />
      <br />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
      <button onClick={handleMultiply}>Multiply</button>
      <button onClick={handleDivide}>Divide</button>
      <h1>{result}</h1>
    </>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById('root'));
