import React from 'react'
import {  Routes, Route } from 'react-router-dom';
import RegisterLayout from '../../components/registerLayout/registerLayout'
import Register from '../page/register/register'
import Login from '../page/login/login'
function AllRoutes() {
    return (
        <Routes>
            <Route
                path = '/register'
                element = {<RegisterLayout>
                    <Register/>
                </RegisterLayout>}
            />
            <Route
                path = '/login'
                element = {<RegisterLayout>
                    <Login/>
                </RegisterLayout>}
            />
        </Routes>
    )
}
export default AllRoutes