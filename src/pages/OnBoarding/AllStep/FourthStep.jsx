import React from "react";
import { useForm } from "react-hook-form";
import AuthButton from "../../../components/Common/AuthButton";
import heart from "../../../assets/Images/heart_icon.png";

const FourthStep = ({ setStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Process the selected option (seeking for male/female)
    setStep(5); // Move to the next step
  };

  return (
    <div>
      <h1 className="text-[30px] text-buttonBg font-bold text-center font-Inria">
        I’m Seeking For
      </h1>
      <p className="text-center text-sm font-Inter text-primaryYellow py-5">
        Who do you want to be your partner?
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="pb-5">
        <div className="flex justify-between gap-4">
          {/* Male Option */}
          <div className="flex items-center w-full ps-4 border border-buttonBg rounded-xl">
            <input
              id="male"
              type="radio"
              value="Male"
              {...register("seekingFor", { required: "Please select an option" })}
              className="appearance-none w-4 h-4 border-2 border-buttonBg rounded-full checked:bg-buttonBg checked:border-buttonBg focus:outline-none"
            />
            <label
              htmlFor="male"
              className="w-full py-2 ms-2 text-buttonBg font-semibold"
            >
              Male
            </label>
          </div>

          {/* Female Option */}
          <div className="flex items-center w-full ps-4 border border-buttonBg rounded-xl">
            <input
              id="female"
              type="radio"
              value="Female"
              {...register("seekingFor", { required: "Please select an option" })}
              className="appearance-none w-4 h-4 border-2 border-buttonBg rounded-full checked:bg-buttonBg checked:border-buttonBg focus:outline-none"
            />
            <label
              htmlFor="female"
              className="w-full py-2 ms-2 text-buttonBg font-semibold"
            >
              Female
            </label>
          </div>
        </div>
        {errors.seekingFor && (
          <p className="mt-1 text-sm text-red-600">{errors.seekingFor.message}</p>
        )}

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

export default FourthStep;
