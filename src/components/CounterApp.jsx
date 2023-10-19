import React, {useState} from 'react'
import PropType from 'prop-type';


const CounterApp = ({data})=>{
    
    //cuando usamos el useState, se queriere enviar el valor inicial en este caso es 1
    const [value, setValue] = useState(data.price);

    //Cuando la funcion no tiene interacion con el componendo el cual esta alojada es mejor tenerla afuer, practicas de programacion 
    const sum = ()=>{
        //forma normal de realizar la actualización de los valores
        // setValue( value+1)
        setValue( (c)=> c+1 )
    }

    return (
        <>
            <h1> {data.title} </h1>
            <p>The value is: {data.value} the price is: {value} </p>
            
            <button onClick={sum}>
                {value}
            </button>
        </>
    )
}

// Counter.propTypes = {
//     data: PropType.string.isREquired
// }


export default CounterApp;