
import { useForm } from "react-hook-form";
import logo from "../../assets/Images/LOGO.png";
import heart from "../../assets/Images/heart_icon.png";
import AuthButton from "../../components/Common/AuthButton";
const ForgotPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, },
      } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
      }
  return (
    <div >
          <div className="flex justify-center mb-3.5">
            <img src={logo} alt="Logo" className="w-24 h-24" />
          </div>
          <h2 className="text-[40px] text-buttonBg font-bold text-center mb-8 font-Inria">
          ForgotPassword
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full">
          <div>
            <p className=" text-center text-sm font-Inter text-primaryYellow">We will send you password reset OTP on given email address.</p>
          </div>
          
          <div>
              <input
              
                className="shadow-sm bg-[#F4F3F1] rounded-xl placeholder-buttonBg  border-gray-300 outline-none text-sm  block w-full p-2.5"
                placeholder="Enter Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
               {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
              
            </div>
         

           
          <div className="relative">
            <AuthButton  type="submit" text={"Send OTP"} />
            <span className="absolute bottom-1.5 -right-5">
              <img src={heart} alt="" />
            </span>
          </div>
          </form>
        </div>
  )
}

export default ForgotPassword
