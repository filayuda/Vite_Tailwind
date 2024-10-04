//Reducer
const initialState = (
    state = {
        login: localStorage.getItem('token') !== null,
        token: localStorage.getItem('token'),
        username: localStorage.getItem('username') ? JSON.parse(localStorage.getItem('username')) : null,
        email: localStorage.getItem('email') ? JSON.parse(localStorage.getItem('email')) : null,
    },
    action
) => { 
    switch(action.type) {
        case "LOGIN":
            localStorage.setItem('token', action.token)
            localStorage.setItem('username', JSON.stringify(action.username))
            localStorage.setItem('email', JSON.stringify(action.email))
            return {
                ...state,
                login: true,
                token: action.token,
                username: action.username,
                email: action.email,
            }
        case "LOGOUT":
            localStorage.removeItem('token')
            localStorage.removeItem('username')
            localStorage.removeItem('email')
            return {
                ...state,
                login: false,
                token: null,
                username: null,
                email: null,
            }
    }

}


//Store
const store = Redux.createStore(reducer, initialState)
console.log('onCreateStore', store.getState())



//Subscrition


//Dispatch

const login = (token, username, email) => {
    store.dispatch({
        type: 'LOGIN',
        token: token,
        username: username,
        email: email,
    })
}

const logout = () => {
    store.dispatch({
        type: 'LOGOUT',
    })
}

export { store, login, logout }