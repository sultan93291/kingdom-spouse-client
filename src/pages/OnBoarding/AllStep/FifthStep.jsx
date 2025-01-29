import React from "react";
import { useForm } from "react-hook-form";
import AuthButton from "../../../components/Common/AuthButton";
import heart from "../../../assets/Images/heart_icon.png";

const FifthStep = ({ setStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Process the selected denomination
    setStep(6); // Move to the next step
  };

  return (
    <div>
      <h1 className="text-[30px] text-buttonBg font-bold text-center font-Inria">
        My Denomination is
      </h1>
      <p className="text-center text-sm font-Inter text-primaryYellow py-5">
        Select your denomination
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="pb-5 w-full mx-auto">
        <div>
          <select
            {...register("denomination", { required: "Please select a denomination" })}
            className="bg-gray-50 border border-buttonBg rounded-xl text-sm text-buttonBg outline-none px-2 w-full py-4"
          >
            <option value="">Denomination</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          {errors.denomination && (
            <p className="mt-1 text-sm text-red-600">{errors.denomination.message}</p>
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

export default FifthStep;
