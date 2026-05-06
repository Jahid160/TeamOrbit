import Swal from "sweetalert2";

export const showConfirmDialog = async (
  title: string = "Are you sure?",
  text: string = "You won't be able to revert this!",
  confirmButtonText: string = "Yes, delete it!",
) => {
  return await Swal.fire({
    title,
    text,
    icon: "warning",
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

export const showToast = (
  title: string,
  icon: "success" | "error" | "info" = "success",
) => {
  Swal.fire({
    title,
    icon,
    timer: 2000,
    showConfirmButton: false,
    toast: true,
    position: "top-end",
  });
};
