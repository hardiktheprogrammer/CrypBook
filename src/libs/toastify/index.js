import { toast } from "react-toastify";

export const showSuccessToast = (value) => {
  toast.success(value);
};

export const showWarningToast = (value) => {
  toast.warn(value);
};

export const showErrorToast = (value) => {
  toast.error(value);
};
