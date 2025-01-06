import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import Layout from "./components/Layout.tsx";
import Planets from "./components/Planets.tsx";

import {createBrowserRouter, RouterProvider} from "react-router";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Planets />
      }
    ]
  }
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
