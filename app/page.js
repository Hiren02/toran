'use client'
import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';
import img1 from '../public/Images/1.png'
import img2 from '../public/Images/2.png'
import img3 from '../public/Images/3.png'
import img4 from '../public/Images/4.png'
import img5 from '../public/Images/5.svg'
import myimg from '../public/img/logo.jpg'

import Image from 'next/image';
export default function Home() {
    const typedElementRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedElementRef.current, {
            strings: ["Cricket", "Swimming", "Gym", "food"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <>
            <section className="home" id="home">
                <div className="max-width">
                    <div className="home-content mt-12">
                        <div className="text-1">Life's symphony plays <br /> beautifully with</div>
                        <div className="text-2 text-orange-400"><span className="typing" ref={typedElementRef}></span></div>
                        <div className="text-3">By
                            <span className="text-black font-extrabold"> {process.env.NEXT_PUBLIC_PROJECT_NAME}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full mt-1 p-10 lg:-mt-3 bg-white js-show-on-scroll">
                <div className="undefined items-center w-full   my-0 text-xl font-bold space-x-8 md:space-x-16 pl-4 flex flex-row  md:text-3xl">
                    <div className="w-1 h-12 pl-1 rounded-md bg-orange-400">
                    </div>
                    <span className='text-black'>Your platform for sports</span>
                </div>
            </section>

            <section className=" relative flex flex-col items-center justify-start w-full p-4 mb-auto rounded-md md:justify-center md:px-4 lg:px-16 md:pt-4 md:pb-16 bg-refSecondary">
                <div className="flex flex-col items-center justify-start w-full md:justify-center md:flex-row ">
                    <div className="flex flex-col items-start w-full my-2 space-y-6 md:my-4 lg:space-y-12 md:items-center ">
                        <div className="flex flex-row items-center justify-start space-x-4">
                            <div className="relative w-16 h-16 md:w-24 md:h-24">
                                <span style={{
                                    boxSizing: 'border-box',
                                    display: 'block',
                                    overflow: 'hidden',
                                    width: 'initial',
                                    height: 'initial',
                                    background: 'none',
                                    opacity: 1,
                                    border: 0,
                                    margin: 0,
                                    padding: 0,
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0
                                }}>
                                    <Image src={img1} alt='icons' />
                                </span>
                            </div>
                            <div className="font-semibold leading-6 md:leading-8 text-sm md:text-[18px] lg:text-[20px] md:w-60 text-on_surface">Play with players around you</div>
                        </div>
                        <div className="flex flex-row items-center justify-start space-x-4">
                            <div className="relative w-16 h-16 md:w-24 md:h-24">
                                <span style={{
                                    boxSizing: 'border-box',
                                    display: 'block',
                                    overflow: 'hidden',
                                    width: 'initial',
                                    height: 'initial',
                                    background: 'none',
                                    opacity: 1,
                                    border: 0,
                                    margin: 0,
                                    padding: 0,
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0
                                }}>
                                    <Image src={img2} alt='icons' />
                                </span>
                            </div>
                            <div className="font-semibold leading-6 md:leading-8 text-sm md:text-[18px] lg:text-[20px] md:w-60 text-on_surface">Skill-up your game</div>
                        </div>
                    </div>
                    <div className="relative items-center justify-center hidden w-full lg:flex">
                        <span style={{
                            boxSizing: 'border-box',
                            display: 'inline-block',
                            overflow: 'hidden',
                            width: 'initial',
                            height: 'initial',
                            background: 'none',
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: 'relative',
                            maxWidth: '100%'
                        }}>
                            <span style={{
                                boxSizing: 'border-box',
                                display: 'block',
                                width: 'initial',
                                height: 'initial',
                                background: 'none',
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                maxWidth: '100%'
                            }}>
                                <Image src={img5} alt='icons' />
                            </span>
                        </span>
                    </div>
                    <div className="flex flex-col items-start w-full my-4 space-y-6 lg:space-y-12 md:items-center ">
                        <div className="flex flex-row items-center justify-start space-x-4">
                            <div className="relative w-16 h-16 md:w-24 md:h-24">
                                <span style={{
                                    boxSizing: 'border-box',
                                    display: 'block',
                                    overflow: 'hidden',
                                    width: 'initial',
                                    height: 'initial',
                                    background: 'none',
                                    opacity: 1,
                                    border: 0,
                                    margin: 0,
                                    padding: 0,
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0
                                }}>
                                    <Image src={img3} alt='icons' />
                                </span>
                            </div>
                            <div className="font-semibold leading-6 md:leading-8 text-sm md:text-[18px] lg:text-[20px] md:w-60 text-on_surface">Book sporting events</div>
                        </div>
                        <div className="flex flex-row items-center justify-start space-x-4">
                            <div className="relative w-16 h-16 md:w-24 md:h-24">
                                <span style={{
                                    boxSizing: 'border-box',
                                    display: 'block',
                                    overflow: 'hidden',
                                    width: 'initial',
                                    height: 'initial',
                                    background: 'none',
                                    opacity: 1,
                                    border: 0,
                                    margin: 0,
                                    padding: 0,
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0
                                }}>
                                    <Image src={img4} alt='icons' />
                                </span>
                            </div>
                            <div className="font-semibold leading-6 md:leading-8 text-sm md:text-[18px] lg:text-[20px] w-56 md:w-60 text-on_surface">Manage your sports activities &amp; groups</div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="project pb-6 bg-white">
                <div className="flex justify-center bg-white z-auto pt-20 mb-14" id="projectcard">
                    <div className="container1  bg-gray-200 flex flex-wrap justify-center pt-10 w-auto rounded-2xl">
                        <div className="card1 bg-sky-100">
                            <div className="box1 bg-orange-400">
                                <div className="content1 bg-orange-400">
                                    <h3>Cricket / FootBall</h3>
                                    <p><span className='text-2xl'>Swinging the bat with finesse</span></p>
                                    <a href="/sports">Book Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="card1 bg-sky-100">
                            <div className="box1">
                                <div className="content1">
                                    <h3>Swimming Pool</h3>
                                    <p><span className='text-2xl'>diving into clear waters</span></p>
                                    <a href="">Comming soon...</a>
                                </div>
                            </div>
                        </div>
                        <div className="card1 bg-sky-100">
                            <div className="box1">
                                <div className="content1">
                                    <h3>Food</h3>
                                    <p><span className='text-2xl'>savoring culinary delights</span></p>
                                    <a href="">Comming soon...</a>
                                </div>
                            </div>
                        </div>

                        <div className="card1 bg-sky-100">
                            <div className="box1">
                                <div className="content1 p-1">
                                    <h3>Open Gym</h3>
                                    <p><span className='text-2xl'>lifting iron with purpose</span></p>
                                    <a href="">Comming soon...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center pt-2 pb-24 bg-blue-50" id='contactus'>
                <div className="flex flex-col max-w-7xl justify-center items-center">
                    <div className="overflow-hidden w-3/4 bg-white m-6 p-6 shadow-lg flex flex-col md:flex-row justify-center shadow-gray-600  rounded-xl">
                        <div className="h-26 w-52 overflow-hidden"><Image width={'100%'} height={'100%'} src={myimg}
                            alt="cricket" className="" /> </div>
                        <div className="grid p-2">
                            <div className="font-bold text-lg text-black m-2 ">Address : Behind Shell Petrol Pump, Near D-Mart, Ahmedabad Highway, Palanpur, Gujarat </div>

                            <div className=" m-2 text-sm"><span className='font-bold text-xl text-black'>Mobile :</span><span className=' text-orange-600 text-xl'> 6356000057 </span></div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
