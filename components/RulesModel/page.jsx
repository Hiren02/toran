'use client'
import { Fragment, useState } from 'react'
import { sha256 } from 'crypto-hash';
import axios from 'axios';
import * as yup from 'yup'
import { Dialog, Transition } from '@headlessui/react'
import { XCloseIcn } from './Icon/page'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Script from 'next/script';

const RulesModal = ({ onHideModal, totalprice, final_slot, final_sport, final_date, }) => {

  const [isOpenFeedBackModal, setIsOpenFeedBackModal] = useState(true)

  const onClose = () => {
    setIsOpenFeedBackModal(false)
    onHideModal()
  }
  const Schema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Please enter a valid email address").required("Email is required"),
    mobile_number: yup.string().max(10).required("Number is required"),
  }).required()

  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(Schema),
  })

  const onSubmit = async (data) => {
    const merchantTransactionId = (Math.random()).toString(36).slice(2);
    const merchantUserId = Math.random().toString(36).slice(2)

    let newData = data
    newData.price = totalprice,
      newData.slot = final_slot,
      newData.sport = final_sport,
      newData.date = final_date;
    newData.merchantTransactionId = merchantTransactionId
    newData.merchantUserId = merchantUserId

    const obj = {
      merchantId: process.env.NEXT_PUBLIC_MERCHANT_ID,
      merchantTransactionId: merchantTransactionId,
      merchantUserId: merchantUserId,
      amount: totalprice * 100,
      redirectUrl: process.env.NEXT_PUBLIC_BASE_URL,
      redirectMode: "POST",
      mobileNumber: data.mobile_number,
      callbackUrl: process.env.NEXT_PUBLIC_BASE_URL,
      paymentInstrument: {
        type: "PAY_PAGE"
      }
    }

    const base64 = btoa(JSON.stringify(obj))
    let sha = await sha256(base64 + "/pg/v1/pay" + process.env.NEXT_PUBLIC_SALT_KEY)
    sha = sha + "###1"
    let newsha = await sha256(`/pg/v1/status/${process.env.NEXT_PUBLIC_MERCHANT_ID}/${merchantTransactionId}` + process.env.NEXT_PUBLIC_SALT_KEY) + "###1"
    const payload = {
      sha, base64, merchantTransactionId, newsha
    }
    const responce = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}pay`, payload)
    if (responce && responce.data && responce.data.success === true) {
      const userDetails = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}userDetails`, newData)
      if (userDetails && userDetails.data && userDetails.data._id && userDetails.status === 200) {
        localStorage.setItem('this', merchantTransactionId)
        localStorage.setItem('this2', sha)
        window.location.href = responce.data.data?.instrumentResponse?.redirectInfo?.url ? responce.data.data?.instrumentResponse?.redirectInfo?.url : ""
      } else {

      }
    } else {

    }

    onClose()
  }
  return (
    <>
      <Script src="https://js.instamojo.com/v1/checkout.js"></Script>
      <Transition appear show={isOpenFeedBackModal} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={() => null}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-2xl transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <button
                      type="button"
                      className="absolute right-4 top-4 focus:outline-none"
                      onClick={onClose}
                    >
                      <XCloseIcn className='w-6 h-6' />
                    </button>
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-bold text-center text-black"
                    >
                      Rules
                    </Dialog.Title>
                    <div className="mt-5">
                      <div className='py-5 sm:flex'>
                        <div className='mr-8 mb-4'>
                        </div>
                        <div className='patient-details sm:w-[calc(100%_-_104px)] text-center border-b-2 border-midextralightgray'>
                          <div className='flex mb-1 mt-3 w-full'>
                            <div className='text-semilightgray pt-2 pr-3 w-1/3 text-base md:text-lg text-black'>Name</div>
                            <input {...register("name")} type='text' className='p-2 rounded-lg' ></input>
                            {/* <div className='font-bold w-2/3 text-base md:text-lg'></div> */}
                          </div>
                          {errors.name && <span className='text-red-700 ' >{errors.name.message}</span>}
                          <div className='flex mb-1 mt-3 w-full'>
                            <div className='text-semilightgray pr-3 w-1/3 text-base md:text-lg text-black'>Email</div>
                            <input {...register("email")} type='text' className='p-2 rounded-lg'></input>
                          </div>
                          {errors.email && <span className='text-red-700' >{errors.email.message}</span>}
                          <div className='flex mb-1 mt-3 w-full'>
                            <div className='text-semilightgray pr-3 w-1/3 text-base md:text-lg text-black'>Mobile Number</div>
                            <input {...register("mobile_number")} maxLength={10} type='text' className='p-2 rounded-lg'></input>
                          </div>
                          {errors.mobile_number && <span className='text-red-700' >{errors.mobile_number.message}</span>}
                        </div>
                      </div>
                    </div>
                    <div className='pl-24 md:pl-64'>
                      <button className='text-center bg-orange-400 border-2 text-xl rounded-xl p-2 m-1' type="submit" >Continue</button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition >
    </>
  )
}

export default RulesModal