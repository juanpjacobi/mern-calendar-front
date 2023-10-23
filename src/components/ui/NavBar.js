import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const NavBar = () => {

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  }
  const { name } = useSelector( state => state.auth );
  return (
    <div className='navbar navbar-dark bg-dark mb-4'>
        <span className='navbar-brand'>
        {name}
        </span>
        <button className='btn btn-outline-danger' onClick={ handleLogout }>
            <i className="fa-solid fa-sign-out-alt"></i>
            <span> Salir</span>
        </button>
    </div>
  )
}
