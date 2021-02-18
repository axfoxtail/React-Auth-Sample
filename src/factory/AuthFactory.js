import Const from '../utils/Constants';
import env from '../env';
import { POST } from './Http';
import { EventEmitter } from '../utils/events';

const login = async (credential) => {
    const path = `${env.BASE_API_ENDPOINT}/auth/login`;
    return POST(path, credential);
}

const saveLoginUserInfo = (user) => {
    if (!user) {
        return null;
    }
    localStorage.setItem(Const.IS_LOGGED_IN, true);
    localStorage.setItem(Const.IS_ADMIN, user.is_admin);
    localStorage.setItem(Const.TOKEN, user.api_token);
    localStorage.setItem(Const.DISPLAY_NAME, user.name);
    localStorage.setItem(Const.USER_DATA, JSON.stringify(user));
    // refresh Login status
    EventEmitter.dispatch('refreshLogin', true);
}

const getLoginStatus = () => {
    return localStorage.getItem(Const.IS_LOGGED_IN) ? localStorage.getItem(Const.IS_LOGGED_IN) : false;
}

const checkIsAdmin = () => {
    return localStorage.getItem(Const.IS_ADMIN) ? localStorage.getItem(Const.IS_ADMIN) : false;
}

const getToken = () => {
    return localStorage.getItem(Const.TOKEN) ? localStorage.getItem(Const.TOKEN) : false;
}

const getDisplayName = () => {
    return localStorage.getItem(Const.DISPLAY_NAME) ? localStorage.getItem(Const.DISPLAY_NAME) : false;
}

const getLoginUserData = () => {
    return localStorage.getItem(Const.USER_DATA) ? JSON.parse(localStorage.getItem(Const.USER_DATA)) : false;
}

const logout = () => {
    localStorage.clear();
    // refresh Login status
    EventEmitter.dispatch('refreshLogin', false);
    return true;
}

const updatePassword = async (credential) => {
    const path = `${env.BASE_API_ENDPOINT}/auth/updatePassword`;
    return POST(path, credential);
}

const AuthFactory = {
    login,
    saveLoginUserInfo,
    getLoginStatus,
    checkIsAdmin,
    getToken,
    getDisplayName,
    getLoginUserData,
    logout,
    updatePassword
}

export default AuthFactory;