"use client"
import Image from 'next/image'
import React from 'react'
import slider from '../../public/Images/slider.jpg'
import slider1 from '../../public/Images/slider1.jpeg'
import slider2 from '../../public/Images/slider2.jpeg'
import slider3 from '../../public/Images/slider3.jpeg'
import slider4 from '../../public/Images/slider4.jpeg'
import cric from '../../public/Images/criclet.png'
import football from '../../public/Images/fooot.png'
import { useRouter } from 'next/navigation';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Sports() {
    const router = useRouter()
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 3000

    };
    return (

        <div className="w-full pt-32 pb-28 bg-white px-5">
            <div className="flex flex-col justify-between w-full ">
                <div className="w-full mb-5 border_radius md:hidden bg-surface">
                    <div className="relative overflow-hidden rounded-md h-44 sm:h-300 md:h-400 lg:500">
                        <Slider {...settings} className='c-slider'>
                            <div >
                                <Image src={slider} alt='image'></Image>
                            </div>
                            <div>
                                <Image src={slider1} alt='image'></Image>
                            </div>
                            <div>
                                <Image src={slider2} alt='image'></Image>
                            </div>
                            <div>
                                <Image src={slider3} alt='image'></Image>
                            </div>
                            <div>
                                <Image src={slider4} alt='image'></Image>
                            </div>
                        </Slider>
                        <div className="absolute flex justify-center w-full bottom-2">
                            <div className="rounded-xl cursor-pointer border-white border-2 h-3 my-0 mx-1 w-3 bg-gray-500">
                            </div>
                            <div className="rounded-xl cursor-pointer border-white border-2 h-3 my-0 mx-1 w-3 bg-gray-500">
                            </div>
                            <div className="rounded-xl cursor-pointer border-white border-2 h-3 my-0 mx-1 w-3 bg-gray-500">
                            </div>
                            <div className="rounded-xl cursor-pointer border-white border-2 h-3 my-0 mx-1 w-3 bg-gray-500">
                            </div>
                            <div className="rounded-xl cursor-pointer border-white border-2 h-3 my-0 mx-1 w-3 bg-surface">
                            </div>
                            <div className="rounded-xl cursor-pointer border-white border-2 h-3 my-0 mx-1 w-3 bg-gray-500">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid w-full grid-flow-row-dense grid-cols-3 grid-rows-2 gap-y-1 md:gap-y-0 md:gap-x-5">
                    <div className="w-full col-span-3">
                    </div>
                    <div className="flex items-center w-full col-span-3 md:col-span-2">
                        <div className="flex flex-col w-full sm:items-center sm:justify-start sm:flex-row">
                            <div className=" text-[#0c0c0c] text-md pl-4 text-3xl font-extrabold">{process.env.NEXT_PUBLIC_PROJECT_NAME}</div>
                            <div className="flex flex-row mt-2 md:mt-0 sm:ml-2 sm:mr-8 sm:items-center sm:justify-center">
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
                                    maxWidth: '100%',
                                }}>
                                    {/* <span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%">
                                            <img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e">
                                        </span> */}
                                    {/* <img alt="start-rating" src="https://playo-website.gumlet.io/playo-website-v2/logos-icons/ico+_+24+_+actions+_+star.svg" decoding="async" data-nimg="intrinsic" className="mr-1 " style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" srcset="https://playo-website.gumlet.io/playo-website-v2/logos-icons/ico+_+24+_+actions+_+star.svg 1x, https://playo-website.gumlet.io/playo-website-v2/logos-icons/ico+_+24+_+actions+_+star.svg 2x"> */}
                                </span>
                                <div className="mr-1 ml-2 text-[#515455] text-sm font-semibold">4.8</div>
                                <div className="text-sm text-[#515455] font-medium "> (5 ratings )</div>
                                <div className="ml-2 text-sm font-semibold underline cursor-pointer text-primary">Rate Venue</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row w-full col-span-3 mt-2 space-x-2 md:mt-0 sm:col-span-2 md:col-span-1 ">
                        <div className="flex flex-row items-center justify-start w-full space-x-2">
                            <div className="w-full ">
                                <div>
                                    <button className="text-gray-800 hover:bg-cyan-100 hover:text-black w-full h-12 px-3 py-2 font-semibold  rounded-2xl bg-orange-400" alt="Book now Button" aria-label="Book Now" onClick={() => { router.push('/booking') }}>Book Now</button>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-start w-full space-x-2">
                                <button className="text-gray-800 bg-orange-400 hover:bg-cyan-100 hover:text-black flex items-center justify-center w-full h-12 space-x-2 font-semibold border-2 cursor-pointer hover:bg-surface rounded-2xl border_container" aria-label="Share Button" alt="Share Button"><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 " fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                                    <div> Share</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid w-full grid-cols-1 gap-2 mt-6 md:gap-x-5 md:grid-cols-3">
                <div className="hidden w-full row-span-1 bg-opacity-50 border_radius backdrop-blur-lg bg-surface md:block md:col-span-2 ">
                    <div className="relative overflow-hidden rounded-md h-44 sm:h-300 md:h-400 lg:500">
                        <Slider {...settings} className='c-slider'>
                            <div>
                                <Image src={slider} alt='image'></Image>
                            </div>
                            <div>
                                <Image src={slider1} alt='image'></Image>
                            </div>
                            <div>
                                <Image src={slider2} alt='image'></Image>
                            </div>
                            <div>
                                <Image src={slider3} alt='image'></Image>
                            </div>
                            <div>
                                <Image src={slider4} alt='image'></Image>
                            </div>
                        </Slider>
                        <div className="absolute flex justify-center w-full bottom-2">
                            <div className="rounded-xl cursor-pointer border-white border-2 h-3 my-0 mx-1 w-3 bg-gray-500"></div>
                            <div className="rounded-xl cursor-pointer border-white border-2 h-3 my-0 mx-1 w-3 bg-gray-500"></div>
                            <div className="rounded-xl cursor-pointer border-white border-2 h-3 my-0 mx-1 w-3 bg-gray-500"></div>
                            <div className="rounded-xl cursor-pointer border-white border-2 h-3 my-0 mx-1 w-3 bg-gray-500"></div>
                            <div className="rounded-xl cursor-pointer border-white border-2 h-3 my-0 mx-1 w-3 bg-surface"></div>
                            <div className="rounded-xl cursor-pointer border-white border-2 h-3 my-0 mx-1 w-3 bg-gray-500"></div>
                        </div>
                    </div>
                </div>
                <div className="w-full rounded-xl borde md:row-span-2">
                    <div className="flex flex-col ">
                        <div className="flex flex-col px-4 py-4 mb-5 space-y-2 border rounded-xl border-orange-400 border_container">
                            <h2 className="font-semibold text-md md:text-lg">Offers Available</h2>
                            <div className="flex flex-row items-center border rounded-xl border-orange-400 border_container">
                                <div className="flex flex-row items-center px-2 py-2 text-black"><svg className="mr-2" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.2221 13.278C32.2593 14.5748 32.2593 16.4252 31.2221 17.722L30.3131 18.8584C29.7717 19.535 29.4966 20.3886 29.5393 21.2569L29.6117 22.7135C29.6938 24.3771 28.6145 25.874 27.0179 26.3095L25.62 26.6901C24.7869 26.9173 24.0662 27.4452 23.5938 28.1731L22.8021 29.3942C21.8979 30.789 20.151 31.3606 18.6055 30.7675L17.2524 30.2479C16.4455 29.9388 15.5545 29.9388 14.7476 30.2479L13.3945 30.7675C11.849 31.3606 10.1021 30.789 9.19793 29.3942L8.40621 28.1731C7.93379 27.4452 7.2131 26.9173 6.38 26.6901L4.98207 26.3095C3.38552 25.874 2.30621 24.3771 2.38828 22.7135L2.46069 21.2569C2.50345 20.3886 2.22828 19.535 1.6869 18.8584L0.777931 17.722C-0.25931 16.4252 -0.25931 14.5748 0.777931 13.278L1.6869 12.1416C2.22828 11.465 2.50345 10.6114 2.46069 9.7431L2.38828 8.28651C2.30621 6.62293 3.38552 5.12605 4.98207 4.69053L6.38 4.30988C7.2131 4.08275 7.93379 3.55485 8.40621 2.8269L9.19793 1.60578C10.1021 0.21101 11.849 -0.360651 13.3945 0.232543L14.7476 0.752109C15.5545 1.06121 16.4455 1.06121 17.2524 0.752109L18.6055 0.232543C20.151 -0.360651 21.8979 0.21101 22.8021 1.60578L23.5938 2.8269C24.0662 3.55485 24.7869 4.08275 25.62 4.30988L27.0179 4.69053C28.6145 5.12605 29.6938 6.62293 29.6117 8.28651L29.5393 9.7431C29.4966 10.6114 29.7717 11.465 30.3131 12.1416L31.2221 13.278Z" fill="#FFC400"></path><path d="M16 26.6827C22.1323 26.6827 27.1034 21.6759 27.1034 15.4996C27.1034 9.32328 22.1323 4.31641 16 4.31641C9.86773 4.31641 4.89655 9.32328 4.89655 15.4996C4.89655 21.6759 9.86773 26.6827 16 26.6827Z" fill="white"></path><path d="M11.8422 19.6884C11.6267 19.4714 11.6267 19.1196 11.8422 18.9026L18.9063 11.7877C19.1218 11.5708 19.4711 11.5708 19.6866 11.7877C19.9021 12.0048 19.9021 12.3565 19.6866 12.5736L12.6225 19.6884C12.4069 19.9054 12.0577 19.9054 11.8422 19.6884Z" fill="#2F4858"></path><path d="M18.9517 20.4339C17.8789 20.4339 17.0062 19.5549 17.0062 18.4744C17.0062 17.3943 17.8789 16.5156 18.9517 16.5156C20.0241 16.5156 20.8965 17.3943 20.8965 18.4744C20.8965 19.5549 20.0241 20.4339 18.9517 20.4339ZM18.9517 17.627C18.4953 17.627 18.1096 18.0151 18.1096 18.4744C18.1096 18.9341 18.4953 19.3225 18.9517 19.3225C19.4078 19.3225 19.7931 18.9341 19.7931 18.4744C19.7931 18.0151 19.4078 17.627 18.9517 17.627Z" fill="#2F4858"></path><path d="M13.0482 14.4886C11.9758 14.4886 11.1034 13.6096 11.1034 12.5291C11.1034 11.449 11.9758 10.5703 13.0482 10.5703C14.121 10.5703 14.9937 11.449 14.9937 12.5291C14.9937 13.6096 14.121 14.4886 13.0482 14.4886ZM13.0482 11.6817C12.5842 11.6817 12.2068 12.0618 12.2068 12.5291C12.2068 12.9967 12.5843 13.3772 13.0482 13.3772C13.5125 13.3772 13.8903 12.9967 13.8903 12.5291C13.8903 12.0618 13.5126 11.6817 13.0482 11.6817Z" fill="#2F4858"></path></svg>{process.env.NEXT_PUBLIC_PROJECT_NAME} Offer - No offers available right now!</div>

                            </div>
                        </div>
                        <div className="flex flex-col p-4 border rounded-xl border-orange-400 "><h2 className="font-semibold text-md md:text-lg">Timing</h2>
                            <div className="mt-2 leading-1 text-black">06:00 AM (Morning) - 03:00 AM (Night)</div>
                        </div>
                        <div className="flex flex-col h-auto p-4 mt-5 border rounded-xl border-orange-400 "><div className="font-semibold text-md md:text-lg">Location</div>
                            <h2 className="my-2 text-black">Behid Shell Petrol Pump, Near D-Mart, Ahmedabad Highway, Palanpur, Gujarat</h2>
                            <div className="">
                                <iframe height="250" loading="lazy" width="100%" id="myIframe" src="https://www.google.com/maps/embed/v1/view?key=AIzaSyB9q4uF6xjrDG-n2jvClxrtOV_jSXUAPUY&amp;center=12.987796581378571,77.55990734156832&amp;zoom=18" allowFullScreen=""></iframe>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-full border_radius md:row-span-5 md:col-span-2">
                    <div className="p-6 mt-4  border rounded-xl border-orange-400 ">
                        <div className="flex flex-col justify-start md:items-center md:flex-row">
                            <h2 className="font-extrabold text-lg md:text-xl ">Sports Available</h2>
                        </div>
                        <div className="grid items-center w-full grid-cols-3 gap-5 mt-5 sm:gap-6 sm:grid-cols-5 lg:gap-6 xl:grid-cols-7 border_container ">
                            <div className="flex flex-col items-center py-1 border rounded-xl border-orange-400  shadow-md cursor-pointer hover:border-primary hover:border-2 aspect-square border-border_color">
                                <span style={{
                                    boxSizing: 'border-box',
                                    display: 'inline-block',
                                    overflow: 'hidden',
                                    width: 'initial',
                                    height: 'initial',
                                    background: 'none',
                                    opacity: 1,
                                    border: '0px',
                                    margin: '0px',
                                    padding: '0px',
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
                                        border: '0px',
                                        margin: '0px',
                                        padding: '0px',
                                        maxWidth: '100%'
                                    }}>
                                    </span>
                                    <Image src={cric} alt='cricket-icon' />
                                    <noscript></noscript>
                                </span>
                                <h3 className="flex justify-center w-full mt-1 text-lg font-medium text-center text-border_tag text-black"> Cricket</h3>
                            </div>
                            <div className="flex flex-col items-center py-1 border rounded-xl border-orange-400  shadow-md cursor-pointer hover:border-primary hover:border-2 aspect-square border-border_color">
                                <span style={{
                                    boxSizing: 'border-box',
                                    display: 'inline-block',
                                    overflow: 'hidden',
                                    width: 'initial',
                                    height: 'initial',
                                    background: 'none',
                                    opacity: 1,
                                    border: '0px',
                                    margin: '0px',
                                    padding: '0px',
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
                                        border: '0px',
                                        margin: '0px',
                                        padding: '0px',
                                        maxWidth: '100%'
                                    }}>
                                    </span>
                                    <Image src={football} alt='football-icon' />
                                    <noscript></noscript>
                                </span>
                                <h3 className="flex justify-center w-full mt-1 text-lg font-medium text-center text-border_tag text-black"> Football</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
