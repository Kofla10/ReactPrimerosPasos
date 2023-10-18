import React from 'react'
import PropType from 'prop-type';

const CounterApp = ({data})=>{
    return (
        <>
            <h1>{data.title}</h1>
            <p>The value is: {data.value}</p>
        </>
    )
}

Counter.PropType = {
    data: PropType.string.isREquired
}


export default CounterApp;