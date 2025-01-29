import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { set, useForm } from "react-hook-form";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import starBg from "../../assets/Images/starBtn.png";
import loveBg from "../../assets/Images/loveBtn.png";
import verifyLogo from "../../assets/Images/verify.png";
import sharedLogo from "../../assets/Images/share.png";
import smLogo from "../../assets/Images/small_star_btn.png";
import rightArrow from "../../assets/Images/right_arrow.png";
import badge from "../../assets/Images/badge.png";
import plusIcon from "../../assets/Images/plus_icon.png";
import p1 from "../../assets/Images/p1.png";
import p2 from "../../assets/Images/p2.png";
import p3 from "../../assets/Images/p3.png";
import p4 from "../../assets/Images/p4.png";
import AboutModal from "./AboutModal";

const Profile = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [formStep, setFormStep] = React.useState(1);
  const user = "basic";

  const [aboutModel, setAboutModel] = useState(false);
  const [compatibility, setCompatibility] = useState("1");
  // const [activeTab, setActiveTab] = useState(0);

  // Hook Form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setFormStep(2);
  };

  const handleAboutModelClick = () => {
    setAboutModel(true);
  };

  const toggleAccordion = (id) => {
    setCompatibility(compatibility === id ? null : id);
  };

  const accordionData = [
    { id: "1", title: "What does spiritual intimacy mean to you?" },
    { id: "2", title: "What role does faith play in your life?" },
    { id: "3", title: "How do you prefer to express your spirituality?" },
    { id: "4", title: "How can we support each other's spiritual growth?" },
    { id: "5", title: "What spiritual practices are most meaningful to you?" },
    { id: "6", title: "How do you feel when we pray together?" },
    {
      id: "7",
      title: "What spiritual goals do you have for our relationship?",
    },
    { id: "8", title: "How do you experience God's presence in your life?" },
  ];

  return (
    <section className="p-10">
      {/* Main Profile Section */}
      <div>
        {/* profile upper part */}
        <div className="bg-[#c69848] flex justify-center items-center gap-8 py-5">
          <p className="text-primaryWhiteMain text-lg">
            Oops! Looks like your profile isn’t complete yet.{" "}
          </p>
          <span className="bg-buttonBg rounded-full px-6 py-1 text-primaryWhiteMain shadow">
            20% complete
          </span>
          <button className="text-primaryWhiteMain text-lg underline">
            <Link to="">Click here</Link>
          </button>
        </div>
        {/* Edit profile part */}
        <div className="flex justify-between items-center mx-5 my-5">
          <h3 className="text-secondaryYellow font-semibold font-Inria text-3xl">
            My Profile
          </h3>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-primaryWhiteMain rounded-full font-medium px-6 py-3 text-secondaryYellow shadow-sm"
          >
            Edit Profile
          </button>
        </div>
        <div className="bg-[#d7c7a8] rounded-2xl mx-5">
          {/* Profile information part */}

          <div className="bg-primaryWhiteMain rounded-2xl py-5 shadow">
            <div className="px-5 grid grid-cols-12 items-center">
              <div className="space-y-8 col-span-6">
                <div className="border-b pb-4 border-primaryYellow flex justify-between items-center">
                  <p className="font-medium text-[#795D2B] text-lg">Name</p>
                  <h4 className="text-secondaryYellow font-Inria font-bold text-[1.3rem]">
                    Lindsey Walston
                  </h4>
                </div>
                <div className="border-b pb-4 border-primaryYellow flex justify-between items-center">
                  <p className="font-medium text-[#795D2B] text-lg">
                    Birthdate
                  </p>
                  <h4 className="text-secondaryYellow font-Inria font-bold text-[1.3rem]">
                    March 26, 1998
                  </h4>
                </div>
                <div className="pb-4 flex justify-between items-center">
                  <p className="font-medium text-[#795D2B] text-lg">Location</p>
                  <h4 className="text-secondaryYellow font-Inria font-bold text-[1.3rem]">
                    Manhattan St. Brooklyn, NY 11214
                  </h4>
                </div>
                {/* Conditional Btn */}
                {user === "basic" && (
                  <button className="bg-buttonBg W-full flex items-center gap-2 rounded-full w-full text-center justify-center py-3 text-primaryWhiteMain shadow font-medium">
                    <img src={verifyLogo} alt="logo" />
                    <span>Verify Pending</span>
                  </button>
                )}
                {(user === "pro" || user === "premium") && (
                  <button className="bg-buttonBg W-full flex items-center gap-2 rounded-full w-full text-center justify-center py-3 text-primaryWhiteMain shadow font-medium">
                    <img src={sharedLogo} alt="logo" />
                    <span>Share limelight on Social media</span>
                  </button>
                )}
              </div>
              <div className="col-span-2"></div>
              <div className="col-span-4 grid grid-cols-4 gap-3 grid-rows-[100px_100px_100px_100px]">
                <div className="rounded-2xl relative col-span-3 row-span-4 w-full">
                  {(user === "basic" || user === "pro") && (
                    <img
                      src={p1}
                      className="object-cover h-full w-full rounded-2xl"
                      alt="p1"
                    />
                  )}
                  {user === "premium" && (
                    <img
                      src={badge}
                      className="object-cover h-full w-full rounded-2xl"
                      alt="badge"
                    />
                  )}
                  {user === "pro" && (
                    <div className="inline-flex bg-buttonBg gap-2 items-center w-48 rounded-b-2xl text-center justify-center py-2 font-semibold absolute top-0 left-0 right-0 mx-auto">
                      <img src={smLogo} alt="logo" />
                      <span className="font-Inria text-primaryWhiteMain text-lg">
                        limelight
                      </span>
                    </div>
                  )}
                </div>
                <img
                  src={p2}
                  alt=""
                  className="rounded-xl w-full h-full object-cover"
                />
                <img
                  src={p3}
                  alt=""
                  className="rounded-xl w-full h-full object-cover"
                />
                <img
                  src={p4}
                  alt=""
                  className="rounded-xl w-full h-full object-cover"
                />
                <div className="bg-secondaryYellow flex justify-center items-center rounded-xl">
                  <img src={plusIcon} alt="icon" />
                </div>
              </div>
            </div>
          </div>

          {/* More views part */}
          {user === "basic" && (
            <div className="flex py-6 items-center justify-between ps-5 pe-9">
              <div className="flex items-center gap-3">
                <img src={starBg} alt="star" />
                <div className="">
                  <h4 className="text-secondaryYellow font-semibold font-Inria text-2xl">
                    Want more views?{" "}
                  </h4>
                  <p className="font-Inter text-sm font-medium text-[#795D2B]">
                    Be 7x more likely to get a reply
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <p className="text-[#795D2B] font-medium">
                  Don’t show me again
                </p>
                <div className="relative">
                  <button className="text-primaryWhiteMain font-Inter font-medium py-[10px] px-7 bg-buttonBg shadow-buttonSHadow rounded-xl">
                    Get Limelight
                  </button>
                  <img
                    className="absolute w-8 -right-3 top-0 bottom-0 m-auto"
                    src={loveBg}
                    alt="love"
                  />
                </div>
              </div>
            </div>
          )}

          {(user === "pro" || user === "premium") && (
            <div className="flex py-6 items-center justify-between ps-5 pe-9">
              <div className="flex items-center gap-3">
                <div className="border-r-2 pe-3 border-[#c69848]">
                  <h4 className="text-secondaryYellow font-semibold font-Inria text-2xl">
                    3 minutes
                  </h4>
                  <p className="font-Inter text-sm font-medium text-[#795D2B]">
                    Remaining
                  </p>
                </div>
                <div className="">
                  <h4 className="text-secondaryYellow font-semibold font-Inria text-2xl">
                    0
                  </h4>
                  <p className="font-Inter text-sm font-medium text-[#795D2B]">
                    Available boots
                  </p>
                </div>
              </div>
              <button className="bg-buttonBg rounded-full px-12 py-4 text-primaryWhiteMain font-medium flex gap-2 items-center shadow">
                <span>Limelight Info</span>
                <img src={rightArrow} alt="" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Edit Profile Modal Popup */}
      <Modal
        visible={openModal}
        onClose={() => setOpenModal(false)}
        onInnerClick={(e) => e.stopPropagation()}
        className={"w-[1000px]"}
      >
        {formStep === 1 && (
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Modal Header */}
            <div className="w-full flex justify-between items-center pb-5 border-b border-[#D5BB8F]/30">
              <h4 className="text-[#b27409] text-2xl font-bold font-Inria capitalize leading-normal">
                Edit Profile
              </h4>
              <div class="h-[51px] px-[34px] py-4 bg-[#b27409] rounded-[32px] border border-[#e6e7ec]/10 backdrop-blur-xl justify-center items-center gap-1.5 inline-flex">
                <input
                  type="submit"
                  className="text-white text-base font-medium font-Inter"
                />
              </div>
            </div>

            {/* Modal Body */}
            <div>
              <div className="flex flex-col">
                {/* Name Field */}
                <div className="w-full flex justify-between items-center border-b border-[#D5BB8F]/30 py-4">
                  <label
                    htmlFor="name"
                    className="opacity-80 text-[#b27409] text-sm font-normal font-Inter"
                  >
                    Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    placeholder="Lindsey Walston"
                    className="w-[300px] h-[45px] pl-5 pr-3.5 py-3.5 bg-[#e8e5df] rounded-xl border border-[#b27409] justify-start items-center gap-2 inline-flex overflow-hidden placeholder:opacity-80 placeholder:text-[#b27409] placeholder:text-sm placeholder:font-normal placeholder:font-Inria"
                  />
                </div>

                {/* Birthday Field */}
                <div className="w-full flex justify-between items-center border-b border-[#D5BB8F]/30 py-4">
                  <label
                    htmlFor="birthday"
                    className="opacity-80 text-[#b27409] text-sm font-normal font-Inter"
                  >
                    Birthday
                  </label>
                  <div className="flex gap-x-3 items-center">
                    <input
                      {...register("birthdayDate", { required: true })}
                      placeholder="DD"
                      className="w-[92px] h-[35px] bg-[#e8e5df] rounded-xl placeholder:opacity-80 placeholder:text-[#b27409] placeholder:text-sm placeholder:font-normal placeholder:font-Inria text-center"
                    />
                    <input
                      {...register("birthdayMonth", { required: true })}
                      placeholder="MM"
                      className="w-[92px] h-[35px] bg-[#e8e5df] rounded-xl placeholder:opacity-80 placeholder:text-[#b27409] placeholder:text-sm placeholder:font-normal placeholder:font-Inria text-center"
                    />
                    <input
                      {...register("birthdayYear", { required: true })}
                      placeholder="YY"
                      className="w-[92px] h-[35px] bg-[#e8e5df] rounded-xl placeholder:opacity-80 placeholder:text-[#b27409] placeholder:text-sm placeholder:font-normal placeholder:font-Inria text-center"
                    />
                  </div>
                </div>

                {/* Gender Field */}
                <div className="w-full flex justify-between items-center border-b border-[#D5BB8F]/30 py-4">
                  <label
                    htmlFor="gender"
                    className="opacity-80 text-[#b27409] text-sm font-normal font-Inter"
                  >
                    Gender
                  </label>
                  <select
                    {...register("gender", { required: true })}
                    name="gender"
                    id=""
                    className="w-[300px] h-[45px] pl-5 pr-3.5 bg-[#e8e5df] rounded-xl border border-[#b27409] justify-start items-center gap-2 inline-flex overflow-hidden opacity-80 text-[#b27409] text-sm font-normal font-Inria"
                  >
                    <option
                      value="male"
                      className="text-[#b27409] text-sm font-Inria"
                    >
                      Male
                    </option>
                    <option
                      value="female"
                      className="text-[#b27409] text-sm font-Inria"
                    >
                      Female
                    </option>
                  </select>
                </div>

                {/* About Me Field */}
                <div className="w-full flex justify-between items-center border-b border-[#D5BB8F]/30 py-4">
                  <label
                    htmlFor="aboutInfo"
                    className="opacity-80 text-[#b27409] text-sm font-normal font-Inter"
                  >
                    About me
                  </label>
                  <textarea
                    {...register("aboutInfo", { required: true })}
                    placeholder="Give us more details about me"
                    className="w-[600px] h-[100px] pl-5 pr-3.5 py-3.5 bg-[#e8e5df] rounded-xl justify-start items-center gap-2 inline-flex overflow-hidden placeholder:opacity-80 placeholder:text-[#795d2b] placeholder:text-sm placeholder:font-normal placeholder:font-Inter"
                  />
                </div>

                {/* My Denomination Field */}
                <div className="w-full flex justify-between items-center border-b border-[#D5BB8F]/30 py-4">
                  <label
                    htmlFor="denomination"
                    className="opacity-80 text-[#b27409] text-sm font-normal font-Inter"
                  >
                    Gender
                  </label>
                  <select
                    {...register("denomination", { required: true })}
                    name="denomination"
                    id=""
                    className="w-[300px] h-[45px] pl-5 pr-3.5 bg-[#e8e5df] rounded-xl border border-[#b27409] justify-start items-center gap-2 inline-flex overflow-hidden opacity-80 text-[#b27409] text-sm font-normal font-Inria"
                  >
                    <option
                      value="one"
                      className="text-[#b27409] text-sm font-Inria"
                    >
                      One
                    </option>
                    <option
                      value="two"
                      className="text-[#b27409] text-sm font-Inria"
                    >
                      Two
                    </option>
                  </select>
                </div>

                {/* Spiritual Compatibility Field */}
                <div className="w-full flex justify-between items-center border-b border-[#D5BB8F]/30 py-4">
                  <label
                    htmlFor="spiritual"
                    className="opacity-80 text-[#b27409] text-sm font-normal font-Inter"
                  >
                    Gender
                  </label>
                  <select
                    {...register("spiritual", { required: true })}
                    name="spiritual"
                    id=""
                    className="w-[300px] h-[45px] pl-5 pr-3.5 bg-[#e8e5df] rounded-xl border border-[#b27409] justify-start items-center gap-2 inline-flex overflow-hidden opacity-80 text-[#b27409] text-sm font-normal font-Inria"
                  >
                    <option
                      value="islam"
                      className="text-[#b27409] text-sm font-Inria"
                    >
                      Islam
                    </option>
                    <option
                      value="hindu"
                      className="text-[#b27409] text-sm font-Inria"
                    >
                      Hindu
                    </option>
                    <option
                      value="others"
                      className="text-[#b27409] text-sm font-Inria"
                    >
                      Other
                    </option>
                  </select>
                </div>

                {/* Education Field */}
                <div className="w-full flex justify-between items-center border-b border-[#D5BB8F]/30 py-4">
                  <label
                    htmlFor="education"
                    className="opacity-80 text-[#b27409] text-sm font-normal font-Inter"
                  >
                    Education
                  </label>
                  <input
                    {...register("education", { required: true })}
                    placeholder="BE, Computer Sceince"
                    className="w-[300px] h-[45px] pl-5 pr-3.5 py-3.5 bg-[#e8e5df] rounded-xl border border-[#b27409] justify-start items-center gap-2 inline-flex overflow-hidden placeholder:opacity-80 placeholder:text-[#b27409] placeholder:text-sm placeholder:font-normal placeholder:font-Inria"
                  />
                </div>

                {/* Hobby Field */}
                <div className="w-full flex justify-between items-center border-b border-[#D5BB8F]/30 py-4">
                  <label
                    htmlFor="hobby"
                    className="opacity-80 text-[#b27409] text-sm font-normal font-Inter"
                  >
                    Hobby
                  </label>
                  <input
                    {...register("hobby", { required: true })}
                    placeholder="Add hobby"
                    className="w-[300px] h-[45px] pl-5 pr-3.5 py-3.5 bg-[#e8e5df] rounded-xl border border-[#b27409] justify-start items-center gap-2 inline-flex overflow-hidden placeholder:opacity-80 placeholder:text-[#b27409] placeholder:text-sm placeholder:font-normal placeholder:font-Inria"
                  />
                </div>

                {/* Country Field */}
                <div className="w-full flex justify-between items-center border-b border-[#D5BB8F]/30 py-4">
                  <label
                    htmlFor="country"
                    className="opacity-80 text-[#b27409] text-sm font-normal font-Inter"
                  >
                    Country
                  </label>
                  <select
                    {...register("country", { required: true })}
                    name="country"
                    id=""
                    className="w-[300px] h-[45px] pl-5 pr-3.5 bg-[#e8e5df] rounded-xl border border-[#b27409] justify-start items-center gap-2 inline-flex overflow-hidden opacity-80 text-[#b27409] text-sm font-normal font-Inria"
                  >
                    <option
                      value="one"
                      className="text-[#b27409] text-sm font-Inria"
                    >
                      USA
                    </option>
                    <option
                      value="two"
                      className="text-[#b27409] text-sm font-Inria"
                    >
                      UK
                    </option>
                  </select>
                </div>

                {/* City Field */}
                <div className="w-full flex justify-between items-center py-4">
                  <label
                    htmlFor="city"
                    className="opacity-80 text-[#b27409] text-sm font-normal font-Inter"
                  >
                    City
                  </label>
                  <select
                    {...register("city", { required: true })}
                    name="city"
                    id=""
                    className="w-[300px] h-[45px] pl-5 pr-3.5 bg-[#e8e5df] rounded-xl border border-[#b27409] justify-start items-center gap-2 inline-flex overflow-hidden opacity-80 text-[#b27409] text-sm font-normal font-Inria"
                  >
                    <option
                      value="one"
                      className="text-[#b27409] text-sm font-Inria"
                    >
                      London
                    </option>
                    <option
                      value="two"
                      className="text-[#b27409] text-sm font-Inria"
                    >
                      Paris
                    </option>
                  </select>
                </div>

                {errors.name && <span>This field is required</span>}
              </div>
            </div>
          </form>
        )}
        {formStep === 2 && (
          <form>
            {/* Modal Header */}
            <div className="w-full flex justify-between items-center pb-5 border-b border-[#D5BB8F]/30">
              <div className="flex items-center gap-x-4">
                <span>
                  <FaCircleArrowLeft
                    onClick={() => setFormStep(1)}
                    className="text-[#b27409] text-4xl"
                  />
                </span>
                <h4 className="text-[#b27409] text-2xl font-bold font-Inria capitalize leading-normal">
                  Spiritual Compatibility
                </h4>
              </div>
              <div class="h-[51px] px-[34px] py-4 bg-[#b27409] rounded-[32px] border border-[#e6e7ec]/10 backdrop-blur-xl justify-center items-center gap-1.5 inline-flex">
                <button
                  type="submit"
                  className="text-white text-base font-medium font-Inter"
                >
                  Save
                </button>
              </div>
            </div>

            {/* SH STARTS */}
            <div>
              <div>
                <div className="flex flex-col gap-3">
                  {accordionData.map((item) => {
                    const iscompatibility = compatibility === item.id;
                    return (
                      <div
                        key={item.id}
                        className="border rounded-2xl border-[#b27409] overflow-hidden"
                      >
                        <button
                          id={`accordion-button-${item.id}`}
                          className="w-full flex justify-between items-center px-4 py-3 text-left"
                          onClick={() => toggleAccordion(item.id)}
                          aria-expanded={iscompatibility}
                          aria-controls={`accordion-content-${item.id}`}
                          role="button"
                          tabIndex={item.id - 1}
                          type="button"
                        >
                          <span className="text-[#b27409] text-sm font-normal font-['Inter']">
                            {item.title}
                          </span>
                          <svg
                            className={`w-5 h-5 transition-transform transform ${
                              iscompatibility ? "rotate-180" : "rotate-0"
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#b27409"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        <div
                          id={`accordion-content-${item.id}`}
                          className={`transition-[max-height] duration-300 overflow-hidden ${
                            iscompatibility
                              ? "max-h-screen opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                          aria-labelledby={`accordion-button-${item.id}`}
                        >
                          <textarea
                            className="w-full h-[100px] outline-none p-5 pt-0 placeholder:text-[#795d2b]"
                            name=""
                            placeholder="Answer here"
                            id=""
                          ></textarea>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* SH ENDS */}
          </form>
        )}
      </Modal>

      {/* ABout Modal Popup */}
      <AboutModal
        visiblity={aboutModel}
        onBgCLick={() => setAboutModel(false)}
      />
    </section>
  );
};

export default Profile;
