'use client'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XCloseIcn } from './Icon/page'
import { useRouter } from 'next/navigation'

const RulesModal = ({ onHideModal }) => {
  const [isOpenFeedBackModal, setIsOpenFeedBackModal] = useState(true)
  const router = useRouter()
  const onClose = () => {
    setIsOpenFeedBackModal(false)
    onHideModal()
  }
  const onContinue = () => {
    router.push('/mybooking')
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
                  <button
                    type="button"
                    className="absolute right-4 top-4 focus:outline-none"
                    onClick={onClose}
                  >
                    <XCloseIcn className='w-6 h-6' />
                  </button>
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold text-center"
                  >
                    Rules
                  </Dialog.Title>
                  <div className="mt-5">
                    <div className='py-5 sm:flex'>
                      <div className='mr-8 mb-4'>
                      </div>
                      <div className='patient-details sm:w-[calc(100%_-_104px)] border-b-2 border-midextralightgray'>
                        <div className='flex mb-3 w-full'>
                          <div className='text-semilightgray pr-3 w-1/3 text-base md:text-lg'>Rules 1</div>
                          <div className='font-bold w-2/3 text-base md:text-lg'></div>
                        </div>
                        <div className='flex mb-3 w-full'>
                          <div className='text-semilightgray pr-3 w-1/3 text-base md:text-lg'>Rules 2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='pl-24 md:pl-64'>
                    <button className='text-center bg-orange-400 border-2 text-xl rounded-xl p-2 m-1' onClick={onContinue}>Continue</button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default RulesModal