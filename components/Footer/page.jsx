"use client"
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-900 w-full fixed bottom-0 bottom-footer p-3 flex flex-col text-center pt-6 space-y-8 md:flex-row md:justify-between md:space-y-0">
      <div className=" sm:flex flex-row mx-3 justify-between sm:space-x-20 md:flex-row text-gray-200 md:space-x-22 md:ml-20 lg:ml-20 lg:space-x-[4rem] xl:space-x-54 xl:ml-24">
        <p className='text-xs sm:text-sm'>@ Copyright <strong className="text-orange-400 p-1">MCBYSTAR FUN N FOOD LLP </strong>All Rights Reserved</p>
        <hr />
        <p className='text-xs sm:text-sm'><strong className="text-orange-400 p-1">Created by </strong>Hiren - 9484462682</p>
        <hr />
        <p className='text-xs sm:text-sm'>Contact us - <span className="text-orange-400 p-1">6356000057</span></p>
      </div>
    </div>
  )
}

export default Footer
