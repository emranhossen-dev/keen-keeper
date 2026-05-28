
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import Timeline from '../pages/Timeline';
import Stats from '../pages/Stats';
import Profile from '../pages/Profile';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: "/",
            element: <Home/>,
            hydrateFallbackElement: <div> Loading....... </div>
        }, 
        {
            path: "/timeline",
            element: <Timeline/>
        },
        {
            path: "/stats",
            element: <Stats/>
        }, 
        {
            path: "/details/:id",
            element: <Profile/>,
            loader: ()=>fetch("/data.json"),
            hydrateFallbackElement: <div> Loading....... </div>
        }, 
    ]
  },
]);