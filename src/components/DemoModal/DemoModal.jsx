// notes this is just a demo file if anyone have any confusion about the modal please see the template

import React, { useEffect, useRef } from "react";

const DemoModal = ({ isOpen, setIsOpen, onClose }) => {
  // using ref to detect outside click
  const modalRef = useRef(null);

  // this function gonna call the parent handleClose and it will closes the modal
  const closeModal = () => {
    setIsOpen(false);
    if (onClose) {
      onClose(); // Notify parent that modal is closed
    }
  };

  // Close modal on outside click

  // don't worry about that if you don't understand this just replace modalRef with your defined ref like we are using modalRef you can useDemoRef
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
            // ensure the reference here
            ref={modalRef}
            className="bg-white w-[307px] rounded-[22px] h-[307px] shadow-customeShadow p-[15px] mt-[80px]  mr-[20px] flex flex-col gap-y-5 "
          ></div>
        </div>
      )}
    </div>
  );
};

export default DemoModal;

// this is the parent component where you are gonna call the modal if you have multiple modal in one page please make sure you have multiple sate and and handle close functions to close them

const parentComponet = () => {
  // state for the modal open or close
  const [demoModalOpen, setdemoModalOpen] = useState(false);

  // handle close function for closing the button
  const handleModalClose = () => {
    setdemoModalOpen(false);
  };

  return (
    <>
      {/* pass the info we are using isOpen to notify the modal should the modal open or close . and the onClose this is the gonna call from the modal and notify the parent that the modal is close now if someone close the modal  */}
      <DemoModal
        isOpen={demoModalOpen}
        setIsOpen={setdemoModalOpen}
        onClose={handleModalClose}
      />
      <div>
        {/* rest of your code  */}

        {/* please make sure a trigger . where you are using the modal */}
        <button
          onClick={() => {
            setdemoModalOpen(true);
          }}
        >
          open modal
        </button>
      </div>
    </>
  );
};

// thanks all if you have any questions of confusion please let me know ,
// feel free to knock me
