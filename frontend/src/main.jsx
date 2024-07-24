import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App";
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: (<App/>),
  },
 
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);