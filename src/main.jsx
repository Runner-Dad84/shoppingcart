import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { useNavigate } from "react-router-dom"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Shop from './routes/Shop.jsx'
import Cart from './routes/Cart.jsx'
import Product from './routes/Cart.jsx'

function ErrorRedirect () {
  const navigate = useNavigate();
  useEffect (()=> {
    navigate('/');
  }, [navigate])
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorRedirect />,
  },
  {
    path: "shop",
    element: <Shop />,
    children: [
      {
        path: "product/:itemID",
        element: <Product />
      }
    ],
  },
  {
    path: "cart",
    element: <Cart />,
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
