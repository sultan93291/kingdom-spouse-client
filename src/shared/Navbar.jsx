import { Link } from "react-router-dom";
import Logo from "../assets/Images/LOGO.png";

export default function Navbar() {
  // Common Style Variable
  let NavText =
    "text-primaryYellow text-[16px] font-medium transition-all ease-linear duration-150 hover:text-[#B27409]";

  return (
    <nav className="py-[8px] px-[30px]">
      <div className="container mx-auto flex justify-between items-center shadow-custom bg-white  rounded-[22px]">
        <div className="w-[72px] h-[72px]">
          <Link to={"/"}>
            <img
              src={Logo}
              alt="not found"
              className="h-full w-full object-cover"
            />
          </Link>
        </div>

        <div className="flex gap-10 items-center">
          <div>
            <ul className="flex gap-x-[34px] items-center">
              <li>
                <Link className={NavText}>Home</Link>
              </li>
              <li>
                <Link className={NavText}>FAQ</Link>
              </li>
              <li>
                <Link className={NavText}>Help</Link>
              </li>
              <li>
                <Link className={NavText}>Contact us</Link>
              </li>
            </ul>
          </div>

          <div>
            <Link className="text-[#FFF] text-[16px] font-medium py-[14px] px-10 bg-buttonBg shadow-buttonSHadow rounded-[12px] relative">
              <span>Get Started</span>

              {/* <div className="w-[28px] h-[23px] absolute right-[-20px] top-[50%] translate-y-[-50%] ">
                <svg
                  className="w-full h-full object-cover"
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="34"
                  viewBox="0 0 36 34"
                  fill="none"
                >
                  <path
                    d="M18 30.3275L16.5862 28.9147L5.05019 17.3861C4.64529 17.0262 4.24942 16.5917 3.94911 16.2376C3.65666 15.8927 3.34014 15.4886 3.1723 15.2099L18 30.3275ZM18 30.3275L19.4138 28.9147M18 30.3275L19.4138 28.9147M19.4138 28.9147L30.9623 17.3736C31.3271 17.0387 31.7167 16.6123 32.0198 16.2599C32.3012 15.9326 32.6512 15.5036 32.8288 15.2081L32.8302 15.2057M19.4138 28.9147L32.8302 15.2057M32.8302 15.2057C33.5653 13.9791 34 12.5517 34 11.02C34 6.16853 29.7954 2.5 24.9454 2.5C22.2008 2.5 19.6803 3.66637 18 5.55684M32.8302 15.2057L18 5.55684M18 5.55684C16.3197 3.66637 13.7992 2.5 11.0546 2.5C6.20462 2.5 2 6.16853 2 11.02C2 12.5479 2.42951 13.9769 3.17174 15.209L18 5.55684Z"
                    fill="white"
                    stroke="#B27409"
                    strokeWidth="4"
                    
                  />
                </svg>
              </div> */}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
