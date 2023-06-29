"use client"
import React from 'react'
import cricketImage from '../../public/Images/cricket.jpeg'
import swimmingImage from '../../public/Images/swimming.jpeg'
import footballImage from '../../public/Images/football.jpeg'
import Image from 'next/image'
const About = () => {
  return (
    <div className="flex justify-center pt-36 pb-24">
      <div className="flex flex-col max-w-7xl justify-center items-center">
        <div className="overflow-hidden w-3/4 bg-white m-6 p-6 shadow-lg flex flex-col md:flex-row justify-center shadow-gray-600  rounded-xl">
          <div className="h-26 w-full overflow-hidden"> <Image width={'100%'} height={'100%'} src={cricketImage}
            alt="cricket" className="" /> </div>
          <div className="grid p-2">
            <div className="font-bold text-lg text-black m-2 mt-10">Love is like wildflowers; it is often found in the
              most unlikely places. </div>
            <div className="text-gray-500 m-2 text-sm"><a href="">Flowers are a beautiful way to show your appreciation
              for someone. They are also a great way to show your love. Flowers can be delivered in a variety
              of ways, including through mail, messenger, or even in person.</a></div>
          </div>
        </div>
        <div className="overflow-hidden w-3/4 bg-white m-6 p-6 shadow-lg flex flex-col md:flex-row justify-center shadow-cyan-500/50 rounded-xl">
          <div className="grid p-2">
            <div className="font-bold text-lg text-black m-2 mt-10">However alert we are, antiquity remains an unknown,
              unanticipated galaxy. </div>
            <div className="text-gray-500 m-2 text-sm"><a href="">The Universe is a vast and ever-expanding place. It is
              composed of an estimated 100 billion galaxies, each with billions of stars. It is estimated that
              there are as many as 100 billion galaxies in the observable universe. </a></div>
          </div>
          <div className="h-26 w-full overflow-hidden"> <Image src={swimmingImage} alt="Swimming"
            className="" /> </div>
        </div>
        <div className="overflow-hidden w-3/4 bg-white m-6 p-6 shadow-lg flex flex-col md:flex-row justify-center shadow-orange-400 rounded-xl">
          <div className="h-26 w-full overflow-hidden"> <Image src={footballImage}
            alt="Football" className="" /> </div>
          <div className="grid p-2">
            <div className="font-bold text-lg text-black m-2 mt-10">It is the friends you can call up at 4 a.m. that
              matter. </div>
            <div className="text-gray-500 m-2 text-sm"><a href="">The bond of friendship is one that is often unspoken
              and unrivaled. It is a relationship that is founded on mutual respect and understanding.
              Friendship is something that can be found in all walks of life, and is often the foundation of a
              successful life. </a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
