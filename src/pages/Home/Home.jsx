import Banner from '../../components/HomePage/Banner/Banner'
import Blog from '../../components/HomePage/ConnectHearts/Blog'
import ConnectHearts from '../../components/HomePage/ConnectHearts/ConnectHearts'
import FindYourMatch from '../../components/HomePage/FindYourMatch/FindYourMatch'
import LovedBySingles from '../../components/HomePage/LovedBySingles/LovedBySingles'
import WhyChoose from '../../components/HomePage/WhyChoose/WhyChoose'
import YourSoulmate from '../../components/HomePage/YourSoulmate/YourSoulmate'

export default function Home() {
  return (
    <>
      <Banner/>
      <ConnectHearts/>
      <WhyChoose/>
      <FindYourMatch/>
      <LovedBySingles/>
      <YourSoulmate/>
      <Blog title="Blog"/>
    </>
  )
}
