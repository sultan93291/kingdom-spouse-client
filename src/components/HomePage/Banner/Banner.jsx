import React from "react";
import star from "../../../assets/Images/Stars.png";
import bannerImg1 from "../../../assets/Images/SPANISHMALE.png";
import AuthButton from "../../Common/AuthButton";
import googlePlay from "../../../assets/Images/googlePlay.png";
import apple from "../../../assets/Images/appleIcon.png";
import Marquee from "react-fast-marquee";
import soulmate2 from "../../../assets/Images/soulmate2.png";
import soulmate3 from "../../../assets/Images/soulmate3.png";
import soulmate4 from "../../../assets/Images/soulmate4.png";
import miniStar from "../../../assets/Images/miniStar.png";
import miniLove from "../../../assets/Images/miniLove.png";

export default function Banner() {
  return (
    <section className="px-8 pb-24">
      <div className="container overflow-hidden px-0 relative mx-auto shadow-footerShadow bg-[#B27409] rounded-[22px]">
        {/* Banner Section */}
        <div className="relative">
          <div className="flex items-center">
            <img className="w-full" src={star} alt="Stars" />
              {/* Marquee with images in column layout */}
              <div className="transform -rotate-[25deg]">
                <Marquee pauseOnHover={true} play={true} speed={50} direction="down">
                  {/* Soulmate Images in a column */}
                  {[soulmate3, soulmate2, soulmate3, soulmate4, soulmate3, soulmate2, soulmate3, soulmate2, soulmate3].map(
                    (image, index) => (
                      <div key={index} className="relative mx-4 mb-8 w-48">
                        <img src={image} alt={`Soulmate ${index + 1}`} />
                        {/* Add mini icons for specific images */}
                        {index === 2 && (
                          <img
                            className="absolute z-50 top-[-58px] left-0"
                            src={miniStar}
                            alt="Mini Star"
                          />
                        )}
                        {index === 3 && (
                          <img
                            className="absolute z-50 top-[-46px] right-[-15px]"
                            src={miniLove}
                            alt="Mini Love"
                          />
                        )}
                      </div>
                    )
                  )}
                </Marquee>
              </div>
          </div>

          {/* Banner Content */}
          <div className="absolute top-1/2 left-16 transform -translate-y-1/2">
            <div className="text-center text-white w-[810px] uppercase">
              {/* Title */}
              <h1 className="text-[70px] font-kingdom leading-tight">
                Kingdom Spouse: Matching Faith with God’s Eternal Love
              </h1>

              {/* Description */}
              <p className="font-normal font-Inter mt-6">
                Kingdom Spouse connects faith-filled singles, fostering
                meaningful relationships rooted in love, culture, and shared
                purpose.
              </p>

              {/* Call to Action Button */}
              <div className="mt-10 w-[230px] mx-auto">
                <AuthButton text="Find Your Match" />
              </div>

              {/* Download Buttons */}
              <div className="flex justify-center gap-4 mt-8">
                {/* Google Play Button */}
                <button className="bg-googlePlay py-2 px-7 shadow-xl rounded-xl flex items-center gap-2">
                  <img className="h-12" src={googlePlay} alt="Google Play" />
                  <div className="flex flex-col items-start">
                    <p>Get It Now</p>
                    <p className="text-xl">Google Play</p>
                  </div>
                </button>

                {/* Apple Store Button */}
                <button className="bg-googlePlay py-2 px-7 shadow-xl rounded-xl flex items-center gap-2">
                  <img className="h-12" src={apple} alt="Apple Store" />
                  <div className="flex flex-col items-start">
                    <p>Get It Now</p>
                    <p className="text-xl">App Store</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
