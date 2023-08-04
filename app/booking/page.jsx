"use client"
import Image from 'next/image'
import React, { Fragment, useEffect, useState } from 'react'
import CartImage from '../../public/Images/cart.png'
import DatePicker from 'react-date-picker'
import axios from 'axios'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import RulesModal from '@/components/RulesModel/page';

export default function Booking() {
  const [show, setShow] = useState(false)

  const onHideModal = () => {
    setShow(false)
  }
  const [dates, setDate] = useState(new Date(Date.now()));
  const [timeSlot, settimeslot] = useState([]);
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [selectedsports, set_selected_sport] = useState("Cricket");
  const [totalprice, setprice] = useState("");
  const [final_slot, set_final_slot] = useState([]);
  const [final_sport, set_final_sport] = useState("");
  const [final_date, set_final_date] = useState();
  const [error, setError] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const getSlotsData = async () => {
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
  }
  useEffect(() => {
    getSlotsData()
  }, [dates]);

  const sportshandler = (e) => {
    set_selected_sport(e.target.value);
  }
  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  };

  const Add_to_Cart = () => {
    const formated_date = formatDate(dates);
    if (formated_date === "" || selectedsports === "" || !selectedSlots.length > 0) {
      setError(true)
    } else {
      setError(false)
      setShowCart(true)
      set_final_date(formated_date);
      set_final_sport(selectedsports);
      set_final_slot(selectedSlots);
      let count = 0;
      selectedSlots.map((data) => {
        count = count + data.price;
      });
      setprice(count);
    }
  }
  const selectedSlot = (slot, price, index) => {
    const element = document.getElementsByClassName('slots')[index];
    const computedColor = getComputedStyle(element).backgroundColor;

    if (computedColor === 'rgb(253, 186, 116)' || computedColor === '#fdba74') {
      element.style.backgroundColor = 'white';
      setSelectedSlots(prevSlots => prevSlots.filter(item => item.slot !== slot));
    } else {
      element.style.backgroundColor = '#FDBA74';
      setSelectedSlots(prevSlots => [...prevSlots, { slot, price }]);
    }
  };

  const proccedToPay = async () => {
    const payload = {
      date: final_date,
      slot: final_slot
    }
    const isAvailable = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}checkAvailableSlot`, payload)
    if (isAvailable && isAvailable.data && isAvailable.data.success === false) {
      setShow(true);
    } else {
      getSlotsData()
      alert("This slot is already book,Please select another slot")
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
            <form >
              <div className='sm:flex'>
                <div className='w-full sm:w-[calc(100%_-_130px)]'>
                  <div className='mt-5'>
                    <div className='grid-cols-1 gap-x-4 md:grid-cols-2'>
                      <div className='col-span-6'>
                        <div className='mb-4'>
                          <label className='pl-4 text-md'>Select Sports</label>
                          {/* <div className='rounded-xl pt-8 border-spacing-3 px-2 py-2 w-full border-2 border-midextralightgray'> */}
                          <select id="countries" className="text-black mt-1 rounded-xl border-spacing-3 px-2 py-2 w-full border-2 border-midextralightgray" onChange={(e) => sportshandler(e)}>
                            {/* <option value="" className='text-black' >Select</option> */}
                            <option value="Cricket" className='text-black' >Cricket</option>
                            <option value="Football">Football</option>
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
                          <label className='pl-4 pb-3 text-md'>Available Time slot</label>
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
              {error && <span className='text-red-700'>please provide valid details</span>}
            </form>
            <div className="mt-6 flex items-center justify-center">
              <button onClick={() => Add_to_Cart()} className="inline-block primary-buttons text-black bg-orange-400 font-bold text-sm bg-primary border border-primary uppercase rounded-2xl px-5 py-3 mr-4 hover:transition-all hover:border-spacing-5 hover:bg-orange-500 lg:text-base "><span className='button-label' >Add to cart</span></button>
            </div>
          </div>
          <div className="border lg:pt-4 w-[70%] md:w-[40%] bg-gray-100 items-center flex flex-col justify-center leading-7 space-y-8 h-full">
            <div>
              <Image src={CartImage} height={70} width={70} alt="Cart" className="rounded-full justify-center" />
              {/* <h2 className='text-orange-400 font-extrabold text-3xl pr-5'> Your cart</h2> */}
            </div>
            {showCart ? <Fragment>
              {/* <h3 className="text-black">Your Cart is empty</h3> */}
              <div>
                <label className='font-bold pr-6 text-xl text-black'>Sports: </label>
                <span className='text-xl p-1 text-black'>{final_sport}</span>
              </div>
              <div>
                <label className='font-bold text-xl text-black'>Date: </label>
                <span className='text-xl p-1 pl-2 text-black ' >{final_date}</span>
              </div>
              <div>
                <label className='font-bold flex-auto pr-2 text-xl text-black'>Time:</label>
                {
                  final_slot.map((data, index) => {
                    return <span key={index} className='text-xl p-1 text-black'>{data.slot + ","}</span>
                  })
                }
              </div>
              <div>
                <label className='font-bold pr-2 text-xl text-black'>Total Price:</label>
                <span className='text-xl  p-1 text-black'>{"₹ " + totalprice}</span>
              </div>
              <div>
                <button className='inline-block primary-buttons text-black bg-orange-400 font-bold text-sm bg-primary border border-primary uppercase rounded-2xl px-5 py-3 mr-4 hover:transition-all hover:border-spacing-5 hover:bg-orange-500 lg:text-base' onClick={() => proccedToPay()}>Procced to pay</button>
              </div>
            </Fragment> : <div className='text-orange-400 text-xl'> Your cart is empty! </div>}
          </div>
        </div>
      </div>
      {show ? <RulesModal totalprice={totalprice} final_slot={final_slot} final_sport={final_sport} final_date={final_date} onHideModal={onHideModal} /> : <></>}
    </div>
  )
}
