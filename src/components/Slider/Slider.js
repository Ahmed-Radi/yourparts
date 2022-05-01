import React from 'react'

import { ReactComponent as SteeringWheel } from '../../icons/steering-wheel.svg'
import { ReactComponent as Tyre } from '../../icons/tyre.svg'
import { ReactComponent as Oil } from '../../icons/oil.svg'
import { ReactComponent as Battery } from '../../icons/battery.svg'
import { ReactComponent as Spark } from '../../icons/spark.svg'
import { ReactComponent as Rim } from '../../icons/rim.svg'
import { ReactComponent as RimCover } from '../../icons/rim_cover.svg'
import { ReactComponent as Liquid } from '../../icons/liquid.svg'
import { ReactComponent as Accessories } from '../../icons/accessories.svg'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

function Slider() {
    // const cards = [
    //     { icon: <SteeringWheel className="w-12 h-11 lg:w-30 lg:h-28 lg:fill-blue-600 md:w-24 md:h-24 md:fill-green-600 sm:w-20 sm:h-20 sm:fill-teal-500 fill-red-600" />},
    //     { icon: <Tyre className="w-12 h-11 lg:w-30 lg:h-28 lg:fill-blue-600 md:w-24 md:h-24 md:fill-green-600 sm:w-20 sm:h-20 sm:fill-teal-500 fill-red-600" />},
    //     { icon: <Oil className="w-12 h-11 lg:w-30 lg:h-28 lg:fill-blue-600 md:w-24 md:h-24 md:fill-green-600 sm:w-20 sm:h-20 sm:fill-teal-500 fill-red-600" />},
    //     { icon: <Battery className="w-12 h-11 lg:w-30 lg:h-28 lg:fill-blue-600 md:w-24 md:h-24 md:fill-green-600 sm:w-20 sm:h-20 sm:fill-teal-500 fill-red-600" /> },
    //     { icon: <Spark className="w-12 h-11 lg:w-30 lg:h-28 lg:fill-blue-600 md:w-24 md:h-24 md:fill-green-600 sm:w-20 sm:h-20 sm:fill-teal-500 fill-red-600" />},
    //     { icon: <Rim className="w-12 h-11 lg:w-30 lg:h-28 lg:fill-blue-600 md:w-24 md:h-24 md:fill-green-600 sm:w-20 sm:h-20 sm:fill-teal-500 fill-red-600" />},
    //     { icon: <RimCover className="w-12 h-11 lg:w-30 lg:h-28 lg:fill-blue-600 md:w-24 md:h-24 md:fill-green-600 sm:w-20 sm:h-20 sm:fill-teal-500 fill-red-600" />},
    //     { icon: <Liquid className="w-12 h-11 lg:w-30 lg:h-28 lg:fill-blue-600 md:w-24 md:h-24 md:fill-green-600 sm:w-20 sm:h-20 sm:fill-teal-500 fill-red-600" /> },
    //     { icon: <Accessories className="w-12 h-11 lg:w-30 lg:h-28 lg:fill-blue-600 md:w-24 md:h-24 md:fill-green-600 sm:w-20 sm:h-20 sm:fill-teal-500 fill-red-600" />},
    // ]

    const cards = [
        { icon: <SteeringWheel className="w-[120px] h-[110px] p-3" />},
        { icon: <Tyre className="w-[120px] h-[110px] p-3" />},
        { icon: <Oil className="w-[120px] h-[110px] p-3" />},
        { icon: <Battery className="w-[120px] h-[110px] p-3" /> },
        { icon: <Spark className="w-[120px] h-[110px] p-3" />},
        { icon: <Rim className="w-[120px] h-[110px] p-3" />},
        { icon: <RimCover className="w-[120px] h-[110px] p-3" />},
        { icon: <Liquid className="w-[120px] h-[110px] p-3" /> },
        { icon: <Accessories className="w-[120px] h-[110px] p-3" />},
        ///* duplicated
        { icon: <RimCover className="w-[120px] h-[110px] p-3" />},
        { icon: <Liquid className="w-[120px] h-[110px] p-3" /> },
        { icon: <Accessories className="w-[120px] h-[110px] p-3" />},
        ///* duplicated
        { icon: <RimCover className="w-[120px] h-[110px] p-3" />},
        { icon: <Liquid className="w-[120px] h-[110px] p-3" /> },
        { icon: <Accessories className="w-[120px] h-[110px] p-3" />},
    ]
    const sliderLeft = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 100;
    }
    const sliderRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 100;
    }

    return (
        <section className='py-5 bg-blue-100'>
            <div className="container mx-auto">
                <h2 className='text-center text-2xl font-bold'>Find out what fits your type of car</h2>
                <div className="flex items-center flex-row">
                    <IoIosArrowBack onClick={sliderLeft} size={40} className="mr-4 bg-cyan-100 cursor-pointer" />
                    <div id="slider" className="gap-3 w-full h-[150px] flex items-center overflow-x-auto scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                        {cards.map((card, index) => {
                                return (
                                    <div className="w-[220px] cursor-pointer bg-white rounded-full" key={index}>
                                        {card.icon}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <IoIosArrowForward onClick={sliderRight} size={40} className="ml-4 bg-cyan-100 cursor-pointer" />
                </div>
                <a href="##" className='flex flex-row justify-center items-center'>
                    <span className='text-blue-500 text-lg font-bold'>
                        see all cars
                    </span>
                    <IoIosArrowForward size={14} className="text-blue-500 ml-5 leading-3 cursor-pointer" />
                </a>
            </div>
        </section>
    )
}

export default Slider