import blogListBanners from "../../assets/Images/nr--BlogListBanner.png";
import alexander from "../../assets/Images/nr--alexander.png";
import bannerItemImg1 from "../../assets/Images/nr--blogListBanner--item1.png";
import bannerItemImg2 from "../../assets/Images/nr--blogListitem2.png";
import bannerItemImg3 from "../../assets/Images/nr--blogLIst--item3.png";
import littleImg1 from "../../assets/Images/women2.png"

export default function BlogListBanner() {


    const BlogItemList = [
        {
            id: crypto.randomUUID(),
            images: bannerItemImg1,
            titles: "Wind Power: A Breath of Fresh Air for Clean Energy Enthusiasts",
            littleImg: alexander,
            names: "Wade Warren",
            timeAgo: "7 min ago"
        },
        {
            id: crypto.randomUUID(),
            images: bannerItemImg2,
            titles: "From Trash to Treasure: The Promising World of Biomass Energy",
            littleImg: littleImg1,
            names: "Wade Warren",
            timeAgo: "7 min ago"
        },
        {
            id: crypto.randomUUID(),
            images: bannerItemImg3,
            titles: "Hydrogen: Fueling the Green Energy Revolution",
            littleImg: alexander,
            names: "Wade Warren",
            timeAgo: "7 min ago"
        },
        {
            id: crypto.randomUUID(),
            images: bannerItemImg1,
            titles: "Wind Power: A Breath of Fresh Air for Clean Energy Enthusiasts",
            littleImg: alexander,
            names: "Wade Warren",
            timeAgo: "7 min ago"
        },
        {
            id: crypto.randomUUID(),
            images: bannerItemImg2,
            titles: "From Trash to Treasure: The Promising World of Biomass Energy",
            littleImg: littleImg1,
            names: "Wade Warren",
            timeAgo: "7 min ago"
        },
        {
            id: crypto.randomUUID(),
            images: bannerItemImg3,
            titles: "Hydrogen: Fueling the Green Energy Revolution",
            littleImg: alexander,
            names: "Wade Warren",
            timeAgo: "7 min ago"
        },
        
    ]



  return (
    <section className="py-[100px] px-8">
      <div className="container py-[80px] relative mx-auto shadow-footerShadow bg-[#B27409] rounded-[22px]">
        <div className="flex justify-between items-start px-[4%]">
          {/* Banner Left */}
          <div className="w-[50%]">
            <div className="w-[100%] h-[460px] rounded-[16px]">
              <img
                className="h-full w-full object-cover rounded-[16px]"
                src={blogListBanners}
                alt="not found"
              />
            </div>

            <div className="max-w-[632px] mt-[32px] flex flex-col gap-4">
              <h3 className="font-Inter text-[24px] font-bold leading-6 capitalize text-primaryWhiteMain">
                Harnessing the Power of the Sun: Exploring the World of Solar
                Energy
              </h3>
              <p className="text-primaryWhiteMain text-base font-normal font-Inter">
                Solar energy is revolutionizing the way we power our world. In
                this blog post, we&lsquo;ll delve into the incredible potential of
                solar technology, its environmental benefits, and how you can
                tap into this sustainable energy source for a brighter future.
              </p>
            </div>

            <div className="mt-6 flex gap-4 items-center">
              <div className="w-[40px] h-[40px] rounded-full">
                <img
                  className="w-full h-full rounded-full"
                  src={alexander}
                  alt="not found"
                />
              </div>
              <div>
                <h6 className="text-primaryWhiteMain text-sm font-normal font-Inter">
                  Leslie Alexander
                </h6>
              </div>
              <div className="w-1 h-1 bg-white/60 rounded-full"></div>
              <div>
                <span className="text-primaryWhiteMain text-sm font-normal font-Inter">
                  9 min ago
                </span>
              </div>
            </div>
          </div>

          {/* Banner Right */}
          <div className="w-[40%] flex flex-col gap-[32px] max-h-[600px] forScroll">
            {BlogItemList.map((item)=>(
                <div key={item.id} className="flex gap-[32px] items-center">
                <div className="w-[177px] h-[177px] rounded-2xl">
                    <img
                    className="w-full h-full rounded-2xl object-cover"
                    src={item.images}
                    alt="not found"
                    />
                </div>

                <div className="max-w-[400px]">
                    <h4 className="text-white text-2xl font-bold font-Inria capitalize leading-normal">
                        {item.titles}
                    </h4>

                    <div className="flex gap-4 items-center mt-6">
                    <div className="w-[32px] h-[32px] rounded-full">
                        <img
                        className="w-full h-full rounded-full"
                        src={item.littleImg}
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
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
}
