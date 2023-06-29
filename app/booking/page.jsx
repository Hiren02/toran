"use client"
import Image from 'next/image'
import React from 'react'
import CartImage from '../../public/Images/cart.png'
import DatePicker from 'react-date-picker'
import Script from 'next/script'
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
    <div className='pt-36 pb-36'>
      <Script src="../path/to/flatpickr.min.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/datepicker.min.js"></Script>
      <div className="flex justify-center h-100">
        <div className="w-4/5 my-5 mx-auto flex bg-gray-100 flex-col items-center md:flex-row ">
          <div className="border w-[70%] h-full  text-orange-500 p-10"> <span>
            <h1 className="text-3xl font-semibold text-center mb-4 text-orange-400">Confirm Your Booking</h1>
            {/* <p className="text-xs font-normal mt-2 text-center">Contact us by filling this contact form. </p> */}
          </span>
            <form>
              <div className='sm:flex'>

                <div className='w-full sm:w-[calc(100%_-_130px)]'>
                  <div className='mt-5'>
                    <div className='grid-cols-1 gap-x-4 md:grid-cols-2'>
                      <div className='col-span-6'>
                        <div className='mb-4'>
                          <label className='pl-4'>Select Sports</label>
                          {/* <div className='rounded-xl pt-8 border-spacing-3 px-2 py-2 w-full border-2 border-midextralightgray'> */}
                          <select id="countries" className="text-black mt-1 rounded-xl border-spacing-3 px-2 py-2 w-full border-2 border-midextralightgray">
                            <option selected className='text-black' >Cricket</option>
                            <option value="US">Football</option>
                            <option value="CA">Swimming</option>
                          </select>
                          {/* </div> */}
                        </div>
                      </div>
                      <div className='col-span-6'>
                        <div className='mb-4'>
                          <label className='pl-4 pb-3'>Select Time slot</label>
                          <div className='rounded-xl pt-8 border-spacing-3 px-2 py-2 w-full border-2 border-midextralightgray'>

                            {/* {appointmentSlotData.length > 0 ? <TimeSlotSlider appointmentSlotData={appointmentSlotData} data={{ ...register("bookAppoiment") }} setAppointmentSlot={setAppointmentSlot} /> : <div className='text-center'>{"No Data Found"}</div>} */}

                          </div>
                        </div>
                      </div>
                      <div className='col-span-3'>
                        <div className='mb-4'>
                          <div className="relative max-w-sm">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input datepicker type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center">
                <button type='submit' className={`inline-block primary-buttons text-black bg-orange-400 font-bold text-sm bg-primary border border-primary uppercase rounded-2xl px-5 py-3 mr-4 hover:transition-all hover:border-spacing-5 hover:bg-orange-500 lg:text-base `}><span className='button-label'>SAVE & SUBMIT</span></button>
              </div>
            </form>
          </div>
          <div
            className="border w-[70%] md:w-[40%] bg-gray-100 items-center flex flex-col justify-center leading-7 space-y-8 p-8 h-full">
            <Image src={CartImage} alt="Cart" className="" />
            <h3 className="text-black">Your Cart is empty</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
