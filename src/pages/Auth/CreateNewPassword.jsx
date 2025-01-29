import React from "react";
import { useForm } from "react-hook-form";
import AuthButton from "../../components/Common/AuthButton";
import logo from "../../assets/Images/LOGO.png";
import heart from "../../assets/Images/heart_icon.png";

const CreateNewPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      // Simulating an async operation
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Redirect to password reset success page
      // navigate("/passwordSetSuccessfully");
    } catch (error) {
      console.error(error);
      // Show an error toast or message
    }
  };

  const password = watch("password");

  return (
    <div>
      <div className="flex justify-center mb-3.5">
        <img src={logo} alt="Logo" className="w-24 h-24" />
      </div>
      <h2 className="text-[40px] text-buttonBg font-bold text-center font-Inria">
        Create New Password
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 mt-6 w-full"
      >
        {/* Password Requirements */}
        <div className="text-gray-700 text-sm space-y-3">
          <ul className="list-disc pl-6 text-[#9C6D36]">
            <li>Make your password at least 12 characters long</li>
            <li>Include at least one special character and number, like @, 1, $, or *</li>
            <li>Don’t use your nickname, initials, birthday, phone number, or street name</li>
          </ul>
        </div>

        {/* New Password */}
        <div className="w-full relative">
          <input
            type="password"
            className="shadow-sm bg-[#F4F3F1] rounded-xl placeholder-buttonBg border-gray-300 outline-none text-sm block w-full p-2.5"
            placeholder="Create new password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}/,
                message:
                  "Password must be 6-15 characters long, include at least one uppercase letter, one lowercase letter, and one number.",
              },
            })}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="w-full relative">
          <input
            type="password"
            className="shadow-sm bg-[#F4F3F1] rounded-xl placeholder-buttonBg border-gray-300 outline-none text-sm block w-full p-2.5"
            placeholder="Re-enter new password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="relative">
          <AuthButton text={"Submit"} />
          <span className="absolute bottom-1.5 -right-5">
            <img src={heart} alt="Heart Icon" />
          </span>
        </div>
      </form>
    </div>
  );
};

export default CreateNewPassword;
