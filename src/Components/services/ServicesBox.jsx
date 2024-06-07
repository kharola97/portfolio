import React from 'react'
import { AiFillLayout } from "react-icons/ai";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { AiFillApi } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa";


const services = [
    {
        name: "Full-Stack Web Development",
        description:
          "From crafting robust server-side architectures with Express.js and Node.js to designing intuitive user interfaces with React.js, I excel in delivering end-to-end solutions that drive engagement and meet business objectives",
        image: "https://picsum.photos/200/300",
        icon: <AiFillLayout className="text-4xl" />,
        bgColor: "bg-blue-500/70",
      },
      {
        name: "Responsive Web Design",
        description:
          "As a novice developer, I prioritize creating visually appealing and functional websites that adapt seamlessly to various screen sizes and devices. Dedicated to ensuring optimal user experiences across platforms through responsive design principles.",
        image: "https://picsum.photos/200/301",
        icon: <MdOutlinePhoneAndroid className="text-4xl" />,
        bgColor: "bg-lime-500/70",
      },
      {
        name: "Version Control and Collaboration",
        description:
          "Proficient in utilizing version control systems like Git to collaborate effectively with team members, ensuring seamless integration of code changes and fostering a cohesive development environment.",
        image: "https://picsum.photos/200/302",
        icon: <HiMiniComputerDesktop className="text-4xl" />,
        bgColor: "bg-fuchsia-500/70",
      },
      {
        name: "API Development and Integration",
        description:
          "As a budding developer, I specialize in crafting RESTful APIs with Node.js, proficiently integrating them into front-end applications using React.js. Committed to enhancing user experiences through seamless data exchange and functionality.",
        image: "https://picsum.photos/200/303",
        icon: <AiFillApi className="text-4xl" />,
        bgColor: "bg-orange-500/70",
      },
      {
        name: "Database Design and Management",
        description:
          "As an emerging developer, I possess a foundational understanding of MongoDB and proficiently design and manage databases to ensure efficient data storage and retrieval. Committed to learning and implementing best practices for scalable and secure data management",
        image: "https://picsum.photos/200/304",
        icon: <FaDatabase className="text-4xl" />,
        bgColor: "bg-green-500/70",
      },
]

const ServicesBox = () => {
  return (
    <>
        <section id='services' className='my-10 container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {services.map(({name, description,image,icon,bgColor})=>(
                   <div key={name} style={{backgroundImage : `url(${image})`}} className={`${bgColor} rounded-xl text-white  bg-cover bg-center bg-no-repeat bg-blend-overlay`}>
                        <div className='p-3 md:p-16 backdrop-blur-sm space-y-3 rounded-xl'>
                            {icon}
                            <h1 className='text-2xl font-bold'>{name}</h1>
                            <p className='font-bold'>{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}

export default ServicesBox