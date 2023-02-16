import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from '@/layouts/RootLayout';
import Error from '@/pages/Error';
import Gallery from '@/pages/Gallery';
import Weather from '@/pages/Weather';
import Collection from '@/pages/Collection';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Weather />,
      },
      {
        path: 'weather',
        element: <Weather />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'gallery/:collectionId',
        element: <Collection />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
