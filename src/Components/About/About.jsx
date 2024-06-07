import React from 'react'
import ProfilePic from "../../assets/profile.jpg"
const About = () => {
  return (
    <>
      <main className='w-full bg-secondary dark:bg-gray-900 dark:text-white'>
        <div className='container grid grid-cols-1 sm:grid-cols-2 items-center space-y-2 py-12 sm:py-0 sm:h-[600px]'>
          <div>
             <div className='space-y-2 grid justify-items-center sm:justify-items-start'>
              <p className='uppercase'>Hello</p>
              <p className='text-4xl md:text-6xl font-bold text-black/75 dark:text-white/80'>I'm Ankit Kharola</p>
              <p className='text-3xl text-gray-900 dark:text-white '> MERN developer </p>
              <p className='text-black/75 dark:text-white/70 text-center sm:text-left'>Building interactive UIs and state management for front-end applications using <span className='text-primary font-bold'>React.js. </span>  Experienced in connecting front-end to robust backends with <span className='text-primary font-bold'>Node.js, Express.js, and MongoDB </span> </p>
              <a href="mailto:akharola4@gmail.com" className='inline-block primary-btn !px-6 !my-3'>Hire Me</a>
             </div>
          </div>
          {/* image container */}
          <div>
            <img src={ProfilePic} alt="Not found" className='w-full md:max-w-lg mx-auto rounded-full shadow-inner border-spacing-11'/>
          </div>
        </div>
      </main>
    </>
  )
}

export default About