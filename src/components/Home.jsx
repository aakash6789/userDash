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
import rightArrow from '../assets/images/rarrow.png'
import alertProfile from '../assets/images/alertPro.png'
import alertTemp from '../assets/images/alertTemp.png'
import { Divider } from '@mui/material';
import { useSelector } from 'react-redux';
import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Circle from './Circle.jsx';
import CardComponent from './CardComponent.jsx';

const Home = () => {
  const orders=useSelector(state=>state.orders.orders);
  console.log(orders);
    const items=[{icon:quickIcon1,text:'Create Indents'},{icon:quickIcon2,text:'Add vehicle'},{icon:quickIcon3,text:'Add Trailer'},{icon:quickIcon4,text:'Add Driver'},{icon:quickIcon5,text:'Add Indents'}];
  return (
    <div className='flex-col mr-[360px] ml-[140px] '>
        <div className='flex font-montserrat text-black font-style2 mt-[2%]'>
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
      <div className='flex justify-between space-x-6 w-[90%] mt-[5%]'>
      {Array.isArray(orders) && orders.map((element)=> (
           <CardComponent element={element} key={element.id}/>    
        )
      )}
      </div>
        <h1 className='font-roboto font-style2 mr-auto mt-[5%] '>Quick Actions</h1>
        <div className="flex items-center mt-[2%] justify-between rounded-2xl space-x-0  w-[70%] py-4 px-[2%] bg-white shadow-sm border">
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
<div className='mt-[5%]'>
  <div className='flex pr-[4%]'>
<h1 className='font-roboto font-style2 mr-auto '>High Priority Alerts(14)</h1>
<div className='text-[#1A3875] flex text-sm ml-auto'>
  <p className='mt-[2px]'>View All</p>
  <img src={rightArrow} className=' ml-2 w-[15%] '/>
  </div>

  </div>
   <div className='flex w-[90%] mt-[2%] space-x-16 justify-between'>
   <div className="flex flex-col  bg-white rounded-lg shadow-md p-4">
      <div className="flex flex-row justify-between items-center">
        <div className='flex'>
          <img src={alertProfile} className='w-[10%]'/>
          <div className=' ml-[2%]'>
        <h3 className="text-md   font-medium text-[#111111]">Driver Raised Concern</h3>
        <p className="text-[1.5vh] text-[#111111]">Load No: 12454, Bill To: RoaDo demo Bangalore</p>

          </div>
        </div>
        <p className="text-[1.5vh] text-[#111111] font-style1 w-[20%]">13 Fab 24</p>
      </div>
      <div className="mt-4">
       
        <p className="mt-2 text-xs text-[#111111]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="flex flex-row justify-end mt-4">
        <button className="text-[#1A3875] underline py-2 px-4 rounded-md text-sm">Ignore</button>
        <button className="ml-4 bg-[#1A3875] text-white py-2 px-4 rounded-md text-sm ">Resolve</button>
      </div>
    </div>
    <div className="flex flex-col  bg-white rounded-lg shadow-md p-4">
      <div className="flex flex-row justify-between items-center">
        <div className='flex'>
          <img src={alertTemp} className='w-[10%]'/>
          <div className=' ml-[2%]'>
        <h3 className="text-md   font-medium text-[#111111]">Reefer Temp. out of range</h3>
        <p className="text-[1.5vh] text-[#111111]">Load No: 12454, Bill To: RoaDo demo Bangalore</p>

          </div>
        </div>
        <p className="text-[1.5vh] text-[#111111] font-style1 w-[20%]">13 Fab 24</p>
      </div>
      <div className="mt-4">
       
        <p className="mt-2 text-xs text-[#111111]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="flex flex-row justify-end mt-4">
        <button className="text-[#1A3875] underline py-2 px-4 rounded-md text-sm">Ignore</button>
        <button className="ml-4 bg-[#1A3875] text-white py-2 px-4 rounded-md text-sm ">Resolve</button>
      </div>
    </div>
   </div>
   </div>
  <div>
  </div>


      
    </div>
  )
}

export default Home
