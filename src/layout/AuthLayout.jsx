import "react-phone-input-2/lib/style.css";
import leftLine from "../assets/Images/Left_Line.png";
import RightLine from "../assets/Images/Right_line.png";
import { Outlet } from "react-router-dom";


const AuthLayout = () => {
  return (
    <>
   
       <div className="flex justify-center gap-4 items-center">
      <div>
        <img src={leftLine} alt="" />
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white shadow-lg w-96 p-8 rounded-3xl">
       
       <Outlet />
        </div>
      </div>
      <div>
        <img src={RightLine} alt="" />
      </div>
    </div></>
 
  );
};

export default AuthLayout;

