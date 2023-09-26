import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Root,  loader as rootloader }from "./routes/root";
import Contact from "./routes/contact"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootloader,
    children: [
      {
      path: "/contacts/:contactId",
      element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
