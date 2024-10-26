import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Weather from './Weather.jsx';
import{createBrowserRouter,RouterProvider} from 'react-router-dom'
import { StrictMode } from 'react';
import Navbar from './Navbar.jsx';

const router =createBrowserRouter([
    {
    path:"/",
    element:<App/>},
    {
        path:'/Weather',
        element:<Weather/>
    }
]);
createRoot(document.getElementById('root')).render(
  
    <StrictMode>
    
<RouterProvider router={router}/>
    </StrictMode>
  
)
