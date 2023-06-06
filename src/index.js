import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 
"react-router-dom";
import Teste from './pages/Teste';
import Transacoes from './pages/Transacoes';
import MeiosDePagamentos from './pages/MeiosDePagamentos';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }, 
  {
    path: "teste",
    element: <Teste />
  },
  {
    path: "transacoes",
    element: <Transacoes />
  },
  {
    path: "meiosdepagamentos",
    element: <MeiosDePagamentos />
  }
])

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
