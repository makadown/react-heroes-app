import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HeroesApp } from '../HeroesApp';
import { DcPage, MarvelPage } from '../heroes';
import { LoginPage } from '../auth';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HeroesApp />,
        children: [
            {
                path: 'marvel',
                element: <MarvelPage />                
            },
            {
                path: 'dc',
                element: <DcPage />
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: '/',
                element: <Navigate to="/marvel" />
            }
        ]
    }
])

/**
 * This custom component renders the router. 
 * It's going to be the main component of the application.
 * invoked in the main.jsx
 * @returns {JSX.Element} 
 */
export const AppRouter = () => {
  return (
     <>
        <RouterProvider router={router} />
     </>
  )
}

// this is to avoid the "Uncaught ReferenceError: Cannot access 'HeroesApp' before initialization" Message
// solution got from https://github.com/remix-run/react-router/issues/9799
export default AppRouter;
