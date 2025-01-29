import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import leftLine from "../assets/Images/Left_Line.png";
import RightLine from "../assets/Images/Right_line.png";
import logo from "../assets/Images/LOGO.png";
import AuthButton from "../components/Common/AuthButton";
import { IoCheckmarkOutline } from "react-icons/io5";

import FirstStep from "../pages/OnBoarding/AllStep/FirstStep";
import SecondStep from "../pages/OnBoarding/AllStep/SecondStep";
import ThirdStep from "../pages/OnBoarding/AllStep/ThirdStep";
import FourthStep from "../pages/OnBoarding/AllStep/FourthStep";
import FifthStep from "../pages/OnBoarding/AllStep/FifthStep";
import SixthStep from "../pages/OnBoarding/AllStep/SixthStep";
import SeventhStep from "../pages/OnBoarding/AllStep/SeventhStep";
import EighthStep from "../pages/OnBoarding/AllStep/EighthStep";
import NinethStep from "../pages/OnBoarding/AllStep/NinethStep";
import Allset from "../pages/OnBoarding/AllStep/Allset";

const OnBordingLayout = () => {
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      component: <FirstStep setStep={setStep} />,
    },
    {
      step: 2,
      component: <SecondStep setStep={setStep} />,
    },
    {
      step: 3,
      component: <ThirdStep setStep={setStep} />,
    },
    {
      step: 4,
      component: <FourthStep setStep={setStep} />,
    },
    {
      step: 5,
      component: <FifthStep setStep={setStep} />,
    },
    {
      step: 6,
      component: <SixthStep setStep={setStep} />,
    },
    {
      step: 7,
      component: <SeventhStep setStep={setStep} />,
    },
    {
      step: 8,
      component: <EighthStep setStep={setStep} />,
    },
    {
      step: 9,
      component: <NinethStep setStep={setStep} />,
    },
    {
      step: 10,
      component: <Allset setStep={setStep} />,
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-5 mt-20 ">
        {step < steps.length && (
          <div className="flex items-center relative z-10 gap-8">
            {steps
              .slice(0, steps.length - 1)
              .map((s) =>
                s.step < step ? (
                  <AuthButton
                    key={s.step}
                    onClick={() => setStep(s.step)}
                    className={
                      " font-Inria py-4 bg-white px-[9px] rounded-full"
                    }
                    text={
                      <IoCheckmarkOutline className="font-normal text-buttonBg  inline-block text-[24px]" />
                    }
                  />
                ) : s.step === step ? (
                  <AuthButton
                    key={s.step}
                    onClick={() => setStep(s.step)}
                    className={
                      "px-3 font-Inria text-[24px] py-2.5  rounded-full"
                    }
                    text={s.step}
                  />
                ) : (
                  <AuthButton
                    key={s.step}
                    onClick={() => setStep(s.step)}
                    className={
                      " font-Inria py-3 text-[24px] bg-white px-[12px] rounded-full text-buttonBg"
                    }
                    text={s.step}
                  />
                )
              )}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-0.5 w-full bg-buttonBg -z-10" />
          </div>
        )}
        <div className="flex justify-center gap-4 my-10 items-center">
          <div>
            <img src={leftLine} alt="" />
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-white w-[480px] shadow-lg p-8 rounded-3xl">
              {steps.find((s) => s.step === step)?.component}
            </div>
          </div>
          <div>
            <img src={RightLine} alt="" />
          </div>
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
      </div>
    </>
  );
};

export default OnBordingLayout;
