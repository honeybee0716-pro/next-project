
import { toast } from 'react-toastify';

export const TOAST_NOTIF = {
    NEWSLETTER_SUCCESS: { type: 'success', message: 'Thank you for subscribing to our Newsletter!'},
    CONTACT_US_SUCCESS: { type: 'success', message: 'Message Sent successfully!'},
    ORDER_PLAN_BOOK_SUCCESS: { type: 'success', message: 'Thank you for ordering our Plan Book!'},
    ORDER_STUDY_SET_SUCCESS: { type: 'success', message: 'Thank you for ordering our Study Set!'},
    PRICE_QUOTE_SUCCESS: { type: 'success', message: 'Price quote save successfully!'},
    DEFAULT_ERROR: { type: 'error', message: 'Something went wrong, Please try again later'}
}

export const ToastNotification = (props) => {

    const { type, message } = props;

    let defaults = {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        newestOnTop: true,
        closeOnClick: true,
        rtl: "false"
    }


    switch (type) {
        case 'success':
            toast.success(message, {
                ...defaults
            });
            break;
        case 'error':
            toast.error(message, {
                ...defaults
            });
            break;
        case 'warning':
            toast.warn(message, {
                ...defaults
            });
            break;
        case 'info':
            toast.info(message, {
                ...defaults
            });
            break;
        default:
            break;
    }
}



