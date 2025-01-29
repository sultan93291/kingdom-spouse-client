
import AuthButton from '../../../components/Common/AuthButton'
import heart from "../../../assets/Images/heart_icon.png";
import allset from "../../../assets/Images/allset.png"
const Allset = () => {
  return (
    <div>
      <h1 className="text-[30px] text-buttonBg font-bold text-center font-Inria">
      All Set !
        </h1>
    
<div className='py-5 flex justify-center items-center'>
      


<img src={allset} alt="" />

</div>
<p className=" text-center text-sm font-Inter text-primaryYellow py-5">You just completed all necessary steps. Now you just few steps away from your loved one.</p>
      <div className="relative">
      <AuthButton text={"Go Find Your Match"} />
      <span className="absolute bottom-1.5 -right-5">
        <img src={heart} alt="" />
      </span>
    </div>
    </div>
  )
}

export default Allset

// all okay