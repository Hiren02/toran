"use client"
import Image from 'next/image'
import React from 'react'
import CartImage from '../../public/Images/cart.png'
import Select from "react-dropdown-select";
export default function Booking() {
  const uniqueList = [
    {
      id: "1",
      name: "Cricket"
    },
    {
      id: "2",
      name: "Football"
    },
    {
      id: "3",
      name: "Basketball"
    }
  ]
  return (
    <div>
      <div class="flex justify-center ">
        <div class="w-4/5 my-5 mx-auto flex bg-gray-100 flex-col items-center md:flex-row ">
          <div class="border w-[70%] h-full  text-orange-400 p-10"> <span>
            <h1 class="text-3xl font-semibold text-center mb-4 text-orange-400">Confirm Your Booking</h1>
            {/* <p class="text-xs font-normal mt-2 text-center">Contact us by filling this contact form. </p> */}
          </span>
            <form action="">
              <div class="mb-4">
                <label class="block text-orange-400 text-sm font-bold mb-2" for="name">
                  Name
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Text input" />
              </div>
              <div class="mb-4">
                <label class="block uppercase tracking-wide text-orange-400 text-xs font-bold mb-2" for="grid-state">
                  Subject
                </label>
                <div class="relative">
                  <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option className='text-black'>Cricket</option>
                    <option className='text-black'>Football</option>
                  </select>
                </div>
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  Message
                  <textarea class="shadow form-textarea mt-1 block border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="5" placeholder="Textarea"></textarea>
                </label>
              </div>
              <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div
            class="border w-[70%] md:w-[40%] bg-gray-100 items-center flex flex-col justify-center leading-7 space-y-8 p-8 h-full">
            <Image src={CartImage} alt="Cart" class="" />
            <h3 class="text-black">Your Cart is empty</h3>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  )
}
