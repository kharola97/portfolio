import React from 'react'
import ServiceBox from "./ServicesBox"
const Services = () => {
  return (
    <>
    <section className='bg-secondary dark:bg-gray-900 dark:text-white py-10'>
      <div className='container flex flex-col items-center'>
        <h1 className='inline-block text-center font-bold mb-3 border-b-2 border-primary pb-1 '>Services</h1>
        <p className='text-slate-300 text-center  md:w-[50%] mx-auto'>Passionate MERN developer dedicated to crafting innovative web solutions. Specializing in full-stack development, API integration, and responsive design for seamless user experiences</p>
      </div>
      {/* project card */}
      <div>
       
       <ServiceBox/>
      
      </div>
    </section>

    </>
  )
}

export default Services