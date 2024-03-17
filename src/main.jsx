import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Properties from './pages/Properties/Properties.jsx'
import PropertyDetails from './pages/PropertyDetails/PropertyDetails.jsx';
import ContactUs from './pages/ContactUs/ContactUs.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'Properties',
        element: <Properties />
      },
      {
        path: "propertyDetails",
        element: <PropertyDetails />
      },
      {
        path: "contactUs",
        element: <ContactUs />
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
