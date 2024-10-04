import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "../actions/authActions";

const initialState = {
    login: false,
    token: null,
    username: null,
    email: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                login: false,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                login: true,
                token: action.payload.token,
                username: action.payload.username,
                email: action.payload.email,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                login: false,
            }
        case LOGOUT:
            return {
                ...state,
                login: false,
                token: null,
                username: null,
                email: null,
            }
        default:
            return state
    }
}

export default authReducer