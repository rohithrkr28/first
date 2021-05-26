import React, { useState } from "react";

function Calci() {
    const [num1,setNum1] = useState('');
    const [num2,setNum2] = useState('');
    const [result,setResult] = useState('');

    return(
        <div>
            Num1:-<input type='text' value={num1} onChange={e =>setNum1(e.target.value)} placeholder='Enter the first value'></input><br></br>
            Num2:-<input type='text' value={num2} onChange={e =>setNum2(e.target.value)} placeholder='Enter the second value'></input><br></br>
            <button onClick={() => setResult((parseInt(num1)+parseInt(num2)))} >add</button><br></br>
            <button onClick={() => setResult((parseInt(num1)-parseInt(num2)))} >Sub</button><br></br>
            <button onClick={() => setResult((parseInt(num1)*parseInt(num2)))} >Mul</button><br></br>
            <button onClick={() => setResult((parseInt(num1)/parseInt(num2)))} >Div</button><br></br>
            Result:-<input type='text' value={result} placeholder='Displays the result'></input>
        </div>
    );
};

export default Calci;