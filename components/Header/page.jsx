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

            <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>

              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

              <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
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
                  <a href="#" className="text-gray-800 hover:bg-cyan-100 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Contact Us</a>
                  <a href="/mybooking" className="text-gray-800 hover:bg-cyan-100 hover:text-black rounded-md px-3 py-2 text-sm font-medium">My Booking</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-1 flex justify-center">
          {/* <a href="/" className="text-gray-800 hover:bg-cyan-100 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Home</a> */}
          <a href="/about" className="text-gray-800 hover:bg-cyan-100 hover:text-black rounded-md px-3 py-2 text-sm font-medium">About</a>
          <a href="/sports" className="text-gray-800 hover:bg-cyan-100 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Book</a>
          <a href="#" className="text-gray-800 hover:bg-cyan-100 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Contact</a>
          <a href="/mybooking" className="text-gray-800 hover:bg-cyan-100 hover:text-black rounded-md px-3 py-2 text-sm font-medium">My Booking</a>
        </div>
      </div>
    </nav>
  )
}
