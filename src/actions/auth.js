import { fetchWithOutToken, fetchWithToken } from "../helpers/fetch"
import { types } from "../types/types";
import Swal from "sweetalert2";
import { eventLogut } from "./events";


export const startLogin = (email, password) => {
    return async(dispatch) => {
        const resp = await fetchWithOutToken( 'auth', {email, password}, 'POST' );
        const body = await resp.json();
        if (body.ok) {
            localStorage.setItem( 'token', body.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );
            dispatch( login({
                uid: body.uid,
                name: body.name
            }) )
        } else {
            Swal.fire('Error', body.msg, 'error')
        }
    }
}
export const startRegister = ( name, email, password) => {
    return async(dispatch) => {
        const resp = await fetchWithOutToken( 'auth/new', {name, email, password}, 'POST' );
        const body = await resp.json();
        if (body.ok) {
            localStorage.setItem( 'token', body.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );
            dispatch( login({
                uid: body.uid,
                name: body.name
            }) )
        } else {
            Swal.fire('Error', body.msg, 'error')
        }
    }
}
export const startChecking = () => {
    return async(dispatch) => {
        const resp = await fetchWithToken( 'auth/renew');
        const body = await resp.json();
        if (body.ok) {
            localStorage.setItem( 'token', body.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );
            dispatch( login({
                uid: body.uid,
                name: body.name
            }) )
        } else {
            dispatch(checkingfinish());
        }
    }
}
const checkingfinish = () => ({
    type: types.authCheckingFinish
});
const login = (user) => ({
    type: types.authLogin,
    payload: user
})
const logout = () => ({
    type: types.authLogout
})
export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(eventLogut())
        dispatch(logout());
    }
}
