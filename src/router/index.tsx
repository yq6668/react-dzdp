import { Routes, Route } from 'react-router-dom'
import React, { lazy, Suspense } from 'react'

const City = lazy(() => import('../pages/city'))
const Detail = lazy(() => import('../pages/detail'))
const Home = lazy(() => import('../pages/home'))
const Login = lazy(() => import('../pages/login'))
const Search = lazy(() => import('../pages/search'))
const User = lazy(() => import('../pages/user'))

export default function RouteMap() {
    return <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/detail/:id" element={<Detail></Detail>}></Route>
            <Route path="/city" element={<City></City>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/search/:msg/:city" element={<Search></Search>}></Route>
            <Route path="/user" element={<User></User>}></Route>
            <Route path="*" element={<Home></Home>}></Route>
        </Routes>
    </Suspense>
}