import React from 'react'
import Navbar from './Components/Navbar'
import ClassBased from './Components/ClassBased'
import FunctionBased from './Components/FunctionBased'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<ClassBased/>}/>
                    <Route path='/function-based' element={<FunctionBased/>}/>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )

} 

export default Router