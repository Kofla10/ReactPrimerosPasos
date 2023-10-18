import React from 'react'
import ReactDOM  from 'react-dom/client'
import App from './components/HelloWoldAppl'
import FirstApp from './components/FirstApp'

import './style.css'
import CounterApp from './components/CounterApp'

const data = {
    title: "Counter App",
    subTitle: 123
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App/> */}
        {/* <FirsApp data= {inf}/> */}
        {/* <FirstApp  subTitle= 'JS and Hooks'/> */}
        <CounterApp data= {data}/>
    </React.StrictMode>
)
