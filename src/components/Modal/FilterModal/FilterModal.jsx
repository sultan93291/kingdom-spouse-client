import React, { useEffect, useRef, useState } from "react";

const FilterModal = ({ isOpen, setIsOpen, onClose }) => {
  const modalRef = useRef(null);
  const [activeGender, setactiveGender] = useState("male");
  // Function to close the modal and notify the parent
const [ageValue, setAgeValue] = useState(18); // Initial age value
const [distanceValue, setDistanceValue] = useState(50);

  const closeModal = () => {
    setIsOpen(false);
    if (onClose) {
      onClose(); // Notify parent that modal is closed
    }
  };

  // Close modal on outside click
  useEffect(() => {
    const handleOutsideClick = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex justify-end items-start z-50">
          <div
            ref={modalRef}
            className="bg-white w-[307px] rounded-[22px] h-auto shadow-customeShadow p-[15px] mt-[80px]  mr-[20px] flex flex-col gap-y-5 "
          >
            <div className="flex flex-col gap-y-[10px] ">
              <h4 className="text-[14px] font-normal font-Inter text-[#795D2B]  ">
                I’m interest in
              </h4>
              <div className="w-[277px] h-[39px] bg-[#E8E5DF] rounded-[36px] flex flex-row   ">
                <button
                  onClick={() => {
                    setactiveGender("male");
                  }}
                  className={`w-[148px] h-[39px] ease-in-out duration-300  rounded-[20px] ${
                    activeGender === "male"
                      ? "bg-[#B27409] text-white "
                      : "bg-transparent text-[#B27409] "
                  } `}
                >
                  Male
                </button>
                <button
                  onClick={() => {
                    setactiveGender("female");
                  }}
                  className={`w-[148px] h-[39px] ease-in-out duration-300  rounded-[20px] ${
                    activeGender === "female"
                      ? "bg-[#B27409] text-white "
                      : "bg-transparent text-[#B27409] "
                  } `}
                >
                  Female
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-y-2 ">
              <div className="flex flex-col gap-y-4">
                {/* Age Range Slider */}
                <div className="flex flex-col gap-y-[5px]">
                  <div className="flex flex-col gap-y-3">
                    <h4 className="text-[#795D2B] text-[14px] font-normal font-Inter mb-3">
                      Age Range
                    </h4>
                    <div className="relative w-full">
                      <input
                        type="range"
                        min="18"
                        max="60"
                        value={ageValue}
                        onChange={e => setAgeValue(e.target.value)}
                        className="w-full h-2 rounded-lg bg-[#e0c29b] accent-[#795D2B] appearance-none focus:outline-none"
                        id="ageRange"
                      />
                      {/* Range Background */}
                      <div className="absolute left-0 right-0 top-[-20px] flex justify-between">
                        <span className="text-[#795D2B] text-sm">18</span>
                        <span className="text-[#795D2B] text-sm">60</span>
                      </div>
                    </div>
                  </div>
                  {/* Display Age Value */}
                  <div className="text-[#795D2B] text-sm ">
                    Selected Age: {ageValue}
                  </div>
                </div>

                {/* Distance (km) Slider */}
                <div>
                  <div className="flex flex-col gap-y-3">
                    <h4 className="text-[#795D2B] text-[14px] font-normal font-Inter mb-3">
                      Distance (km)
                    </h4>
                    <div className="relative w-full">
                      <input
                        type="range"
                        min="50"
                        max="500"
                        value={distanceValue}
                        onChange={e => setDistanceValue(e.target.value)}
                        className="w-full h-2 rounded-lg bg-[#e0c29b] accent-[#795D2B] appearance-none focus:outline-none"
                        id="distanceRange"
                      />
                      {/* Range Background */}
                      <div className="absolute left-0 right-0 top-[-20px] flex justify-between">
                        <span className="text-[#795D2B] text-sm">50</span>
                        <span className="text-[#795D2B] text-sm">500</span>
                      </div>
                    </div>
                  </div>
                  {/* Display Distance Value */}
                  <div className="text-[#795D2B] text-sm ">
                    Selected Distance: {distanceValue} km
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterModal;
