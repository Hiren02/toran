'use client'
import { Fragment, useState } from 'react'
import { sha256 } from 'crypto-hash';
import axios from 'axios';
import * as yup from 'yup'
import { Dialog, Transition } from '@headlessui/react'
import { XCloseIcn } from './Icon/page'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const RulesModal = ({ onHideModal, conFees, totalprice, final_slot, final_sport, final_date, }) => {

  const [isOpenFeedBackModal, setIsOpenFeedBackModal] = useState(true)

  const onClose = () => {
    setIsOpenFeedBackModal(false)
    onHideModal()
  }
  const Schema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Please enter a valid email address").required("Email is required"),
    mobile_number: yup.number().max(10).min(10).required("Number is required"),
  }).required()

  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(Schema),
  })

  const onSubmit = async (data) => {
    const merchantTransactionId = (Math.random()).toString(36).slice(2);
    const merchantUserId = Math.random().toString(36).slice(2)
    // Need later
    // const grantTotal = Number(totalprice.toFixed(2)) + Number(conFees)

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
      amount: totalprice,
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
        window.location.href = responce.data.data?.instrumentResponse?.redirectInfo?.url ? responce.data.data?.instrumentResponse?.redirectInfo?.url : ""
      } else {

      }
    } else {

    }

    onClose()
  }
  const hadleKey = (key) => {
    const keyPressed = key.key;
    if (!/^[0-9]$/.test(keyPressed)) {
      key.preventDefault();
    }
  }
  return (
    <>
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
                      <XCloseIcn className='w-6 text-black h-6' />
                    </button>
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-bold text-center text-black"
                    >
                      Rules
                      <br />
                      <span className='font-bold'>Violation of the below rules will result in a fine of 1000 rupees.</span>
                    </Dialog.Title>
                    <div className="mt-5">
                      <div className='py-5 sm:flex'>
                        <div className='mr-8 mb-4'>
                        </div>
                        <div className='patient-details sm:w-[calc(100%_-_104px)] text-center border-b-2 border-midextralightgray'>
                          <div className='flex text-left text-black w-full'>
                            1. Payment will not be refunded after booking.
                            <br />
                            2. Smoking and pan masala are strictly prohibited.
                            <br />
                            3. No pitching or spitting anywhere in the property.
                            <br />
                            4. Don't tamper with the lawn, nets.
                            <br />
                            5. Max of 14 players allowed inside in booking.
                            <br />
                            6. Team should only play with lawn tennis ball.
                            <br />
                            7. You have to vacate the ground immediately after time ends.
                            <br />
                          </div>
                          <div className='flex-row sm:flex mb-1 mt-3 w-auto sm:w-full'>
                            <div className='text-semilightgray pr-0.5 pt-2 sm:pr-3 w-1/3 text-base md:text-lg text-black'>Name</div>
                            <input {...register("name")} type='text' className='p-2 rounded-lg' ></input>
                          </div>
                          {errors.name && <span className='text-red-700 ' >{errors.name.message}</span>}
                          <div className=' flex-row sm:flex mb-1 mt-3 w-full'>
                            <div className='text-semilightgray pr-0.5 sm:pr-3 w-1/3 text-base md:text-lg text-black'>Email</div>
                            <input {...register("email")} type='text' className='p-2 rounded-lg'></input>
                          </div>
                          {errors.email && <span className='text-red-700' >{errors.email.message}</span>}
                          <div className='flex-row sm:flex mb-1 mt-3 w-full'>
                            <div className='text-semilightgray pr-0.5 sm:pr-3 w-1/3 text-base md:text-lg text-black'>Mob. No</div>
                            <input {...register("mobile_number")} onKeyPress={(e) => { hadleKey(e) }} minLength={10} maxLength={10} type='text' className='p-2 rounded-lg'></input>
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