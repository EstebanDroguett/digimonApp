import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const NavBar = () => {

    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {

        dispatch({ type: types.logout });

        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" >Digimon App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')} to="/fresh">Fresh</NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')} to="/training">Training</NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')} to="/rookie">Rookie</NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')} to="/champion">Champion</NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')} to="/ultimate">Ultimate</NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')} to="/mega">Mega</NavLink >
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        to="/search"
                    >
                        Search
                    </NavLink>
                    <span className="nav-item nav-link text-info">
                        {user.name}
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
