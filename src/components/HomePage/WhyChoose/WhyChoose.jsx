import Header from "../../Common/Header";
import spouseImg1 from "../../../assets/Images/ChooseKingdomItem1.png";
import spouseImg2 from "../../../assets/Images/ChooseKingdomItem2.png";
import spouseImg3 from "../../../assets/Images/ChooseKingdomItem3.png";
import spouseImg4 from "../../../assets/Images/ChooseKingdomItem4.png";

export default function WhyChoose() {
  return (
    <section className="px-[30px] pb-[100px]">
      <div className="container mx-auto shadow-footerShadow bg-[#B27409] rounded-[22px]">
        <div className="py-20 px-[150px]">
          <div className="max-w-[522px] flex flex-col justify-center items-center mx-auto">
            <div className="w-[76px] h-[172px]">
              <svg
                className="w-full h-full object-cover"
                xmlns="http://www.w3.org/2000/svg"
                width="76"
                height="173"
                viewBox="0 0 76 173"
                fill="none"
              >
                <path
                  d="M7.84023 1.28409C3.66105 3.29782 1.1218 7.43129 0.222478 13.7375C-1.62906 26.9858 8.26344 45.3214 22.917 55.7081C27.0433 58.6227 26.9375 58.4637 25.5621 59.9475C23.8692 61.7493 24.557 63.763 27.4136 65.2999C29.3181 66.2537 29.5826 66.6247 30.0058 69.1684C30.6406 72.9839 29.7413 77.5413 27.4665 82.2047C25.615 85.8612 24.9273 86.7621 16.9921 96.1949C12.1781 101.865 10.9614 104.091 10.3266 108.171C9.26856 114.636 11.8078 119.406 18.632 123.804C20.1133 124.705 25.1918 127.249 30.0058 129.369C41.3795 134.456 42.7549 135.198 45.929 137.583C49.2617 140.02 51.2191 143.624 52.0126 148.446C52.859 153.533 52.33 157.932 50.0553 165.298C48.5211 170.279 48.2566 171.657 48.7856 172.187C49.685 173.035 50.4785 171.922 52.5416 166.941C55.2396 160.476 55.8215 157.137 55.6099 150.619C55.4512 145.637 55.1867 144.26 54.0228 141.769C51.1133 135.463 47.8334 133.025 34.132 126.878C22.2822 121.579 18.8436 119.671 16.1457 116.756C13.4477 113.789 12.8658 110.98 14.1355 106.635C15.0348 103.667 17.4153 100.328 24.4512 92.2734C30.3761 85.4902 33.3385 78.1772 32.8095 71.606C32.5979 69.5923 32.3334 67.3666 32.1747 66.7837C31.9102 65.8828 32.1218 65.5648 33.1798 65.2999C35.2959 64.7699 36.6713 63.1271 36.6713 61.0604C36.6713 59.3116 36.6713 59.2586 41.5911 57.5628C59.4716 51.3096 73.9665 38.5913 75.7652 27.5687C77.2993 17.9769 71.2157 11.7237 60.4768 11.8297C54.6576 11.8827 49.3146 13.7905 42.3317 18.2949C39.1576 20.3086 36.301 21.8984 35.9836 21.7395C35.6133 21.6335 34.0791 19.3548 32.4921 16.6521C25.3505 4.62265 14.7174 -2.0015 7.84023 1.28409ZM16.8863 5.89449C21.2242 8.06721 24.2925 11.2468 28.5774 17.765C30.7993 21.1565 33.074 24.3361 33.7088 24.813C35.6133 26.4028 37.8351 25.9789 41.4853 23.4352C45.6645 20.6266 51.5365 17.606 54.5518 16.7581C57.9904 15.8572 63.545 15.9632 66.1372 17.0231C73.0143 19.7787 73.5433 26.7208 67.6184 35.0407C62.3812 42.4068 50.1082 51.0977 38.946 55.3901C36.5655 56.291 34.0262 57.0329 33.3385 57.0329C31.5928 57.0329 23.3402 51.2567 19.0553 47.0702C12.7071 40.817 7.84023 33.133 5.14228 25.237C3.76685 21.2625 3.76685 13.7375 5.08937 10.2929C7.20542 4.83463 11.5433 3.19183 16.8863 5.89449Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="text-center">
              <Header content="Why choose Kingdom Spouse?" color="#FFF" />
            </div>
          </div>

          <div className="mt-[80px] pb-[100px] flex flex-col gap-[100px]">
            <div className="flex justify-between items-center">
              <div className="relative w-fit">
                <div className="w-[400px] h-[400px] rounded-[32px]">
                  <img
                    className="h-full w-full object-cover rounded-[32px]"
                    src={spouseImg1}
                    alt="not found"
                  />
                </div>
                <div className="w-[283px] h-[283px] absolute right-[-105px] bottom-[-70px]">
                  <img
                    className="h-full w-full rounded-[32px] object-cover rotate-[7.7deg]"
                    src={spouseImg2}
                    alt="not found"
                  />
                </div>
              </div>

              <div className="max-w-[620px] flex flex-col gap-5">
                <h3 className="text-[40px] font-bold text-primaryWhiteMain">
                  We make meaningful matches easy.
                </h3>
                <p className="text-lightWhite text-[20px] font-normal">
                  Our thoughtful matchmaking process allows you to skip the
                  small talk and dive into authentic conversations that lead to
                  real relationships.{" "}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="max-w-[620px] flex flex-col gap-5">
                <h3 className="text-[40px] font-bold text-primaryWhiteMain">
                  Find your perfect match.
                </h3>
                <p className="text-lightWhite text-[20px] font-normal">
                  Explore a diverse range of interesting singles. We’ll learn
                  your preferences and priorities to introduce you to someone
                  special - your ideal partner is out there!{" "}
                </p>
              </div>

              <div className="relative w-fit">
                <div className="w-[400px] h-[400px] rounded-[32px]">
                  <img
                    className="h-full w-full object-cover rounded-[32px]"
                    src={spouseImg3}
                    alt="not found"
                  />
                </div>
                <div className="w-[283px] h-[283px] absolute right-[-105px] bottom-[-70px]">
                  <img
                    className="h-full w-full rounded-[32px] object-cover rotate-[7.7deg]"
                    src={spouseImg4}
                    alt="not found"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
