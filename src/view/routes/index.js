import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";
import HomePage from "../pages/homepage"
function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Navigate to={"/homepage"}/>}/>
            <Route>
                <Route 
                    path="/homepage" 
                    element={<MainLayout component={HomePage} />}/>
            </Route>
        </Routes>
    )

}

export default AllRoutes;