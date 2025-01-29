
import Header from "../../Common/Header";
import { IoIosArrowRoundForward } from "react-icons/io";
import blog from "../../../assets/Images/Blog.png";
const Blog = ({ title}) => {
  return (
    <section className="py-20">
      <div className="w-[1280px] mx-auto">
        <div className="flex justify-between items-center ">
          <div>
            <Header content={title} color="#B27409" />
            <p className="font-sm font-Inter text-secondaryYellow">
              Discover articles and tutorials to help you build better
            </p>
          </div>
          <div>
            <button className="py-3.5 px-6  rounded-full bg-white flex items-center justify-center gap-1 text-buttonBg">
              See more
              <IoIosArrowRoundForward className="text-2xl" />
            </button>
          </div>
        </div>

        <div className="mt-[45px] flex justify-between items-center">
          <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-sm ">
            <img className="w-full rounded-xl" src={blog} alt="" />

            <div className="p-5 ">
              <p className="text-base font-Inter w-[270px] text-secondaryYellow">
                Why few people don’t truest on dating app?
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-sm ">
            <img className="w-full rounded-xl" src={blog} alt="" />

            <div className="p-5 ">
              <p className="text-base font-Inter w-[270px] text-secondaryYellow">
                Why few people don’t truest on dating app?
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-sm ">
            <img className="w-full rounded-xl" src={blog} alt="" />

            <div className="p-5 ">
              <p className="text-base font-Inter w-[270px] text-secondaryYellow">
                Why few people don’t truest on dating app?
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-sm ">
            <img className="w-full rounded-xl" src={blog} alt="" />

            <div className="p-5 ">
              <p className="text-base font-Inter w-[270px] text-secondaryYellow">
                Why few people don’t truest on dating app?
              </p>
            </div>
          </div>
      
        </div>
      </div>
    </section>
  );
};

export default Blog;
