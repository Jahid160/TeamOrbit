import Swal, { SweetAlertIcon } from "sweetalert2";

export const showConfirmDialog = async (
  title: string = "Are you sure?",
  text: string = "You won't be able to revert this!",
  confirmButtonText: string = "Yes, proceed!",
  icon: SweetAlertIcon = "warning",
) => {
  return await Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonColor: "#003d9b",
    cancelButtonColor: "#d33",
    confirmButtonText,
    background: "#fff",
    customClass: {
      popup: "rounded-2xl",
    },
  });
};

export const showToast = (title: string, icon: SweetAlertIcon = "success") => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  return Toast.fire({
    icon: icon,
    title: title,
    background: "#fff",
    customClass: {
      popup: "rounded-xl border border-slate-100 shadow-lg",
    },
  });
};
