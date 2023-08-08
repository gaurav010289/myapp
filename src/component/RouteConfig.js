import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Product from './Product';
import About from './About';
import NavLayout from './NavLayout';
import Likes from './Likes';
import Rating from './Rating';
import FirstComponent from './FirstComponent';
export default function RouteConfig() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<NavLayout/>}>
            <Route path = '/first' element = {<FirstComponent/>}/>
                <Route path = '/about' element = {<Likes/>}/>
                <Route path = '/rating' element = {<Rating rating = "3"/>}/>
                <Route path = '/product' element = {<Product/>}/>
            </Route>
        </Routes>
    </BrowserRouter>

  );
}
