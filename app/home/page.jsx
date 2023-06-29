'use client'
import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';

export default function Home() {
    const typedElementRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedElementRef.current, {
            strings: ["Togetherness", "Solidarity", "Unity"],
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
                    <div className="home-content">
                        <div className="text-1">Pleasure of</div>
                        <div className="text-2 text-orange-400"><span className="typing" ref={typedElementRef}></span></div>
                        <div className="text-3">By Toran Club </div>

                    </div>
                </div>
            </section>
            <div className="project pb-6 bg-white">
                <div className="flex justify-center bg-white z-auto pt-20 mb-36" id="projectcard">
                    <div className="container1  bg-gray-200 flex flex-wrap justify-center pt-10 w-auto rounded-2xl">
                        <div className="card1 bg-sky-100">
                            <div className="box1 bg-orange-400">
                                <div className="content1 bg-orange-400">
                                    <h3>Cricket</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores sequi, quisquam ea hic exercitationem maiores consequuntur voluptas a ei</p>
                                    <a href="">Book</a>
                                </div>
                            </div>
                        </div>

                        <div className="card1 bg-sky-100">
                            <div className="box1">
                                <div className="content1">
                                    <h3>FootBall</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores sequi, quisquam ea hic exercitationem maiores consequuntur voluptas a ei</p>
                                    <a href="">Book</a>
                                </div>
                            </div>
                        </div>
                        <div className="card1 bg-sky-100">
                            <div className="box1">
                                <div className="content1">
                                    <h3>BasketBall</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores sequi, quisquam ea hic exercitationem maiores consequuntur voluptas a ei</p>
                                    <a href="">Book</a>
                                </div>
                            </div>
                        </div>

                        <div className="card1 bg-sky-100">
                            <div className="box1">
                                <div className="content1">
                                    <h3>Hockey</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores sequi, quisquam ea hic exercitationem maiores consequuntur voluptas a ei</p>
                                    <a href="">Book</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
