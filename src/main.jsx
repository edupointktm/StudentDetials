import React from "react";
import ReactDOM from "react-dom/client";
import App from '../src/App'
// import '../src/style/style.css'
import '../src/style/main.scss'
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.querySelector('#root')).render(
   <BrowserRouter>
    <>
     <App/> 
    </>
    </BrowserRouter>
  )

