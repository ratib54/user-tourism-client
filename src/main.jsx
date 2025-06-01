import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

import MainLay from './MainLayout/MainLay';
import Home from './pages/Home';
import AllTouristSpot from './pages/AllTouristSpot';
import Login from './pages/Login';
import Register from './pages/Register';
import MyList from './pages/MyList';
import AddTouristSpot from './pages/AddTouristSpot';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLay />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/alltouristspot",
        element: <AllTouristSpot />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/mylist",
        element: <MyList />
      },
      {
        path:'/addtouristspot' ,
        element:<AddTouristSpot/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
