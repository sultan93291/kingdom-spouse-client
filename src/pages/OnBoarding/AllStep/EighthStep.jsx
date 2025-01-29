
import AuthButton from '../../../components/Common/AuthButton'
import heart from "../../../assets/Images/heart_icon.png";

const EighthStep = ({setStep}) => {
  return (
    <div>
      <h1 className="text-[30px] text-buttonBg font-bold text-center font-Inria">
      Tell Us About You
        </h1>
      <p className=" text-center text-sm font-Inter text-primaryYellow py-5">Describe yourself in few words. Initially you will be judged based on your description.</p>
<div className='pb-5'>
      
<div className=" bg-gradient-to-b  flex justify-center items-center">
      <textarea
        className="w-[400px] h-[150px] p-4 rounded-2xl bg-[#F4F3F1] text-[#B27409] placeholder-[#B27409] text-sm focus:outline-none focus:ring-2 focus:ring-[#B27409] shadow-md"
        placeholder="Give us more details about you..."
      ></textarea>
    </div>



</div>
      <div className="relative">
      <AuthButton onClick={()=>setStep(9)} text={"Continue"} />
      <span className="absolute bottom-1.5 -right-5">
        <img src={heart} alt="" />
      </span>
    </div>
    </div>
  )
}

export default EighthStep
