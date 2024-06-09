import React from 'react'
import circle1 from '../assets/images/cir1.png'
import circle2 from '../assets/images/cir2.png'
import circle3 from '../assets/images/cir3.png'
const Circle = () => {
  return (
    <div className='font-roboto'>
      <div className="relative w-40 h-40 overflow-hidden rounded-full">
      <img className="absolute inset-0 object-cover w-full h-full rounded-full" src={circle1}  />
      <img className="absolute right-0 w-1/2 h-auto -rotate-240" src={circle3}  />
      <img className="absolute  right-0  w-1/2 h-auto -rotate-120" src={circle2}  />
      <div className="text-sm absolute top-[37%] right-[34%] font-semibold text-center text-black">
        <p className='font-style1 text-[#676666]'>Total</p>
      <p className='font-style2'>123456</p>  
        </div>
    </div>
    </div>
  )
}

export default Circle
