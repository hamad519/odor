// src/index.js
import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import './App.css';
import Layout from "./components/layout";
import Blogs from "./pages/Blogs";
import SingleBlog from "./pages/SingleBlog";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
import AllProduct from "./pages/AllProduct";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import About from "./pages/about";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About/>
      </Layout>
    ),
  },
  {
    path: "/blogs",
    element: (
      <Layout>
        <Blogs/>
      </Layout>
    ),
  },
  {
    path: "/singleBlog",
    element: (
      <Layout>
        <SingleBlog/>
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <Contact/>
      </Layout>
    ),
  },
  {
    path: "/singleProduct",
    element: (
      <Layout>
        <SingleProduct/>
      </Layout>
    ),
  },
  {
    path: "/allProduct",
    element: (
      <Layout>
        <AllProduct/>
      </Layout>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Layout>
        <Checkout/>
      </Layout>
    ),
  },
  {
    path: "/cart",
    element: (
      <Layout>
        <Cart/>
      </Layout>
    ),
  },
  {
    path: "/registration",
    element: (
      <Layout>
        <Registration/>
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login/>
      </Layout>
    ),
  },
  // Additional routes can be added here
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
