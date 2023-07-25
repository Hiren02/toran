"use client"
import Image from 'next/image'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import React, { useEffect, useState } from 'react'
import CartImage from '../../public/Images/cart.png'
import { Controller, useForm } from 'react-hook-form';
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import RulesModal from '@/components/RulesModel/page';
import axios, { Axios } from 'axios'

export default function Booking() {
  const { control } = useForm()
  const [show, setShow] = useState(false)
  const onShowModal = () => {
    setShow(true)
  }
  const onHideModal = () => {
    setShow(false)
  }
  const [dates, setDate] = useState(new Date(Date.now()));
  const [timeSlot, settimeslot] = useState([]);
  useEffect(() => {
    (async () => {
      const selectedDate = new Date(dates);
      const day = String(selectedDate.getDate()).padStart(2, '0');
      const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
      const year = selectedDate.getFullYear();
      const convertedDate = `${day}/${month}/${year}`;

      const getDetails = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}getslot`, { date: convertedDate });
      if (getDetails && getDetails.data && getDetails.data.length > 0) {
        settimeslot(getDetails.data);
      }
      else {
        settimeslot([]);
      }
    })()
  }, [dates]);


  const patientLoginFormSchema = yup.object({
    sports: yup.string().required("Sports is required"),
    date: yup.string().required("date is required"),
    slot: yup.string().required("slot is required"),
  }).required()

  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(patientLoginFormSchema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }
  var array = [];
  var arr = array
  const selectedSlot = (slot, price, index) => {
    let element = document.getElementsByClassName('slots');
    let computedColor = getComputedStyle(element[index]).backgroundColor;
    if (computedColor === 'rgb(253, 186, 116)' || computedColor === '#fdba74') {
      element[index].style.backgroundColor = 'white';
      console.log(array)
      arr = array.filter(item => item == slot);
      console.log(array)
    } else {
      element[index].style.backgroundColor = '#FDBA74';
      array.push(slot);
      console.log(array)
    }
  }
  return (
    <div className='pt-36 pb-36'>
      <div className="flex justify-center h-100">
        <div className="w-full lg:w-4/5 my-5 mx-auto flex bg-gray-100 flex-col items-center md:flex-row ">
          <div className="border w-full h-full  text-orange-500 p-10 "> <span>
            <h1 className="text-3xl font-semibold text-center mb-4 text-orange-400 pt-3">Confirm Your Booking</h1>
            {/* <p className="text-xs font-normal mt-2 text-center">Contact us by filling this contact form. </p> */}
          </span>
            <form onSubmit={handleSubmit(onSubmit)} >
              <div className='sm:flex'>
                <div className='w-full sm:w-[calc(100%_-_130px)]'>
                  <div className='mt-5'>
                    <div className='grid-cols-1 gap-x-4 md:grid-cols-2'>
                      <div className='col-span-6'>
                        <div className='mb-4'>
                          <label className='pl-4 text-md'>Select Sports</label>
                          {/* <div className='rounded-xl pt-8 border-spacing-3 px-2 py-2 w-full border-2 border-midextralightgray'> */}
                          <select id="countries" className="text-black mt-1 rounded-xl border-spacing-3 px-2 py-2 w-full border-2 border-midextralightgray">
                            <option defaultValue={"Cricket"} className='text-black' >Cricket</option>
                            <option value="US">Football</option>
                          </select>
                          {/* </div> */}
                        </div>
                      </div>
                      <div className='col-span-6 rounded-2xl'>
                        <div className='mb-4'>
                          <label className='pl-4 text-md'>Select Date</label>

                          <DatePicker
                            className="datePicker_custom w-full datePick"
                            onChange={(date) => {
                              const d = new Date(date)
                              setDate(d);
                            }}
                            value={dates ? dates : new Date(Date.now())}
                            clearIcon={null}
                            format="dd/MM/y"
                            dayPlaceholder="DD"
                            monthPlaceholder="MM"
                            yearPlaceholder="YYYY"
                            // calendarIcon={<DateIc />}
                            showNavigation={true}
                            minDate={new Date(Date.now())}
                          />
                        </div>
                      </div>
                      <div className='col-span-4'>
                        <div className='mb-4'>
                          <label className='pl-4 pb-3 text-md'>Time slot</label>
                          <div className='rounded-xl flex items-center flex-wrap p-1 border-spacing-3 w-full border-2 border-midextralightgray'>
                            {/* <select multiple> */}
                            {/* <span className='bg-white text-black border-gray-400 border-2   rounded-xl p-2 m-1'>10-11 PM</span> */}
                            {timeSlot && timeSlot.length > 0 ? timeSlot.map((data, index) => {
                              let { slot, price } = data || {};
                              slot = slot ? slot : ""
                              price = price ? price : ""
                              return (

                                <div key={index} className="customCunltCheckbox relative mb-2 mr-2 last:mr-0">
                                  <input
                                    type="checkbox"
                                    value={index}
                                    className="checkboxCunltInput absolute left-0 right-0 top-0 bottom-0 h-full w-full cursor-pointer opacity-0"
                                    // onChange={(e) => handleOnClick(e)}
                                    // checked={id ? symptId.includes(Number(id)) : false}
                                    onClick={() => { selectedSlot(slot, price, index) }}
                                  />
                                  <div className="checkboxCunltLabel flex items-center justify-center rounded-3xl bg-xsextralightgray px-1 py-1 text-xs" >
                                    <span id={index} className='slots border-2 border-orange-300 text-lg p-1 m-1 text-black bg-white rounded-xl' >
                                      {slot}<br></br>
                                      ₹{price}
                                    </span>
                                  </div>
                                </div>)
                            }) : <>no available slots</>}


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
              <label className='font-bold pr-6 text-xl text-black'>Sports: </label>
              <span className='text-xl p-1 text-black'>Cricket</span>
            </div>
            <div>
              <label className='font-bold text-xl text-black'>Date: </label>
              <span className='text-xl p-1 pl-2 text-black ' >30/06/2023</span>
            </div>
            <div>
              <label className='font-bold pr-6 text-xl text-black'>Time: </label>
              <span className='text-xl p-1 text-black'>10-11 PM</span>
            </div>
            <div>
              <label className='font-bold pr-6 text-xl text-black'>Total Price: </label>
              <span className='text-xl  p-1 text-black'>₹ 500</span>
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
