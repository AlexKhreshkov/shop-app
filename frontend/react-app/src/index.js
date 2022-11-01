import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import ItemsListPage from "./pages/ItemsListPage";
import MainPage from "./pages/MainPage";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainPage />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/about",
//     element: <AboutPage />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/items",
//     element: <ItemsListPage />,
//     errorElement: <ErrorPage />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
