import BlogCard from './BlogCard'
import blogImgItemmm1 from "../../assets/Images/nr--blogImg--item1.png";
import blogImgItemmm2 from "../../assets/Images/nr--blogImg--item2.png";
import blogImgItemmm3 from "../../assets/Images/nr--blogImg--item3.png";
import blogImgItemmm4 from "../../assets/Images/nr--blogImg--item4.png";
import blogImgItemmm5 from "../../assets/Images/nr--blogImg--item5.png";
import blogImgItemmm6 from "../../assets/Images/nr--blogImg--item6.png";
import blogImgItemmm7 from "../../assets/Images/nr--blogImg--item7.png";
import blogImgItemmm8 from "../../assets/Images/nr--blogImg--item8.png";

export default function AllBlogCardMain() {

    
    const BlogItemListss = [
        {
            id: crypto.randomUUID(),
            imagess: blogImgItemmm1,
            titless: "Harnessing the Power of the Sun: Exploring the World of Solar Energy",
            peraText: "Solar energy is revolutionizing the way we power our world. In this blog post, we'll delve into the incredible potential of solar technology, its environmental benefits, and how you can tap into this sustainable energy source for a brighter future.",
            littleImages: blogImgItemmm1,
            names: "Wade Warren",
            timeAgo: "7 min ago"
        },
        {
            id: crypto.randomUUID(),
            imagess: blogImgItemmm2,
            titless: "Harnessing the Power of the Sun: Exploring the World of Solar Energy",
            peraText: "Solar energy is revolutionizing the way we power our world. In this blog post, we'll delve into the incredible potential of solar technology, its environmental benefits, and how you can tap into this sustainable energy source for a brighter future.",
            littleImages: blogImgItemmm2,
            names: "Wade Warren",
            timeAgo: "7 min ago"
        },
        {
            id: crypto.randomUUID(),
            imagess: blogImgItemmm3,
            titless: "Harnessing the Power of the Sun: Exploring the World of Solar Energy",
            peraText: "Solar energy is revolutionizing the way we power our world. In this blog post, we'll delve into the incredible potential of solar technology, its environmental benefits, and how you can tap into this sustainable energy source for a brighter future.",
            littleImages: blogImgItemmm3,
            names: "Wade Warren",
            timeAgo: "7 min ago"
        },
        {
            id: crypto.randomUUID(),
            imagess: blogImgItemmm4,
            titless: "Harnessing the Power of the Sun: Exploring the World of Solar Energy",
            peraText: "Solar energy is revolutionizing the way we power our world. In this blog post, we'll delve into the incredible potential of solar technology, its environmental benefits, and how you can tap into this sustainable energy source for a brighter future.",
            littleImages: blogImgItemmm4,
            names: "Wade Warren",
            timeAgo: "7 min ago"
        },
        {
            id: crypto.randomUUID(),
            imagess: blogImgItemmm5,
            titless: "Harnessing the Power of the Sun: Exploring the World of Solar Energy",
            peraText: "Solar energy is revolutionizing the way we power our world. In this blog post, we'll delve into the incredible potential of solar technology, its environmental benefits, and how you can tap into this sustainable energy source for a brighter future.",
            littleImages: blogImgItemmm5,
            names: "Wade Warren",
            timeAgo: "7 min ago"
        },
        {
            id: crypto.randomUUID(),
            imagess: blogImgItemmm6,
            titless: "Harnessing the Power of the Sun: Exploring the World of Solar Energy",
            peraText: "Solar energy is revolutionizing the way we power our world. In this blog post, we'll delve into the incredible potential of solar technology, its environmental benefits, and how you can tap into this sustainable energy source for a brighter future.",
            littleImages: blogImgItemmm6,
            names: "Wade Warren",
            timeAgo: "7 min ago"
        },
        {
            id: crypto.randomUUID(),
            imagess: blogImgItemmm7,
            titless: "Harnessing the Power of the Sun: Exploring the World of Solar Energy",
            peraText: "Solar energy is revolutionizing the way we power our world. In this blog post, we'll delve into the incredible potential of solar technology, its environmental benefits, and how you can tap into this sustainable energy source for a brighter future.",
            littleImages: blogImgItemmm7,
            names: "Wade Warren",
            timeAgo: "7 min ago"
        },
        {
            id: crypto.randomUUID(),
            imagess: blogImgItemmm8,
            titless: "Harnessing the Power of the Sun: Exploring the World of Solar Energy",
            peraText: "Solar energy is revolutionizing the way we power our world. In this blog post, we'll delve into the incredible potential of solar technology, its environmental benefits, and how you can tap into this sustainable energy source for a brighter future.",
            littleImages: blogImgItemmm8,
            names: "Wade Warren",
            timeAgo: "7 min ago"
        },
        {
            id: crypto.randomUUID(),
            imagess: blogImgItemmm6,
            titless: "Harnessing the Power of the Sun: Exploring the World of Solar Energy",
            peraText: "Solar energy is revolutionizing the way we power our world. In this blog post, we'll delve into the incredible potential of solar technology, its environmental benefits, and how you can tap into this sustainable energy source for a brighter future.",
            littleImages: blogImgItemmm6,
            names: "Wade Warren",
            timeAgo: "7 min ago"
        },
    ]

  return (
    <section>
        <div className="container mx-auto">
            <div className='pb-[30px] relative after:absolute after:contents[""] after:h-[1px] after:w-full after:bg-[#b27409] after:bottom-0 after:left-0'>
                <h3 className="text-[#b27409] text-2xl font-bold font-Inria capitalize leading-normal">All Blogs</h3>
            </div>

            <div className='mt-[30px] flex flex-wrap gap-6'>
                {BlogItemListss.map((item)=>(
                    <BlogCard key={item.id} item={item}/>

                ))}
                
            </div>
        </div>
    </section>
  )
}
