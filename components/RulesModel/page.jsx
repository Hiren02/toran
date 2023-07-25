'use client'
import { Fragment, useState } from 'react'
import axios from 'axios';
import * as yup from 'yup'
import { Dialog, Transition } from '@headlessui/react'
import { XCloseIcn } from './Icon/page'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const RulesModal = ({ onHideModal }) => {

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
    console.log(data);
    const details = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}userdetails`, data)
    if (details && details?.data && details?.data?.access_token) {

      onClose()
    } else {
      onClose()

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