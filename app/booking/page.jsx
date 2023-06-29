"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import CartImage from '../../public/Images/cart.png'
import { Controller, useForm } from 'react-hook-form';
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import RulesModal from '@/components/FeedBackModal/page';

export default function Booking() {
  const { control } = useForm()
  const [show, setShow] = useState(false)
  const onShowModal = () => {
    setShow(true)
  }
  const onHideModal = () => {
    setShow(false)
  }
  return (
    <div className='pt-36 pb-36'>
      <div className="flex justify-center h-100">
        <div className="w-4/5 my-5 mx-auto flex bg-gray-100 flex-col items-center md:flex-row ">
          <div className="border w-[70%] h-full  text-orange-500 p-10"> <span>
            <h1 className="text-3xl font-semibold text-center mb-4 text-orange-400 pt-3">Confirm Your Booking</h1>
            {/* <p className="text-xs font-normal mt-2 text-center">Contact us by filling this contact form. </p> */}
          </span>
            <form>
              <div className='sm:flex'>
                <div className='w-full sm:w-[calc(100%_-_130px)]'>
                  <div className='mt-5'>
                    <div className='grid-cols-1 gap-x-4 md:grid-cols-2'>
                      <div className='col-span-6'>
                        <div className='mb-4'>
                          <label className='pl-4 text-md'>Select Sports</label>
                          {/* <div className='rounded-xl pt-8 border-spacing-3 px-2 py-2 w-full border-2 border-midextralightgray'> */}
                          <select id="countries" className="text-black mt-1 rounded-xl border-spacing-3 px-2 py-2 w-full border-2 border-midextralightgray">
                            <option selected className='text-black' >Cricket</option>
                            <option value="US">Football</option>
                          </select>
                          {/* </div> */}
                        </div>
                      </div>
                      <div className='col-span-6 rounded-2xl'>
                        <div className='mb-4'>
                          <label className='pl-4 text-md'>Select Date</label>
                          <Controller
                            control={control}
                            name='DOB'
                            render={({ field }) => (
                              <DatePicker
                                className="datePicker_custom w-full datePick"
                                onChange={field.onChange}
                                value={field.value}
                                clearIcon={null}
                                format="dd/MM/y"
                                dayPlaceholder="DD"
                                monthPlaceholder="MM"
                                yearPlaceholder="YYYY"
                                // calendarIcon={<DateIc />}
                                showNavigation={true}
                                minDate={new Date(Date.now())}
                              />
                            )}
                          />
                        </div>
                      </div>
                      <div className='col-span-6'>
                        <div className='mb-4'>
                          <label className='pl-4 pb-3 text-md'>Time slot</label>
                          <div className='rounded-xl p-3 border-spacing-3 w-full border-2 border-midextralightgray'>
                            {/* <select multiple> */}
                            {/* {/* <option className='bg-white rounded-xl p-2 m-1'>6-7AM</option> */}
                            <span className='bg-white text-black border-gray-400 border-2   rounded-xl p-2 m-1'>10-11 PM</span>
                            {/* </select> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center">
                <button type='submit' className={`inline-block primary-buttons text-black bg-orange-400 font-bold text-sm bg-primary border border-primary uppercase rounded-2xl px-5 py-3 mr-4 hover:transition-all hover:border-spacing-5 hover:bg-orange-500 lg:text-base `}><span className='button-label'>Add to cart</span></button>
              </div>
            </form>
          </div>
          <div className="border lg:pt-4 w-[70%] md:w-[40%] bg-gray-100 items-center flex flex-col justify-center leading-7 space-y-8 h-full">
            {/* <h3 className="text-black">Your Cart is empty</h3> */}
            <div>
              <Image src={CartImage} height={70} width={70} alt="Cart" className="rounded-full justify-center" />
              <h2 className='text-orange-400 font-extrabold text-3xl pr-5'> Your cart</h2>
            </div>
            <div>
              <label className='font-bold pr-6 text-xl'>Sports: </label>
              <span className='text-xl p-1'>Cricket</span>
            </div>
            <div>
              <label className='font-bold text-xl'>Date: </label>
              <span className='text-xl p-1 pl-2 ' >30/06/2023</span>
            </div>
            <div>
              <label className='font-bold pr-6 text-xl'>Time: </label>
              <span className='text-xl p-1'>10-11 PM</span>
            </div>
            <div>
              <label className='font-bold pr-6 text-xl'>Total Price: </label>
              <span className='text-xl  p-1'>₹ 500</span>
            </div>
            <div>
              <button className='inline-block primary-buttons text-black bg-orange-400 font-bold text-sm bg-primary border border-primary uppercase rounded-2xl px-5 py-3 mr-4 hover:transition-all hover:border-spacing-5 hover:bg-orange-500 lg:text-base' onClick={() => onShowModal()}>Procced to pay</button>
            </div>
          </div>
        </div>
      </div>
      {show ? <RulesModal onHideModal={onHideModal} /> : <></>}
    </div>
  )
}
