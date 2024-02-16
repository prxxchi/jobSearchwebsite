import React from 'react'

import {BiTimeFive} from 'react-icons/bi'

import logo1 from '../../Assets/logo1.png'
import logo2 from '../../Assets/logo2.png'
import logo3 from '../../Assets/logo3.png'
import logo4 from '../../Assets/logo4.png'
import logo5 from '../../Assets/logo5.png'
import logo6 from '../../Assets/logo6.png'
import logo7 from '../../Assets/logo7.png'
import logo8 from '../../Assets/logo8.png'




const Data= [
 
  {
    id:1,
    image:logo1,
    title:'Web Developer',
    time:'Now',
    location:'Canada',
    desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    company:'Vertitas Aequitas'
  
  },
  {
    id:2,
    image:logo2,
    title:'UX Designer',
    time:'19h ago',
    location:'Banglore',
    desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.lorem ipsum dolor',
    company:'FIRE'

  },
  {
    id:3,
    image:logo3,
    title:'Software engineer',
    time:'2d ago',
    location:'Chennai',
    desc:'c++,Java,Js Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    company:'Mooi'

  },
  {
    id:4,
    image:logo4,
    title:'Python Developer',
    time:'Now',
    location:'Mumbai',
    desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    company:'Skitter end'

  },
  {
    id:5,
    image:logo5,
    title:'UI/UX Desginer',
    time:'Now',
    location:'Gurgaon',
    desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    company:'Coca Cola'

  },
  {
    id:6,
    image:logo6,
    title:'Front end Developer',
    time:'2d ago',
    location:'Banglore',
    desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    company:'Jaguar'

  },
  {
    id:7,
    image:logo7,
    title:'Back end Developer',
    time:'Now',
    location:'Canada',
    desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    company:'Slack'

  },
  {
    id:8,
    image:logo8,
    title:'Web Developer',
    time:'Now',
    location:'Surat',
    desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    company:'Navida'

  }
]

const Job=()=> {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {
          Data.map(({id,image,title,time,location,desc,company})=>{
            return (
              <div key={id} className="group group/items singleJob w-[250px] p-[20px] bg-white rounded-[10px]
              hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                <span className='flex justify-between items-center gap-4'>
                  <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                  <span className='flex items-center text-[#ccc] gap-1'>
                    <BiTimeFive/>{time}
                  </span>
                </span>
                <h6 className='text-[#ccc]'>{location}</h6>
                <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px]
                mt-[20px] group-hover:text-white'>{desc}
                 </p>
                 <div className='company flex items-center gap-2'>
                  <img src={image} alt="Company Logo" className='w-[20%]'/>
                  <span className='text-[17px] py-[1rem] block group-hover:text-white'>
                    {company}
      
                  </span>
                  <button class="bg-gradient-to-r from-purple-400 to-blue-500
                   hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6
                    rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110
                     hover:brightness-110 hover:animate-pulse active:animate-bounce">
  Apply   
</button>
                </div>
          </div>
            )
          })
        }
       
      </div>

    </div>
  )
}

export default Job
