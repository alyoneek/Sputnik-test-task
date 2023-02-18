import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from '@/layouts/RootLayout';
import Error from '@/pages/Error';
import Gallery from '@/pages/Gallery';
import Weather from '@/pages/Weather';

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
