import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context/AppContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/AppBody';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
    {path:"/", element: <Body/>},
    {path: "/watch", element: <WatchPage /> }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
     <RouterProvider router={appRouter} />
    </AppProvider>
  </React.StrictMode>
);