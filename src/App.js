import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Transactions from './Pages/Transactions';
import Budget from './Pages/Budget';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

function App() {
    
    return (
        <BrowserRouter basename='/'>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/signup"
                    element={<SignUp />}
                />
                <Route
                    path='/transactions'
                    element={<Transactions />}
                />
                <Route
                    path='/budget'
                    element={<Budget />}
                />                
            </Routes>
        </BrowserRouter>
    );
}
export default App;