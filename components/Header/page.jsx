import React from 'react'
import myimg from '../../public/img/logo.jpg'
import Image from 'next/image'
export default function Header() {
  return (
    <nav class="bg-orange-400 fixed w-full">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">

            <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span class="sr-only">Open main menu</span>

              <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

              <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <Image class="block h-14 w-28 lg:hidden " src={myimg}  alt="Your Company" />
              <Image class="hidden h-14 w-28 lg:block" src={myimg} alt="Your Company" />
            </div>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
            <div class="flex flex-shrink-0 items-center">
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  <a href="#" class="text-gray-800 hover:bg-cyan-100 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Home</a>
                  <a href="#" class="text-gray-800 hover:bg-cyan-100 hover:text-black rounded-md px-3 py-2 text-sm font-medium">About</a>
                  <a href="#" class="text-gray-800 hover:bg-cyan-100 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Book</a>
                  <a href="#" class="text-gray-800 hover:bg-cyan-100 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Contact Us</a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sm:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pb-3 pt-1 flex justify-center">
          <a href="#" class="text-gray-800 hover:bg-cyan-100 hover:text-black block rounded-md px-3 py-2 text-base font-medium">Team</a>
          <a href="#" class="text-gray-800 hover:bg-cyan-100 hover:text-black block rounded-md px-3 py-2 text-base font-medium">Projects</a>
          <a href="#" class="text-gray-800 hover:bg-cyan-100 hover:text-black block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
        </div>
      </div>
    </nav>
  )
}
