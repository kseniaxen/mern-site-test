import {createContext} from 'react'
import noop from 'react-props-noop';

export const AuthContext = createContext({
    token:null,
    userId: null,
    login: noop,
    logout: noop,
    isAuth: false
})