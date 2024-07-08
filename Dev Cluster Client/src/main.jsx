import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Login from "./Pages/Login";
import AuthProvider from "./Providers/AuthProvider";
import ManageStudents from "./Pages/ManageStudents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
      {
        path:'/manage',
        element:<ManageStudents></ManageStudents>
      }
    ]
  },
  {
    path:'/login',
    element:<Login></Login>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>
);
