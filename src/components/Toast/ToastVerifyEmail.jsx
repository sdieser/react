import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastVerifyEmail = () => {
    toast.error('Los correos no coinciden', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Slide
    })
}
export { ToastVerifyEmail }