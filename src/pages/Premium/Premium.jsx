import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";

const Premium = () => {
  const [selectedPlan, setSelectedPlan] = useState("Premium");
  const [selectedPrice, setSelectedPrice] = useState(2);

  const checkMarkSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      viewBox="0 0 30 30"
      fill="none"
    >
      <circle cx="14.9996" cy="15.0039" r="8.75" fill="white" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.9996 2.50391C8.09601 2.50391 2.49957 8.10035 2.49957 15.0039C2.49957 21.9075 8.09601 27.5039 14.9996 27.5039C21.9031 27.5039 27.4996 21.9075 27.4996 15.0039C27.4996 8.10035 21.9031 2.50391 14.9996 2.50391ZM19.4752 12.4726C19.803 12.0718 19.744 11.4812 19.3432 11.1533C18.9425 10.8255 18.3519 10.8845 18.024 11.2852L13.055 17.3585L11.2875 15.591C10.9214 15.2249 10.3278 15.2249 9.96166 15.591C9.59555 15.9571 9.59555 16.5507 9.96166 16.9168L12.4617 19.4168C12.649 19.6041 12.9067 19.7034 13.1713 19.6902C13.4358 19.6771 13.6824 19.5526 13.8502 19.3476L19.4752 12.4726Z"
        fill="#C69848"
      />
    </svg>
  );

  return (
    <section className="p-5">
      <div className="mb-5">
        <h1 className="text-[#b27409] text-3xl font-bold leading-[46px] font-Inria">
          Plan Upgrade
        </h1>
      </div>

      <div className="w-full p-[30px] bg-white rounded-[22px] shadow-[inset_2px_4px_16px_0px_rgba(248,248,248,0.04)] border border-[#e6e7ec]/0 backdrop-blur-[1px] flex-col justify-start items-start gap-10 inline-flex overflow-hidden">
        {/* Plan Selection Box */}
        <div className="px-2.5 py-2 bg-white/5 rounded-full border border-[#b27409] justify-start items-start gap-[15px] inline-flex">
          <div
            onClick={() => setSelectedPlan("Premium")}
            className={`px-6 py-2.5 rounded-[32px] shadow-[inset_2px_4px_16px_0px_rgba(248,248,248,0.06)] border border-[#e6e7ec]/10 backdrop-blur-xl justify-center items-center gap-1.5 flex cursor-pointer ${
              selectedPlan === "Premium" ? "bg-[#b27409]" : "bg-white"
            }`}
          >
            <div
              className={`text-base font-medium ${
                selectedPlan === "Premium" ? "text-white" : "text-[#b27409]"
              }`}
            >
              Premium
            </div>
          </div>
          <div
            onClick={() => setSelectedPlan("Basic")}
            className={`px-6 py-2.5 rounded-[32px] shadow-[inset_2px_4px_16px_0px_rgba(248,248,248,0.06)] border border-[#e6e7ec]/10 backdrop-blur-xl justify-center items-center gap-1.5 flex cursor-pointer ${
              selectedPlan === "Basic" ? "bg-[#b27409]" : "bg-white"
            }`}
          >
            <div
              className={`text-base font-medium ${
                selectedPlan === "Basic" ? "text-white" : "text-[#b27409]"
              }`}
            >
              Basic
            </div>
          </div>
        </div>

        <div className="self-stretch h-[102px] flex-col justify-center items-start gap-5 flex">
          <div className="text-[#b27409] text-2xl font-bold font-Inria capitalize leading-normal">
            Do more with Premium
          </div>

          {/* Features Bullet Points */}
          <ul className="flex flex-wrap gap-y-5 w-full">
            <li className="w-1/4 text-[#795d2b] text-base font-normal font-Inter flex items-center gap-x-[10px]">
              <span>
                <FaCircleCheck className="text-[#0CA151]" />
              </span>{" "}
              View photos
            </li>
            <li className="w-1/4 text-[#795d2b] text-base font-normal font-Inter flex items-center gap-x-[10px]">
              <span>
                <FaCircleCheck className="text-[#0CA151]" />
              </span>{" "}
              Messaging
            </li>
            <li className="w-1/4 text-[#795d2b] text-base font-normal font-Inter flex items-center gap-x-[10px]">
              <span>
                <FaCircleCheck className="text-[#0CA151]" />
              </span>{" "}
              Receive notification
            </li>
            <li className="w-1/4 text-[#795d2b] text-base font-normal font-Inter flex items-center gap-x-[10px]">
              <span>
                <FaCircleCheck className="text-[#0CA151]" />
              </span>{" "}
              Who liked you
            </li>
            <li className="w-1/4 text-[#795d2b] text-base font-normal font-Inter flex items-center gap-x-[10px]">
              <span>
                <FaCircleCheck className="text-[#0CA151]" />
              </span>{" "}
              Profile visibility
            </li>
            <li className="w-1/4 text-[#795d2b] text-base font-normal font-Inter flex items-center gap-x-[10px]">
              <span>
                <FaCircleCheck className="text-[#0CA151]" />
              </span>{" "}
              Private browsing mode
            </li>
          </ul>
        </div>

        {/* Price Box */}
        <div className="flex self-stretch justify-start items-start gap-6">
          <div
            onClick={() => setSelectedPrice(1)}
            className={`grow shrink basis-0 p-6 bg-[#d7c7a7]/30 rounded-xl border border-[#e6e7ec]/10 flex-col justify-start items-start flex relative z-1 ${
              selectedPrice === 1 && "border-[#C69848]"
            }`}
          >
            <div className="text-[#795d2b] text-base font-normal font-Inter">
              6 months
            </div>
            <div>
              <span class="text-[#b27409] text-3xl font-bold font-Inria leading-[46px]">
                $19
              </span>
              <span class="text-[#b27409] text-base font-bold font-Inria capitalize leading-normal">
                .99{" "}
              </span>
              <span class="text-[#b27409] text-base font-normal font-Inter">
                / month
              </span>
            </div>
            {selectedPrice === 1 && (
              <div className="absolute top-[-18px] right-6 z-[2]">
                {checkMarkSvg}
              </div>
            )}
          </div>
          <div
            onClick={() => setSelectedPrice(2)}
            className={`grow shrink basis-0 p-6 bg-[#d7c7a7]/30 rounded-xl border border-[#e6e7ec]/10 flex-col justify-start items-start flex relative z-1 ${
              selectedPrice === 2 && "border-[#C69848]"
            }`}
          >
            <div className="text-[#795d2b] text-base font-normal font-Inter">
              6 months
            </div>
            <div>
              <span class="text-[#b27409] text-3xl font-bold font-Inria leading-[46px]">
                $19
              </span>
              <span class="text-[#b27409] text-base font-bold font-Inria capitalize leading-normal">
                .99{" "}
              </span>
              <span class="text-[#b27409] text-base font-normal font-Inter">
                / month
              </span>
            </div>
            {selectedPrice === 2 && (
              <div className="absolute top-[-18px] right-3 z-[2]">
                {checkMarkSvg}
              </div>
            )}
          </div>
          <div
            onClick={() => setSelectedPrice(3)}
            className={`grow shrink basis-0 p-6 bg-[#d7c7a7]/30 rounded-xl border border-[#e6e7ec]/10 flex-col justify-start items-start flex relative z-1 ${
              selectedPrice === 3 && "border-[#C69848]"
            }`}
          >
            <div className="text-[#795d2b] text-base font-normal font-Inter">
              6 months
            </div>
            <div>
              <span class="text-[#b27409] text-3xl font-bold font-Inria leading-[46px]">
                $19
              </span>
              <span class="text-[#b27409] text-base font-bold font-Inria capitalize leading-normal">
                .99{" "}
              </span>
              <span class="text-[#b27409] text-base font-normal font-Inter">
                / month
              </span>
            </div>
            {selectedPrice === 3 && (
              <div className="absolute top-[-18px] right-6 z-[2]">
                {checkMarkSvg}
              </div>
            )}
          </div>
        </div>

        <div className="w-full">
          <button
            type="button"
            className="text-white text-base font-medium w-full h-[46px] relative bg-[#b27409] rounded-xl shadow-[inset_-5px_5px_5px_0px_rgba(255,255,255,0.74)] border-2 border-[#c69748]"
          >
            Get Premium
          </button>
        </div>
      </div>
    </section>
  );
};

export default Premium;
