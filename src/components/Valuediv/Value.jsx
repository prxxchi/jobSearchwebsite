import React from 'react'
import simple from '../../Assets/simple.png'
import image1 from '../../Assets/image1.png'
import image3 from '../../Assets/images3.png'
import images from '../../Assets/images.png'

const Value=()=> {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[800px] block'>
        The value that holds us true and to account </h1>
      <div className='grid gap-[10rem] grid-cols-3 items-center'>
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] *:flex 
            items-center justify-center'>
              <img src={simple} alt='w-[80%]'/>

            </div>
            <span className='font-semibold text-textColor text-[25px]'>Simplicity</span>
          </div>
          <p className='text-[20px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
          Find out who you are and do it on purpose
          </p>
           
        </div>
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] *:flex 
            items-center justify-center'>
              <img src={image1} alt='w-[80%]'/>

            </div>
            <span className='font-semibold text-textColor text-[25px]'>Array</span>
          </div>
          <p className='text-[20px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
          Find out who you are and do it on purpose
          </p>
           
        </div>
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] *:flex 
            items-center justify-center'>
              <img src={image3} alt='w-[80%]'/>

            </div>
            <span className='font-semibold text-textColor text-[25px]'>Vectors</span>
          </div>
          <p className='text-[20px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
          Find out who you are and do it on purpose
          </p>
           
        </div>
      </div>
      <div className="card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px]">
        <div>
          <h1 className='text-blueColor text-[30px] font-bold'>Ready to search a career 

          </h1>
          <h2 className='text-textColor text-[25px] font-bold'>Let's Get started !</h2>
        </div>
        <button
  class="px-8 z-30 py-4 bg-rose-400 rounded-md text-white relative font-semibold font-sans 
  after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden 
  after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] 
  after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 
  transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl">
  Get Started
</button>


      </div>

    </div>
  )
}

export default Value
