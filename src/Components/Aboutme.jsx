import React from 'react'
import aboutmeimg from '../Assets/portfolioaboutmeimg.jpg'

const Aboutme = () => {
  return (
    <>
      <div className='bg-custom-brown flex justify-center items-center h-screen'>
        <div className='lg:mx-[250px] md:mx-[100px] xxsm:mx-[50px] w-auto flex md:flex-row xxsm:flex-col'>
        <div className='w-[40%]'>
          <img className='w-[300px]' src={aboutmeimg} alt="" />
        </div>
        <div className='font-herofont w-[60%]'>
          <h1 className='text-[50px] font-bold'>About Me</h1>
          <p className='leading-7 mt-3'>Hello there👋 My name is Farhan Khan and I'm aiming to be a web developer 👨‍💻. I am currently pursuing my degree in Information technology and have a passion for all things web development. I have experience working with HTML, CSS, JavaScript, and several web development frameworks such as React etc.</p>
          <br />
          <p className='leading-7'>
          Apart from my academic pursuits, I've also been involved in several personal projects, including developing a responsive spotify clone with complete working backend. These projects have allowed me to further hone my skills and provided me with valuable hands-on experience.
          </p>
        </div>
        </div>
      </div>
    </>
  )
}

export default Aboutme
