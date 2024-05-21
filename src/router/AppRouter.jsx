import { Navigate, Routes, Route } from 'react-router-dom';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
  return (
     <>
        <Routes>

            <Route path="login/*"
                  element={ 
                           <PublicRoute>
                              <LoginPage />
                           </PublicRoute>
                           }
            /> 
            
            <Route path="/*" 
                  element={
                           <PrivateRoute>
                                    <HeroesRoutes />
                           </PrivateRoute>
                           }
            />

            {/* <Route path="login" element={<LoginPage />} />" */}
            {/* <Route path="/*" element={<HeroesRoutes />} /> */}

        </Routes>
     </>
  )
}

// this is to avoid the "Uncaught ReferenceError: Cannot access 'HeroesApp' before initialization" Message
// solution got from https://github.com/remix-run/react-router/issues/9799
export default AppRouter;
