import Header from "../../Common/Header";
import PhoneBg from "../../../assets/Images/PhoneBg.png";
import ConnectHeartss from "../../../assets/Images/connectHeartsImg.png";
import ConnectBg from '../../../assets/Images/SecBg3.png'

export default function ConnectHearts() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-[666px] mx-auto flex flex-col gap-[20px]">
          <Header
            content="Connecting Hearts, One Swipe at a Time"
            color="#b27409"
          />

          <p className="text-center text-[#795c2b] text-base font-normal">
            Experience effortless connections and find your perfect match with
            every swipe. Love is just a tap away.
          </p>
        </div>

        <div className="mt-[45px] flex gap-[30px] justify-center relative z-20">
          <div className="flex gap-5 items-end">
            <div className="pb-[37px] rounded-[32px] w-[312px] h-[295px]  mb-[80px] shadow-footerShadow bg-primaryWhiteMain overflow-hidden relative">
              <div className=" absolute top-[-168px] ">
                <img
                  className="w-[423px] h-[350px]"
                  src={ConnectHeartss}
                  alt="not found"
                />
              </div>

              <div className="absolute bottom-[27px] left-[50%] translate-x-[-50%]">
                <h4 className="text-[#B27409] font-bold text-2xl ">
                  Limelight
                </h4>
              </div>
            </div>

            <div className="w-[535px] h-[778px]">
              <img src={PhoneBg} alt="not found" className="w-full h-full" />
            </div>
          </div>

          <div className="pb-[37px] mt-6 rounded-[32px] w-[312px] h-[295px]  mb-[80px] shadow-footerShadow bg-primaryWhiteMain overflow-hidden relative">
            <div className="ballons"></div>
              <div className="w-[120px] h-[120px] mx-auto absolute top-[55px] left-[50%] translate-x-[-50%]">
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  width="121"
                  height="120"
                  viewBox="0 0 121 120"
                  fill="none"
                >
                  <path
                    d="M88.2465 32.1953H32.6367V87.8051H88.2465V32.1953Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M48.2358 18.4845C54.2179 10.1093 66.6654 10.1093 72.6479 18.4845L73.6004 19.8179C74.6529 21.2919 76.4209 22.0811 78.2209 21.8811L82.4659 21.4094C92.0199 20.3479 100.092 28.4205 99.0309 37.9742L98.5594 42.2193C98.3594 44.0195 99.1484 45.7872 100.622 46.8401L101.956 47.7925C110.331 53.7745 110.331 66.222 101.956 72.2045L100.622 73.157C99.1484 74.2095 98.3594 75.9775 98.5594 77.7775L99.0309 82.0225C100.092 91.5765 92.0199 99.649 82.4659 98.5875L78.2209 98.116C76.4209 97.916 74.6529 98.705 73.6004 100.179L72.6479 101.513C66.6654 109.888 54.2184 109.888 48.2358 101.513L47.2834 100.179C46.2306 98.705 44.4629 97.916 42.6626 98.116L38.4175 98.5875C28.8638 99.649 20.7913 91.5765 21.8528 82.0225L22.3245 77.7775C22.5245 75.9775 21.7352 74.2095 20.2612 73.157L18.9279 72.2045C10.5527 66.222 10.5527 53.775 18.9279 47.7925L20.2612 46.8401C21.7352 45.7872 22.5245 44.0195 22.3245 42.2192L21.8528 37.9742C20.7913 28.4205 28.8638 20.3479 38.4175 21.4094L42.6626 21.8811C44.4629 22.0811 46.2306 21.2919 47.2834 19.8179L48.2358 18.4845ZM78.9774 46.463C80.9299 48.4156 80.9299 51.5815 78.9774 53.534L59.8829 72.6285C57.4304 75.0815 53.4534 75.0815 51.0009 72.6285L41.9063 63.534C39.9537 61.5815 39.9537 58.4155 41.9063 56.463C43.859 54.5105 47.0248 54.5105 48.9774 56.463L55.4419 62.9275L71.9064 46.463C73.8589 44.5104 77.0249 44.5104 78.9774 46.463Z"
                    fill="url(#paint0_linear_2565_37740)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2565_37740"
                      x1="12.6465"
                      y1="12.2031"
                      x2="127.418"
                      y2="31.0947"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#B27409" />
                      <stop offset="1" stopColor="#F49F0D" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="absolute bottom-[27px] left-[50%] translate-x-[-50%]">
                <h4 className="text-[#B27409] font-bold text-2xl ">
                  Limelight
                </h4>
              </div>
          </div>
        </div>
      </div>

      <div className=" absolute bottom-0 w-full z-10 ">
        <img className="w-full h-[443px]" src={ConnectBg} alt="not found" />
      </div>
    </section>
  );
}
