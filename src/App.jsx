import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useTheme } from '@/hooks/useThemes';

export const ThemeContext = React.createContext('');

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

const App = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <RouterProvider router={router} />
      </ThemeContext.Provider>
    </>
  );
};

export default App;
