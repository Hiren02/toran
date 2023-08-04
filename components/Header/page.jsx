"use client"
import React from 'react'
import myimg from '../../public/img/logo.jpg'
import Image from 'next/image'
export default function Header() {
  return (
    <nav className="bg-orange-400 fixed w-full z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <a href='/'> <Image className="block h-14 w-28 lg:hidden " src={myimg} alt="Your Company" /></a>
              <a href='/'> <Image className="hidden h-14 w-28 lg:block" src={myimg} alt="Your Company" /></a>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
            <div className="flex flex-shrink-0 items-center">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a href="/about" className="text-gray-800 hover:bg-cyan-100 hover:text-black rounded-md px-3 py-2 text-sm font-medium">About</a>
                  <a href="/sports" className="text-gray-800 hover:bg-cyan-100 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Book</a>
                  <a href="/#contactus" className="text-gray-800 hover:bg-cyan-100 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-1 flex justify-center">
          {/* <a href="/" className="text-gray-800 hover:bg-cyan-100 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Home</a> */}
          <a href="/about" className="text-gray-800 mt-1 hover:bg-cyan-100 hover:text-black rounded-md px-3 py-2 text-sm font-medium">About</a>
          <a href="/sports" className="text-gray-800 hover:bg-cyan-100 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Book</a>
          <a href="/#contactus" className="text-gray-800 hover:bg-cyan-100 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Contact</a>
        </div>
      </div>
    </nav>
  )
}
