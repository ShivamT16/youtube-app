import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/AppBody';
import WatchPage from './components/WatchPage';
import SearchResult from './components/SearchResult';
import ErrorPage from './components/ErrorPage';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
    {path:"/", element: <Body/>},
    {path: "/watch", element: <WatchPage /> },
    {path: "/results", element: <SearchResult />},
    ],
    errorElement: <ErrorPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={appRouter} />
  </React.StrictMode>
);