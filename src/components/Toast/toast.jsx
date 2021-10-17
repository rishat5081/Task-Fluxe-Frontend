import { ToastContainer, toast } from "react-toastify";

const Toaster = () => {
  return (
    <ToastContainer
      position="top-left"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export default Toaster;

export const callSuccessToast = (message) => {
  toast.success(message);
};
export const callErrorToast = (message) => {
  toast.error(message);
};
