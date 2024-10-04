import axios from "axios"
import api from "../../config/api"

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT = 'LOGOUT'

export const loginRequest = () => ({
    type: LOGIN_REQUEST,
})

export const loginSuccess = (userData) => ({
    type: LOGIN_SUCCESS,
    payload: userData
})

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error
})

export const logout = () => ({
    type: LOGOUT
})


//API Login 
export const login = (email, password) => { 
    return async (dispatch) => {
        dispatch(loginRequest())
        try {
            const response = await api.post("/auth/login",{email,password});
            const userData = response.data
            localStorage.setItem("token", userData.token)
            dispatch(loginSuccess(userData))
        } catch (error) {
            dispatch(loginFailure(error.response ? error.response.data.message : 'Login Failed'))
        }
    }
}



export const checkAuthentication = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token')

        if(token) {
            dispatch(loginSuccess(token))
        }else { 
            dispatch(logout())
        }
    }
}

