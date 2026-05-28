
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: "/",
            element: <Home/>
        }, 
        {
            path: "profile",
            element: <Profile/>
        }
    ]
  },
]);