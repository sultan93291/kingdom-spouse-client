import AuthButton from "../../Common/AuthButton";
import Header from "../../Common/Header";
// import soulmate1 from "../../../assets/Images/soulmate1.png";
import soulmate2 from "../../../assets/Images/soulmate2.png";
import soulmate3 from "../../../assets/Images/soulmate3.png";
import soulmate4 from "../../../assets/Images/soulmate4.png";
// import soulmate5 from "../../../assets/Images/soulmate5.png";
import miniStar from "../../../assets/Images/miniStar.png";
import miniLove from "../../../assets/Images/miniLove.png";
import Marquee from "react-fast-marquee";

const YourSoulmate = () => {
  return (
    <section className="py-20 relative bg-gradient-to-b from-[#f7f1e4] to-[#fffaf3]">
      <div className="mx-auto overflow-visible">
        {/* Header Section */}
        <div className="text-center mx-auto flex flex-col gap-5">
          <Header content="Your Soulmate Is Just a Click Away!" color="#B27409" />
          <div className="w-56 mx-auto">
            <AuthButton text="Match. Chat. Love." />
          </div>
        </div>

        {/* Marquee Section */}
        <div className="relative mt-16 overflow-visible">
          {/* Left Shadow */}
          <div className="absolute inset-y-0 left-0 w-96 bg-gradient-to-r from-[#f7f1e4] to-transparent z-10"></div>

          {/* Right Shadow */}
          <div className="absolute inset-y-0 right-0 w-96 bg-gradient-to-l from-[#f7f1e4] to-transparent z-10"></div>

          {/* Marquee */}
          <Marquee pauseOnHover={true} speed={50} className="">
            {/* Soulmate Images */}
            {[soulmate3, soulmate2, soulmate3, soulmate4, soulmate3, soulmate2, soulmate3, soulmate2, soulmate3].map(
              (image, index) => (
                <div key={index} className="relative mx-4">
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
    </section>
  );
};

export default YourSoulmate;
