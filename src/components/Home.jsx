import React from 'react'
import Paper from '@mui/material/Paper';
import serachIcon from '../assets/images/searchIcon.png'
import notificationIcon from '../assets/images/notificationIcon.png'
import moreIcon from '../assets/images/moreIcon.png'
import quickIcon1 from '../assets/images/qa1.png'
import quickIcon2 from '../assets/images/qa2.png'
import quickIcon3 from '../assets/images/qa3.png'
import quickIcon4 from '../assets/images/qa4.png'
import quickIcon5 from '../assets/images/qa5.png'
import { Divider } from '@mui/material';

const Home = () => {
    const items=[{icon:quickIcon1,text:'Create Indents'},{icon:quickIcon2,text:'Add vehicle'},{icon:quickIcon3,text:'Add Trailer'},{icon:quickIcon4,text:'Add Driver'},{icon:quickIcon5,text:'Add Indents'}];
  return (
    <div className='flex-col mr-[360px] ml-[140px] '>
        <div className='flex font-montserrat text-black font-style2 mt-[5%]'>
            <h1 className='mr-auto text-xl'>Dashboard</h1>
            
                <div className='rounded-full ml-auto'>
            <div className="flex items-center justify-between w-[60%] px-[5%] rounded-full py-2 bg-white shadow-sm border">
            <img className='w-[18%] h-auto' src={serachIcon}/>
      <div className="border-l h-6 border-gray-300"></div>
      <img className='w-[18%] h-auto' src={notificationIcon}/>
      <div className="border-l h-6 border-gray-300"></div>
      <img className='w-[18%] h-auto' src={moreIcon}/>
    </div>
            </div>
        </div>
        <div className="flex items-center justify-between rounded-xl space-x-0  w-[70%] py-4 px-[2%] bg-white shadow-sm border">
      {items.map((item, index) => (
        <div key={index} className='justify-between flex font-roboto font-style2'>
          <div className="flex flex-col items-center px-4 pt-2 ml-auto">
           <img src={item.icon} className='w-[25%] block mx-auto '/>
            <div className="text-sm max-lg:text-[0.6vh] font-medium text-right pl-auto block">{item.text}</div>
          </div>
          {( index < items.length - 1) && (
            <div className="border-l  top-0 right-0 h-12 border-gray-300"></div>
          )}
        </div>
      ))}
    </div>


      
    </div>
  )
}

export default Home
