import env from './env.dev';
import env_prod from './env.prod';

export default (process.env.NODE_ENV === 'development') ? env : env_prod;