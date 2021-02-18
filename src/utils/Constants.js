import env from '../env';

const constants = {
    IS_LOGGED_IN: env.APP_NAME + '.isLoggedin',
    IS_ADMIN: env.APP_NAME + '.isAdmin',
    USER_DATA: env.APP_NAME + '.userInfo',
    TOKEN: env.APP_NAME + '.token',
    DISPLAY_NAME: env.APP_NAME + '.displayName',
    LANGUAGE: env.APP_NAME + '.language',
}

export default constants;