import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Circle from './Circle.jsx';
const CardComponent = ({element,key}) => {
  return (
    <Card className='font-roboto  px-[1%]  w-full'>
        <h1 className='text-left mb-[3%] ml-[4%] mt-4 font-medium'>{element.tittle}</h1>
        <div className='flex w-[60%] mx-auto items-center justify-center'>

        <Circle/>
        </div>
        <div className='mt-[5%] text-[12px] mb-[5%]  font-medium'>
            <div className='flex bg-custom-gradient1 rounded-md px-[5%] py-1 w-full'>
             <p className='mr-auto '>{element.c1}</p>
             <p className='ml-auto'>{element.v1}</p>
            </div>
            <div className='flex mt-2 bg-custom-gradient2  rounded-md py-1 px-[5%]' >
             <p className='mr-auto'>{element.c2}</p>
             <p className='ml-auto'>{element.v2}</p>
            </div>
            <div className='flex mt-2 bg-custom-gradient3  rounded-md py-1 px-[5%]' >
             <p className='mr-auto'>{element.c3}</p>
             <p className='ml-auto'>{element.v3}</p>
            </div>
        </div>
      
    </Card>
  )
}

export default CardComponent
