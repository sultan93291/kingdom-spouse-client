
import { useForm, Controller } from "react-hook-form";
import logo from "../../assets/Images/LOGO.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import heart from "../../assets/Images/heart_icon.png";
import AuthButton from "../../components/Common/AuthButton";
import LoginWithSocialButon from "../../components/Common/LoginWithSocialButon";
import OtpInput from "react-otp-input";

const EnterOTP = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted OTP:", data.otp);
  };

  return (
    <div>
      <div className="flex justify-center mb-3.5">
        <img src={logo} alt="Logo" className="w-24 h-24" />
      </div>
      <h2 className="text-[40px] text-buttonBg font-bold text-center mb-4 font-Inria">
        Enter OTP
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Responsive OTP Input */}
          <p className="text-center text-sm font-Inter text-primaryYellow">You can resend OPT in 26s. Resend</p>
        <div className="flex justify-center ">
          <Controller
            name="otp"
            control={control}
            defaultValue=""
            rules={{
              required: "OTP is required",
              minLength: {
                value: 5,
                message: "OTP must be 5 digits long",
              },
            }}
            render={({ field }) => (
              <OtpInput
                value={field.value}
                onChange={field.onChange}
                numInputs={5}
                renderInput={(props, index) => (
                  <input
                    {...props}
                    className="border bg-[#F4F3F1] rounded-xl xs:min-h-[45px] xs:min-w-[45px] min-h-[40px] min-w-[40px] text-base md:text-lg lg:text-xl text-center outline-none transition-all duration-300"
                    style={{
                      borderColor: props.value ? "#B27409" : "#d1d5db",
                      width: "calc(6vw)",
                      height: "calc(6vw)",
                      maxWidth: "58px",
                      maxHeight: "52px",
                      margin: "5px",
                    }}
                  />
                )}
              />
            )}
          />
        </div>
        {errors.otp && (
          <p className="text-red-500 mt-0 pt-0 text-sm text-center">{errors.otp.message}</p>
        )}

        {/* Continue Button */}
        <div className="relative">
          <AuthButton text={"Continue"} type="submit" />
          <span className="absolute bottom-1.5 -right-5">
            <img src={heart} alt="" />
          </span>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-yellow-700"></div>
          <span className="mx-2 text-yellow-700 font-medium font-Inter">OR</span>
          <div className="flex-grow border-t border-yellow-700"></div>
        </div>

        {/* Social Login Buttons */}
        <div>
          <LoginWithSocialButon
            icon={<FaFacebook className="w-6 h-6 text-blue-600" />}
            text={"Sign in with Google"}
          />
        </div>
        <div>
          <LoginWithSocialButon
            icon={<FcGoogle className="w-6 h-6" />}
            text={"Sign in with Facebook"}
          />
        </div>

        {/* Sign Up Link */}
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

export default EnterOTP;
