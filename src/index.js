import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Reference from './pages/Reference';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Elektroinstalacevdomech from './pages/Elektroinstalacevdomech';
import Bezpecnostnizarizeni from './pages/Bezpecnostnizarizeni';
import Instalaceazprovoznenilinek from './pages/Instalaceazprovoznenilinek';
import Elektroinstalacevprumyslu from './pages/Elektroinstalacevprumyslu';
import Smarthomeinstalace from './pages/Smarthomeinstalace';
import Zahranicnispoluprace from './pages/Zahranicnispoluprace';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App><Services /></App>,
  },
  {
    path: "kontakt/",
    element: <App><Contact /></App>,
  },
  {
    path: "reference/",
    element: <App><Reference /></App>,
  },
  {
    path: "elektroinstalace-v-domech/",
    element: <App><Elektroinstalacevdomech /></App>,
  },
  {
    path: "bezpecnostni-zarizeni/",
    element: <App><Bezpecnostnizarizeni /></App>,
  },
  {
    path: "instalace-a-zprovozneni-linek/",
    element: <App><Instalaceazprovoznenilinek /></App>,
  },
  {
    path: "elektroinstalace-v-prumyslu/",
    element: <App><Elektroinstalacevprumyslu /></App>,
  },
  {
    path: "smart-home-instalace/",
    element: <App><Smarthomeinstalace /></App>,
  },
  {
    path: "zahranicni-spoluprace/",
    element: <App><Zahranicnispoluprace /></App>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
