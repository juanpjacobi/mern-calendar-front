import React from 'react'
import { useDispatch } from 'react-redux';
import {  eventStartDelete } from '../../actions/events';

export const DeleteEventFab = () => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(eventStartDelete())
    }
  return (
    <button onClick={handleDelete} className='btn btn-danger fab-danger'>
        <i className='fas fa-trash'></i>
        <span> Borrar evento </span>
    </button>
  )
}
