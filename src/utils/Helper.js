// import {NotificationManager} from 'react-notifications';
import { EventEmitter } from './events';

// const showToast = (type, time, message, title = '') => {
//     switch (type) {
//         case 'info':
//           NotificationManager.info(message, title, time);
//           break;
//         case 'success':
//           NotificationManager.success(message, title, time);
//           break;
//         case 'warning':
//           NotificationManager.warning(message, title, time);
//           break;
//         case 'error':
//           NotificationManager.error(message, title, time);
//         //   NotificationManager.error(message, title, time, () => {
//         //     alert('callback');
//         //   });
//           break;
//         default: break;
//     }
// }

const showSpinner = () => {
    EventEmitter.dispatch('isLoading', true);
}

const hideSpinner = () => {
    EventEmitter.dispatch('isLoading', false);
}

export {
    // showToast,
    showSpinner,
    hideSpinner
};

const Helper = {
    // showToast,
    showSpinner,
    hideSpinner
}

export default Helper;