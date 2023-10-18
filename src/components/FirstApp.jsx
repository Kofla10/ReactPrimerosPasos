import React from 'react'

const newMessage = {
    names: 'Fernando',
    lastName: 'Mosquera',
    ocupation: 'Study'
}

const names = ()=>{
    let name = 'Camilo'
    return name
}


const FirsApp = () => {

    return(
        <>
            {/* <h3>{newMessage}</h3> */}
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <h1>{names()}</h1>
            <p>
                This is a test
            </p>
        </>
    )
}

export default FirsApp;