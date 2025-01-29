import React from "react";
import { useForm } from "react-hook-form";
import AuthButton from "../../../components/Common/AuthButton";
import heart from "../../../assets/Images/heart_icon.png";

const SecondStep = ({ setStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Process the form data
    setStep(3); // Move to the next step
  };

  return (
    <div>
      <h1 className="text-[30px] text-buttonBg font-bold text-center font-Inria">
        Your Birthdate
      </h1>
      <p className="text-center text-sm font-Inter text-primaryYellow py-5">
        Enter your birthdate to continue
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="pb-5">
        <div>
          <input
            type="date"
            className="border bg-[#F4F3F1] w-full min-h-[45px] min-w-[45px] text-base text-buttonBg rounded-xl md:text-lg lg:text-xl text-center outline-none "
            {...register("birthdate", {
              required: "Birthdate is required",
            })}
          />
          {errors.birthdate && (
            <p className="mt-1 text-sm text-red-600">{errors.birthdate.message}</p>
          )}
        </div>
        <div className="relative mt-5">
          <AuthButton type="submit" text="Continue" />
          <span className="absolute bottom-1.5 -right-5">
            <img src={heart} alt="" />
          </span>
        </div>
      </form>
    </div>
  );
};

export default SecondStep;
