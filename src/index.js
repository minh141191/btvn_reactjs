import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ListStudent from "./student/ListStudent";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateStudent from "./student/CreateStudent";
import UpdateStudent from "./student/UpdateStudent";
import ViewStudent from "./student/ViewStudent";
import Navbar from "./home/Navbar";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path={`/`} element={<ListStudent/>}/>
              <Route path={`/create`} element={<CreateStudent/>}/>
              <Route path={`/update/:id`} element={<UpdateStudent/>}/>
              <Route path={`/views/:id`} element={<ViewStudent/>}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
