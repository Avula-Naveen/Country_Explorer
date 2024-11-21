import { BrowserRouter, Route, Routes } from "react-router-dom"

import About from "../Pages/About"
import ErrorPage from "../Pages/ErrorPage"
import HomePage from "../Pages/HomePage"
import CountryPage from "../Pages/CountryPage"


const NavigationStack=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={HomePage}></Route>
            <Route path="/about" Component={About}></Route>
            <Route path="/:id" Component={CountryPage}></Route>
            <Route path="*" Component={ErrorPage}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default NavigationStack