import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./App.css";

import "./index.css";
import Routes from "./Routes/Routes";
import AuthProvider from "./Provider/AuthProvider";
/* const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayOut></MainLayOut>,
    children:[
      {
        path: "/",
        element: <PostUser />,
      },
      {
        path: "/users",
        element: <DisplayUser />,
        loader: () => fetch(`http://localhost:5000/users`),
      },
      {
        path: "/users/:id",
        element: <UpdateData />,
        loader: ({ params }) => {
          console.log(params);
          return fetch(`http://localhost:5000/users/${params.id}`);
        },
      },
    ]
  },
  
  
  
]); */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Routes} />
    </AuthProvider>
  </React.StrictMode>
);
