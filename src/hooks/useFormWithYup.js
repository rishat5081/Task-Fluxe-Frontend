import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// This exists only to merge yup and react hook form
const useFormWithYup = (yupSchema) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(yupSchema) });

  return { register, handleSubmit, errors, control };
};

export default useFormWithYup;
