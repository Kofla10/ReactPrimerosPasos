import React from 'react'
import PropTypes from 'prop-types'

const newMessage = {
    names: 'Fernando',
    lastName: 'Mosquera',
    ocupation: 'Study'
}

const names = ()=>{
    let name = 'Camilo'
    return name
}



const FirstApp = ({title, subTitle}) => {

    if(!title){
        throw new Error('The title is null')
    }

    return(
        <>
            {/* <h3>{newMessage}</h3> */}
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <h1>{names()}</h1>
            <h1>{title}</h1>
            <h4>{subTitle}</h4>
            <p>
                This is a test
            </p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string
}

FirstApp.defaulProps = {
    title: 'No hay titulo'
}
export default FirstApp;