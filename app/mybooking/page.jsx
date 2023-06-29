"use client"
import React from 'react'
import img1 from '../../public/Images/1.png'
import Image from 'next/image'
export default function page() {
    return (
        <>
            <section className="text-gray-600 body-font bg-white overflow-hidden">
                <div className="container px-5 py-10 mx-auto bg-gray-200">
                    <div className="-my-8 divide-y-2 divide-gray-100">
                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span className="font-semibold title-font text-gray-700"><Image src={img1} alt='QR code'/></span>
                                <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                            </div>
                            <div className="md:flex-grow">
                                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2"><b>Sport :</b></h2>
                                <p className="leading-relaxed"><b>Time :</b> 6 PM - 7 PM</p>
                                <p className="leading-relaxed"><b>Date :</b> 29-06-2023</p>
                                <p className="leading-relaxed"><b>Location :</b> Behid Shell Petrol Pump, Near D-Mart, Ahmedabad Highway, Palanpur, Gujarat</p>
                                <p className="leading-relaxed"><b>Transacation ID :</b> 468464694616343</p>
                                <p className="leading-relaxed"><b>Booking No :</b> 10</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
