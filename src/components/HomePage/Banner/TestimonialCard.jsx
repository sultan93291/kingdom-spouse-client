

function TestimonialCard({ item }) {
  return (
    <div className=" mr-[6px] ml-[6px] 2xl:custom-wrap">
      <div className="xl:py-8 py-4   px-3 xl:px-6   xl:w-[545px] bg-faqBg rounded-[16px] 2xl:rounded-[24px] border border-cardBorderColor flex items-start gap-4 relative">
        <div className="min-w-[48px] max-w-[48px] h-[48px] rounded-full overflow-hidden border border-white">
          <img
            className="object-cover w-full h-full"
            src={item?.image}
            alt="image"
          />
        </div>
        <div>
          <h3 className=" text-[14px] w-[300px] xl:w-auto xl:text-[20px] font-bold text-white">{item?.title}</h3>
          <p className=" text-xs w-[300px] xl:w-auto xl:text-[18px] leading-5 xl:leading-8 text-gray-300 mt-3">
            {item?.feedback}
          </p>
          <p className=" text-[13px] xl:text-[18px] text-[#FFF5EB] mt-2">{item?.author}</p>
        </div>
        <img
          className="absolute w-3 h-3 xl:h-6 xl:w-6 right-3 bottom-4 xl:right-6 xl:bottom-8"
          
          alt="QuoteIcon"
        />
      </div>
    </div>
  );
}

export default TestimonialCard;