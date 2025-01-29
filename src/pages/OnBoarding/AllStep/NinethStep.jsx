
import AuthButton from '../../../components/Common/AuthButton'
import heart from "../../../assets/Images/heart_icon.png";
import location from "../../../assets/Images/location.png"
const NinethStep = ({setStep}) => {
  return (
    <div>
      <h1 className="text-[30px] text-buttonBg font-bold text-center font-Inria">
      Enable your location
        </h1>
      <p className=" text-center text-sm font-Inter text-primaryYellow py-5">Choose your location to start find people around you</p>
<div className='pb-5 flex justify-center items-center'>
      


<img src={location} alt="" />

</div>
      <div className="relative">
      <AuthButton onClick={()=>setStep(10)} text={"Allow Location Access"} />
      <span className="absolute bottom-1.5 -right-5">
        <img src={heart} alt="" />
      </span>
    </div>
    </div>
  )
}

export default NinethStep

