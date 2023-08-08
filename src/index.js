import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Gallery, Profile } from './component/Gallery';
import Exp from './component/Exp';
import Demo22 from './component/Demo22';
import Style from './component/Style';
import Product from './component/Product';
import RouteConfig from './component/RouteConfig';
import Counter from './component/Counter';
import Likes from './component/Likes';
import TimeTable from './component/TimeTable';
import Front from './component/Front';
import Calculator from './component/Calculator';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteConfig/>
    {/* <TimeTable/> */}
    {/* <Front/> */}
    {/* <Calculator/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
