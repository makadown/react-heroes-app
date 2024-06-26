import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';

export const Navbar = () => {
    // retrieving the user from AuthProvider.jsx via useContext
    const {user, logout} = useContext(AuthContext);
    
    const navigate = useNavigate();

    const onLogout = () => {
        // logout method from AuthProvider.jsx
        logout();
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className={"navbar-brand me-5"}
                to="/"
            >
                Heroes!
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({ isActive, isPending }) =>
                            (isPending ? "pending" : isActive ? "active" : "") + " nav-item nav-link"
                          }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({ isActive, isPending }) =>
                            (isPending ? "pending" : isActive ? "active" : "") + " nav-item nav-link"
                          }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={({ isActive, isPending }) =>
                            (isPending ? "pending" : isActive ? "active" : "") + " nav-item nav-link"
                          }
                        to="/search"
                    >
                        Search
                    </NavLink>

                    <NavLink 
                        className={({ isActive, isPending }) =>
                            (isPending ? "pending" : isActive ? "active" : "") + " nav-item nav-link"
                          }
                        to="/about"
                    >
                        About
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                     <span className="nav-item nav-link text-info">
                        Hi { user?.name }!
                     </span>
                     <button className="nav-item nav-link btn" onClick={ onLogout } >
                        Logout
                     </button>
                </ul>
            </div>
        </nav>
    )
}