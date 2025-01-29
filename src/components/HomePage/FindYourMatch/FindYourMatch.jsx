import Header from "../../Common/Header";
import menImg from "../../../assets/Images/men1.png";
import womenImg from "../../../assets/Images/women2.png";
import intrastedIc from "../../../assets/Images/intrestedIcon.svg";
import peopleImg1 from "../../../assets/Images/BLACKFEMALE 1.png";
import peopleImg2 from "../../../assets/Images/BLACKFEMALE 2.png";
import peopleImg3 from "../../../assets/Images/BLACKFEMALE 3.png";
import peopleImg4 from "../../../assets/Images/BLACKFEMALE 4.png";
import { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper modules
import { Autoplay } from "swiper/modules"; // Correct module imports

export default function FindYourMatch() {
  const [selected, setSelected] = useState(true);


    // Data Stractature
    const ProfileCard = [
      {
          id: crypto.randomUUID(),
          profileImg: peopleImg1,
          names: 'Christopher Austin',
          age: '24',
          intrested: [
              'Yoga',
              'Traveling',
              'Cooking',
              'Writing',
            ]
      },
      {
          id: crypto.randomUUID(),
          profileImg: peopleImg2,
          names: 'Christopher Austin',
          age: '24',
          intrested: [
              'Yoga',
              'Traveling',
              'Cooking',
              'Writing',
            ]
      },
      {
          id: crypto.randomUUID(),
          profileImg: peopleImg3,
          names: 'Christopher Austin',
          age: '24',
          intrested: [
              'Yoga',
              'Traveling',
              'Cooking',
              'Writing',
            ]
      },
      {
          id: crypto.randomUUID(),
          profileImg: peopleImg4,
          names: 'Christopher Austin',
          age: '24',
          intrested: [
              'Yoga',
              'Traveling',
              'Cooking',
              'Writing',
            ]
      },
      {
          id: crypto.randomUUID(),
          profileImg: peopleImg3,
          names: 'Christopher Austin',
          age: '24',
          intrested: [
              'Yoga',
              'Traveling',
              'Cooking',
              'Writing',
            ]
      },
      {
          id: crypto.randomUUID(),
          profileImg: peopleImg2,
          names: 'Christopher Austin',
          age: '24',
          intrested: [
              'Yoga',
              'Traveling',
              'Cooking',
              'Writing',
            ]
      },
      {
          id: crypto.randomUUID(),
          profileImg: peopleImg3,
          names: 'Christopher Austin',
          age: '24',
          intrested: [
              'Yoga',
              'Traveling',
              'Cooking',
              'Writing',
            ]
      },
      {
          id: crypto.randomUUID(),
          profileImg: peopleImg2,
          names: 'Christopher Austin',
          age: '24',
          intrested: [
              'Yoga',
              'Traveling',
              'Cooking',
              'Writing',
            ]
      },
  
    ];

  return (
    <section className="pb-[100px]">
      <div className="container mx-auto">
        <div className="text-center flex flex-col gap-5">
          <Header content="Find Your Match" color="#B27409" />
          <p className="text-[16px] text-[#795D2B]">
            Connect with like-minded individuals and start building meaningful
            relationships today.
          </p>
        </div>

        <div className="my-[80px] flex justify-center gap-[30px]">
          <div
            onClick={() => setSelected(true)}
            className="h-[150px] w-[150px] rounded-full relative"
          >
            <img
              className="w-full h-full rounded-full object-cover"
              src={womenImg}
              alt="not found"
            />
            <div
              className={`absolute h-[85%] w-[85%] rounded-full left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%] bg-overlyColour flex justify-center items-center cursor-pointer ${
                selected ? "activeGender" : ""
              }`}
            >
              <h6 className="text-[16px] text-primaryWhiteMain font-bold leading-[24px] capitalize">
                Women
              </h6>
            </div>
          </div>

          <div
            onClick={() => setSelected(false)}
            className="h-[150px] w-[150px] rounded-full relative"
          >
            <img
              className="w-full h-full rounded-full object-cover"
              src={menImg}
              alt="not found"
            />
            <div
              className={`absolute h-[85%] w-[85%] rounded-full left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%] bg-overlyColour flex justify-center items-center cursor-pointer ${
                selected ? "" : "activeGender"
              }`}
            >
              <h6 className="text-[16px] text-primaryWhiteMain font-bold leading-[24px] capitalize">
                man
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Swiper
          autoplay={{
            delay: 3000, // Set the autoplay delay in milliseconds
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1250: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]} // Use modules here
          className="mySwiper"
        >
            {ProfileCard.map((item)=>(
                <SwiperSlide
                    key={item.id}
                    style={{ borderRadius: "25px", backgroundColor: "#E8E5DF" }}
                >
                    <div className="w-full bg-primaryWhiteMain rounded-[25px] overflow-hidden">
                    <div className="h-[387px] w-[100%] relative">
                        <img
                        className="h-full w-full object-cover"
                        src={item.profileImg}
                        alt="not found"
                        />
                        <div className=" absolute left-0 top-0 h-full w-full bg-dual-black p-5 flex flex-col justify-between">
                        <div className="flex flex-col gap-3 items-end w-full">
                            <button className="h-[39px] w-[39px]">
                            <svg
                                className="h-full w-full"
                                xmlns="http://www.w3.org/2000/svg"
                                width="39"
                                height="40"
                                viewBox="0 0 39 40"
                                fill="none"
                            >
                                <path
                                d="M38.3897 18.3055L36.7821 16.4459C36.2801 15.8653 36.0717 15.0868 36.2164 14.3331L36.6794 11.9222C36.9145 10.698 36.2146 9.48696 35.0365 9.07946L32.7182 8.27767C31.9911 8.02614 31.4196 7.45473 31.1681 6.72748L30.3663 4.40926C29.9588 3.23116 28.7477 2.53125 27.5236 2.76631L25.1126 3.2293C24.3588 3.37405 23.5804 3.16562 22.9998 2.66361L21.1402 1.05594C20.1985 0.241769 18.802 0.241769 17.8603 1.05594L16.0007 2.6635C15.4201 3.16551 14.6416 3.37381 13.8879 3.22918L11.4769 2.76619C10.2527 2.53113 9.04164 3.23105 8.63415 4.40914L7.83236 6.72736C7.58083 7.4545 7.00942 8.02602 6.28216 8.27755L3.96395 9.07934C2.78585 9.48684 2.08594 10.6979 2.32099 11.922L2.78398 14.333C2.92873 15.0868 2.72031 15.8652 2.2183 16.4458L0.610631 18.3054C-0.203544 19.2471 -0.203544 20.6436 0.610631 21.5853L2.21818 23.4449C2.72019 24.0255 2.92862 24.804 2.78387 25.5577L2.32088 27.9687C2.08582 29.1929 2.78562 30.404 3.96383 30.8113L6.28205 31.6131C7.00919 31.8647 7.58071 32.4361 7.83224 33.1633L8.63403 35.4815C9.04153 36.6596 10.2526 37.3596 11.4767 37.1245L13.8877 36.6615C14.6414 36.5168 15.4199 36.7252 16.0005 37.2272L17.8601 38.8349C18.8018 39.649 20.1983 39.649 21.14 38.8349L22.9996 37.2273C23.5802 36.7253 24.3587 36.5169 25.1124 36.6616L27.5234 37.1246C28.7476 37.3597 29.9587 36.6599 30.3661 35.4817L31.1679 33.1634C31.4195 32.4363 31.9909 31.8648 32.7181 31.6133L35.0363 30.8115C36.2144 30.404 36.9144 29.1929 36.6793 27.9687L36.2163 25.5577C36.0716 24.8039 36.28 24.0255 36.782 23.4449L38.3897 21.5853C39.2038 20.6436 39.2038 19.2471 38.3897 18.3054V18.3055Z"
                                fill="url(#paint0_linear_2565_38598)"
                                />
                                <path
                                d="M17.1451 26.6422C16.6533 26.6422 16.1614 26.4546 15.7862 26.0794L10.9476 21.2408C10.1971 20.4903 10.1971 19.2735 10.9476 18.523C11.6981 17.7725 12.9149 17.7725 13.6654 18.523L17.1451 22.0028L25.335 13.8129C26.0855 13.0624 27.3023 13.0624 28.0528 13.8129C28.8033 14.5634 28.8033 15.7801 28.0528 16.5306L18.5041 26.0794C18.1288 26.4546 17.637 26.6422 17.1451 26.6422Z"
                                fill="white"
                                />
                                <defs>
                                <linearGradient
                                    id="paint0_linear_2565_38598"
                                    x1="1.06308e-07"
                                    y1="19.9454"
                                    x2="27.9933"
                                    y2="23.9829"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#F05A8E" />
                                    <stop offset="1" stopColor="#ED1C24" />
                                </linearGradient>
                                </defs>
                            </svg>
                            </button>

                            <button className="h-[39px] w-[39px]">
                            <img
                                className="h-full w-full"
                                src={intrastedIc}
                                alt="not found"
                            />
                            </button>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="py-[9px] px-[12px] bg-borderColourOne w-fit rounded-[60px] relative">
                            <h5 className="text-primaryWhiteMain text-[15px] font-medium leading-6 capitalize">
                                Online
                            </h5>
                            <div className="w-[15px] h-[15px] rounded-full bg-[#80CE00] border-[2px] border-primaryYellow absolute right-[-5px] top-[50%] translate-y-[-50%]"></div>
                            </div>

                            <div>
                            <div className="flex gap-[11px] items-center">
                                <svg
                                className="h-[22px] w-[22px]"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="23"
                                viewBox="0 0 25 23"
                                fill="none"
                                >
                                <path
                                    d="M2.22513 2.20316H22.4218C22.5446 2.20316 22.655 2.2538 22.7369 2.33287C22.8158 2.41506 22.8663 2.52569 22.8663 2.64878V20.2428C22.8663 20.3628 22.8158 20.4734 22.7369 20.5556C22.655 20.6378 22.5446 20.6884 22.4218 20.6884H2.22513C2.10235 20.6884 1.99201 20.6378 1.91003 20.5556C1.83116 20.4734 1.78065 20.3628 1.78065 20.2428V2.64878C1.78065 2.52569 1.83116 2.41506 1.91003 2.33287C1.99201 2.2538 2.10235 2.20316 2.22513 2.20316ZM22.4218 0.417969H2.22513C1.61358 0.417969 1.05564 0.667654 0.652347 1.07198C0.252158 1.4767 0 2.03255 0 2.64878V20.2428C0 20.8559 0.252158 21.4118 0.652347 21.8165C1.05564 22.2212 1.61358 22.4705 2.22513 22.4705H22.4218C23.0365 22.4705 23.5913 22.2208 23.9946 21.8165C24.3948 21.4122 24.647 20.8559 24.647 20.2428V2.64878C24.647 2.03255 24.3979 1.47631 23.9946 1.07198C23.5913 0.667654 23.0365 0.417969 22.4218 0.417969Z"
                                    fill="white"
                                />
                                <path
                                    d="M21.4385 19.7261C21.6968 19.7261 21.9082 19.5142 21.9082 19.2552V18.8473C21.9082 18.4208 21.8958 18.3324 21.7128 18.108L15.5417 10.455C15.4061 10.2875 15.2076 10.1897 14.9931 10.18C14.7786 10.1738 14.5739 10.2591 14.4258 10.4137L10.6975 14.3857L9.02366 12.9608L8.98287 12.9262C8.84727 12.8186 8.67709 12.7649 8.50691 12.7746C8.33363 12.784 8.17278 12.8537 8.05 12.9737L8.01231 13.0119L2.84638 18.4153C2.73603 18.5322 2.74225 18.51 2.74225 18.6966V19.2559C2.74225 19.515 2.95012 19.7269 3.20888 19.7269H21.4388L21.4385 19.7261Z"
                                    fill="white"
                                />
                                <path
                                    d="M8.73692 4.73576C8.27029 4.26794 7.62766 3.98047 6.9182 3.98047C6.20874 3.98047 5.56921 4.26794 5.10297 4.73576C4.63984 5.20007 4.34961 5.84473 4.34961 6.55601C4.34961 7.26728 4.63945 7.91155 5.10297 8.37937C5.5696 8.84369 6.20952 9.13154 6.9182 9.13154C7.62688 9.13154 8.27029 8.84407 8.73692 8.37937C9.20005 7.91155 9.49029 7.26728 9.49029 6.55601C9.49029 5.84473 9.20044 5.20046 8.73692 4.73576Z"
                                    fill="white"
                                />
                                <path
                                    d="M8.92546 4.5453C8.41182 4.03035 7.70275 3.71094 6.91791 3.71094C6.13308 3.71094 5.424 4.02996 4.91036 4.5453C4.39672 5.06025 4.07812 5.77464 4.07812 6.55797C4.07812 7.34131 4.39633 8.0557 4.91036 8.57065C5.424 9.0856 6.13657 9.40501 6.91791 9.40501C7.69925 9.40501 8.41182 9.08599 8.92546 8.57065C9.4391 8.0557 9.7577 7.34481 9.7577 6.55797C9.7577 5.77113 9.4426 5.06025 8.92546 4.5453Z"
                                    fill="white"
                                />
                                </svg>

                                <span className="text-[21px] font-medium leading-6 capitalize text-primaryWhiteMain">
                                33
                                </span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="py-10 px-4">
                        <h4 className="text-buttonBg text-[24px] font-bold leading-[24px] capitalize">
                        {item.names}, <span>{item.age}</span>{" "}
                        </h4>

                        <div className="mt-5 flex flex-wrap gap-[5px]">
                        {item.intrested.map((item,index)=>(
                        <div key={index} className="py-[10px] px-[14px] bg-[#E8E5DF] rounded-[32px] border border-[#E8E5DF] backdrop-blur-[12px] w-fit">
                            <h6 className="text-buttonBg text-[10px] font-normal">
                            {item}
                            </h6>
                        </div>
                        ))}
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}
