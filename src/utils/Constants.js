import env from '../env';

export default {
    IS_LOGGED_IN: env.APP_NAME + '.isLoggedin',
    USER_DATA: env.APP_NAME + '.userInfo',
    TOKEN: env.APP_NAME + '.token',
    DISPLAY_NAME: env.APP_NAME + '.displayName',
    LANGUAGE: env.APP_NAME + '.language',
}