import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

function Search() {
  return (
    <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>
         <form action=" ">
         <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white  p-5 shadow-lg 
         shadow-greyIsh-600'>
         <div className='flex gap-2 items-center'>
         <AiOutlineSearch className='text-[25px] icons'/>
         <input type="text" className='bg-transparent text-blue-500
         focus:outline-none w-[100%]' placeholder='Search Job Here....'/>
         <AiOutlineCloseCircle className='text-[30px] text-[#a5aa6a6]
         hover:text-textColor icons'/>

          </div> 
          <div className='flex gap-2 items-center'>
         <BsHouseDoor   className='text-[25px] icons'/>
         <input type="text" className='bg-transparent text-blue-500
         focus:outline-none w-[100%]' placeholder='Search by Company....'/>
         <AiOutlineCloseCircle className='text-[30px] text-[#a5aa6a6]
         hover:text-textColor icons'/>

          </div>
          <div className='flex gap-2 items-center'>
         <CiLocationOn className='text-[25px] icons'/>
         <input type="text" className='bg-transparent text-blue-500
         focus:outline-none w-[100%]' placeholder='Search by Location...'/>
         <AiOutlineCloseCircle className='text-[30px] text-[#a5aa6a6]
         hover:text-textColor icons'/>

          </div>
          <button className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-wrap cursor-pointer
          hover:bg-blue-300'>Search</button>
          </div>
          </form>
          
          <div className='secDiv flex  items-center gap-10 justify-center'>
          <div className='singleSearch flex items-center gap-2'>
              <label htmlFor="relevance" className='text-[#808080] font-semibold'>Sort By:</label>
              <select name="" id="relevance" className='bg-white rounded-[3px] px-4 py-1'>
                <option value="">Relevance</option>
                <option value="">Inclusive</option>
                <option value="">Start With</option>
                <option value="">contains</option>
                </select>
                           

                 </div>
                 <div className='secDiv flex  items-center gap-10 justify-center'>
          <div className='singleSearch flex items-center gap-2'>
              <label htmlFor="relevance" className='text-[#808080] font-semibold'>Type:</label>
              <select name="" id="relevance" className='bg-white rounded-[3px] px-4 py-1'>
                <option value="">Part-time</option>
                <option value="">Full-time</option>
                <option value="">Remote</option>
                <option value="">Contract</option>
                </select>
                           

                 </div>
                 <div className='secDiv flex  items-center gap-10 justify-center'>
          <div className='singleSearch flex items-center gap-2'>
              <label htmlFor="relevance" className='text-[#808080] font-semibold'>Level:</label>
              <select name="" id="relevance" className='bg-white rounded-[3px] px-4 py-1'>
                <option value="">Senior</option>
                <option value="">Beginner</option>
                <option value="">Intermediate</option>
                <option value="">cAdvocate</option>
                </select>
                </div>
                <spam className='text-[#a1a1a1] '>Clear All</spam>
                </div>
                </div>

                           

                 

            </div>
            </div>
          
  )
}

export default Search
