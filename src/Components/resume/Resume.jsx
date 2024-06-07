import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import myResume from "../../assets/Resume.pdf"
const Resume = () => {
  return (
    <>
       <section id='about' className='bg-white  dark:bg-slate-800 dark:text-white'>
           <div className='container md:w-[70%] py-10 sm:py-16' >
             <div className='grid items-center gap-4 grid-cols-1 sm:grid-cols-2'>
                 <div className='relative font-bold'>
                    <div className='text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-600'>
                        ABOUT
                    </div>
                    <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-4xl '>About Me</h1>
                 </div>
                 <div className='text-slate-500'>
                      <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, sed delectus quas veritatis animi quo praesentium dicta repellendus ut vel?</p> <br />
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, veritatis.</p>
                      <div>
                        <a href={myResume} className='primary-btn inline-block  my-6 mr-6' download="resume.pdf" >Download Resume</a>
                        <a href="tel:+918755519071" className='outline-btn inline-block ' >Contact-me</a>
                      
                      </div>
                      <div className='flex  gap-8 text-3xl'>
                         <a href="https://github.com/kharola97" className='outline-btn inline-block ' target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub/></a>
                        <a href="https://www.linkedin.com/in/ankit-kharola-3a7514190/" className='outline-btn inline-block' target="_blank" rel="noopener noreferrer" title="LinkediN" ><FaLinkedinIn/></a>
                      </div>
                 </div>
             </div>
           </div> 
       </section>
    
    </>
  )
}

export default Resume