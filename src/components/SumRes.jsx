import React, {useState} from 'react'


const SumRes = () =>{

    const [value, setValue] = useState(0);

    const sum = () =>  setValue(value + 1);
  

    const subtraction = () => setValue(value-1);
    

    const reset = () =>  setValue(0)
    

    return (
        <>
            <h1> Sum and Subtraction</h1>
            
            <p>The value is: {value}</p>

            <button onClick={sum}> Sum</button>
            <button onClick={subtraction}>Subtraction</button>
            <button onClick={reset}>Reset</button>
        </>
    )

}

export default SumRes;