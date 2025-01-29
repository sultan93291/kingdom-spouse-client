import React from "react";
import { useForm } from "react-hook-form";
import AuthButton from "../../../components/Common/AuthButton";
import heart from "../../../assets/Images/heart_icon.png";
import FeaturedImage from "../../../assets/Images/FeaturedImage.png";

const SeventhStep = ({ setStep }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const uploadedFiles = watch("uploadedFiles") || [];

  const onSubmit = (data) => {
    console.log("Uploaded Files:", data.uploadedFiles);
    setStep(8);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setValue("uploadedFiles", [...uploadedFiles, ...files]);
  };

  return (
    <div>
      <h1 className="text-[30px] text-buttonBg font-bold text-center font-Inria">
        Show Real You
      </h1>
      <p className="text-center text-sm font-Inter text-primaryYellow py-5">
        Add your good moment photo.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="pb-5">
        <div>
          <label
            htmlFor="uploadFile1"
            className="bg-[#F4F3F1] text-center rounded-2xl w-full min-h-[180px] flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 mx-auto font-[sans-serif]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 mb-3 fill-gray-400"
              viewBox="0 0 24 24"
            >
              <path
                d="M22 13a1 1 0 0 0-1 1v4.213A2.79 2.79 0 0 1 18.213 21H5.787A2.79 2.79 0 0 1 3 18.213V14a1 1 0 0 0-2 0v4.213A4.792 4.792 0 0 0 5.787 23h12.426A4.792 4.792 0 0 0 23 18.213V14a1 1 0 0 0-1-1Z"
                data-original="#000000"
              />
              <path
                d="M6.707 8.707 11 4.414V17a1 1 0 0 0 2 0V4.414l4.293 4.293a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414Z"
                data-original="#000000"
              />
            </svg>
            <p className="text-gray-400 font-semibold text-sm">
              Drag &amp; Drop or{" "}
              <span className="text-[#007bff]">Choose file</span> to upload
            </p>
            <input
              type="file"
              id="uploadFile1"
              className="hidden"
              accept=".png,.jpg,.jpeg,.svg,.webp,.gif"
              multiple
              {...register("uploadedFiles", {
                onChange: handleFileChange,
              })}
            />
            <p className="text-xs text-gray-400 mt-2">
              PNG, JPG, SVG, WEBP, and GIF are Allowed.
            </p>
          </label>
          {errors.uploadedFiles && (
            <p className="text-red-600 text-sm mt-2">
              {errors.uploadedFiles.message}
            </p>
          )}

          {/* Preview Images */}
          <div className="flex gap-2 items-center mt-4">
            {uploadedFiles.map((file, index) => (
              <img
                key={index}
                src={URL.createObjectURL(file)}
                alt="Preview"
                className="w-20 h-20 object-cover rounded"
              />
            ))}
          </div>
        </div>

        <div className="relative mt-5">
          <AuthButton type="submit" text="Continue" />
          <span className="absolute bottom-1.5 -right-5">
            <img src={heart} alt="" />
          </span>
        </div>
      </form>
    </div>
  );
};

export default SeventhStep;
