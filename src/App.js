import React from 'react'
import AllRoutes from './view/router/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import RegisterPage from './register/register'

function App() {
    
    return (
        <BrowserRouter>
            {/* <AllRoutes /> */}
            <AllRoutes/>
        </BrowserRouter>
    )
}

export default App