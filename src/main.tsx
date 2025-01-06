import {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';
import Layout from "./pages/Layout.tsx";
import Planets from "./components/Planets.tsx";

import {createBrowserRouter, RouterProvider} from "react-router";
import {Provider} from 'react-redux';
import {store} from './store/store.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Planets/>
      }
    ]
  }
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
);
