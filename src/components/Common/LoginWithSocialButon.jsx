import React from 'react'
import { Link } from 'react-router-dom'

const LoginWithSocialButon = ({icon,text,className}) => {
  return (
    <div>
      <Link className={`text-buttonBg font-Inter text-[16px] flex items-center justify-center  rounded-[32px] font-medium py-[10px] px-10 bg-[#E8E5DF]  w-full ${className}`}>
              <span className='font-Inter flex items-center gap-2.5 '>{icon}{text}</span>
      </Link>
    </div>
  )
}

export default LoginWithSocialButon
