/* eslint-disable react/prop-types */

export default function BlogCard({item}) {
    console.log(item);
    
  return (
    <div className="rounded-[32px] overflow-hidden flex flex-col w-[32%] h-auto">
      <div className="h-[350px]">
        <img
          className="h-full w-full object-cover"
          src={item.imagess}
          alt="not found"
        />
      </div>
      
        <div className="bg-[#b27409] p-[32px]">
            <div className="flex flex-col gap-[16px]">
                <h4 className="text-primaryWhiteMain text-2xl font-bold font-Inria capitalize leading-normal">
                {item.titless}
                </h4>
                <p className="text-primaryWhiteMain text-sm font-normal font-Inter">
                {item.peraText}
                </p>

            </div>

            <div className="flex gap-4 items-center mt-6">
                <div className="w-[32px] h-[32px] rounded-full">
                <img
                    className="w-full h-full rounded-full"
                    src={item.littleImages}
                    alt="not found"
                />
                </div>
                <div>
                <h6 className="text-white text-sm font-normal font-Inter">
                    {item.names}
                </h6>
                </div>
                <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                <div>
                <span className="text-primaryWhiteMain text-sm font-normal font-Inter">
                    {item.timeAgo}
                </span>
                </div>
            </div>
        </div>
    </div>
  );
}
