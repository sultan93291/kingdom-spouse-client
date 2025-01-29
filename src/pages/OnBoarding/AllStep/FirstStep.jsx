import React from "react";
import { useForm } from "react-hook-form";
import AuthButton from "../../../components/Common/AuthButton";
import heart from "../../../assets/Images/heart_icon.png";

const FirstStep = ({ setStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Process the form data
    setStep(2); // Move to the next step
  };

  return (
    <div>
      <h1 className="text-[30px] text-buttonBg font-bold text-center font-Inria">
        What’s Your Name?
      </h1>
      <p className="text-center text-sm font-Inter text-primaryYellow py-5">
        Let&apos;s Get to Know Each Other
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="pb-5">
        <div>
          <input
            className="shadow-sm bg-[#F4F3F1] rounded-xl placeholder-buttonBg border-gray-300 outline-none text-sm block w-full p-2.5"
            placeholder="Enter Your Name"
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
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

export default FirstStep;
