import React from "react";
import { useForm, Controller } from "react-hook-form"; // Import React Hook Form
import logo from "../../assets/Images/LOGO.png";
import PhoneInput from "react-phone-input-2";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import heart from "../../assets/Images/heart_icon.png";
import AuthButton from "../../components/Common/AuthButton";
import LoginWithSocialButon from "../../components/Common/LoginWithSocialButon";

const SignIn = () => {
  const {
    control, // For controlled components like PhoneInput
    handleSubmit, // To handle form submission
    formState: { errors }, // For error handling
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data); // Log the form data
  };

  return (
    <div>
      <div className="flex justify-center mb-3.5">
        <img src={logo} alt="Logo" className="w-24 h-24" />
      </div>
      <h2 className="text-[40px] text-buttonBg font-bold text-center mb-8 font-Inria">
        Sign in
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Phone Input Field */}
        <div className="mb-4">
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            rules={{
              required: "Phone number is required",
              validate: (value) =>
                value.length >= 10 || "Enter a valid phone number",
            }}
            render={({ field }) => (
              <PhoneInput
                {...field}
                country={"us"}
                inputStyle={{
                  backgroundColor: "#F4F3F1",
                  height:"46px",
                  borderRadius:"10px"

                }}
              />
            )}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Sign-In Button */}
        <div className="relative">
          <AuthButton text={"Sign in"} />
          <span className="absolute bottom-1.5 -right-5">
            <img src={heart} alt="" />
          </span>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-yellow-700"></div>
          <span className="mx-2 text-yellow-700 font-medium font-Inter">
            OR
          </span>
          <div className="flex-grow border-t border-yellow-700"></div>
        </div>

        {/* Social Buttons */}
        <div>
          <LoginWithSocialButon
            icon={<FaFacebook className="w-6 h-6 text-blue-600" />}
            text={"Sign in with Facebook"}
          />
        </div>
        <div>
          <LoginWithSocialButon
            icon={<FcGoogle className="w-6 h-6" />}
            text={"Sign in with Google"}
          />
        </div>

        {/* Sign-Up Link */}
        <p className="text-center text-sm font-Inter text-primaryYellow">
          Don’t have an account?
          <a href="#" className="text-buttonBg font-semibold hover:underline">
            Sign up, it’s free!
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
