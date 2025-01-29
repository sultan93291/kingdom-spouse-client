import React from "react";
import { FaCircleXmark } from "react-icons/fa6";

export default function Modal({
  visible,
  onClose,
  onInnerClick,
  children,
  className,
  closeBtn,
}) {
  return (
    visible && (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
        <div
          onclick={onInnerClick}
          className={`min-w-[550px] max-w-[70%] max-h-[80vh] bg-white p-10 rounded-[20px] overflow-y-scroll custom-scrollbar relative ${className}`}
        >
          {children}
          {closeBtn && (
            <span
              onClick={onClose}
              className="absolute top-3 right-3 cursor-pointer"
            >
              <FaCircleXmark className="text-primaryYellow text-3xl" />
            </span>
          )}
        </div>
        <div
          onClick={onClose}
          className="w-full h-full absolute top-0 left-0 bg-black/20 backdrop-blur-sm z-[-1]"
        ></div>
      </div>
    )
  );
}
