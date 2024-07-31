import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "../Pages/Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registar from "../Pages/Registar/Registar";
import Movie from "../Pages/Movie/Movie";
import TV from "../Pages/TV/TV";
import Actors from "../Pages/Actors/Actors";
import Theaters from "../Pages/Theaters/Theaters";
import Details from "../Pages/Details/Details";
import ActorsDetails from "../Pages/Actors/ActorsDetails";
import Search from "../Pages/Search/Search";



export const routes=createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registar" element={<Registar/>}/>
        <Route path="/movie" element={<Movie/>}/>
        <Route path="/tv" element={<TV/>}/>
        <Route path="/actors" element={<Actors/>}/>
        <Route path="/theaters" element={<Theaters/>}/>
        <Route path="/details/:type/:id" element={<Details/>}/>
        <Route path="/actorsDetails/:type/:id" element={<ActorsDetails/>}/>
        <Route path="/search/:query" element={<Search/>}/>







        </Route>
        
        
        </>
    )
)