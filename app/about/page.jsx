"use client"
import React from 'react'
import cricketImage from '../../public/Images/cricket.jpeg'
import swimmingImage from '../../public/Images/swimming.jpeg'
import footballImage from '../../public/Images/football.jpeg'
import Image from 'next/image'
const About = () => {
  return (
    <div className="flex justify-center pt-36 pb-24 bg-blue-50">
      <div className="flex flex-col max-w-7xl justify-center items-center">
        <div className="overflow-hidden w-3/4 bg-white m-6 p-6 shadow-lg flex flex-col md:flex-row justify-center shadow-gray-600  rounded-xl">
          <div className="h-26 w-full overflow-hidden"> <Image width={'100%'} height={'100%'} src={cricketImage}
            alt="cricket" className="" /> </div>
          <div className="grid p-2">
            <div className="font-bold text-lg text-black m-2 mt-10">In cricket, every player's journey is a story waiting to be told, and every match is a chapter that adds depth and meaning to the narrative of the sport.</div>
            <div className="text-gray-500 m-2 text-sm text-end">- Harsha Bhogle</div>
          </div>
        </div>
        <div className="overflow-hidden w-3/4 bg-white m-6 p-6 shadow-lg flex flex-col md:flex-row justify-center shadow-green-500 rounded-xl">
          <div className="grid p-2">
            <div className="font-bold text-lg text-black m-2 mt-10">Football is a canvas of emotions, where joy, heartbreak, and euphoria are painted in every goal and save </div>
            <div className="text-gray-500 m-2text-end text-sm">- lan Darke, British football commentator.</div>
          </div>

          <div className="h-26 w-full overflow-hidden">
            <Image src={footballImage}
              alt="Football" className="" /> </div>

        </div>
        <div className="overflow-hidden w-3/4 bg-white m-6 p-6 shadow-lg flex flex-col md:flex-row justify-center shadow-orange-400 rounded-xl">
          <div className="h-26 w-full overflow-hidden"> <Image src={swimmingImage} alt="Swimming"
            className="" /> </div>
          <div className="grid p-2">
            <div className="font-bold text-lg text-black m-2 mt-10">In the water, time stands still, and the rhythm of my heartbeat aligns with the rhythm of the waves in pool.</div>
            <div className="text-gray-500 m-2 text-end text-sm">-Michael phelps</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
