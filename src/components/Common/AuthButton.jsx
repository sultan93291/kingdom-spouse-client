

const AuthButton = ({text,className, ...props}) => {
  return (
    <div>
      <button {...props} className={`text-[#FFF] text-[16px] text-center font-medium py-[14px] px-10 bg-buttonBg shadow-buttonSHadow rounded-[12px] inline-block w-full ${className}`}>
              <span className={` ${className}`}>{text}</span>

      </button>
    </div>
  )
}

export default AuthButton
