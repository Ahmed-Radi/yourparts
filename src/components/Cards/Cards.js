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

import background from '../image/landing-hero.png'

function Cards() {

    const cards = [
        { text: 'Buy spare parts', link: '#',icon: <SteeringWheel className="w-12 h-11 lg:w-28 lg:h-28 md:w-24 md:h-24 sm:w-20 sm:h-20 fill-red-600" />},
        { text: 'Tyres', link: '#',icon: <Tyre className="w-12 h-11 lg:w-28 lg:h-28 md:w-24 md:h-24 sm:w-20 sm:h-20 fill-red-600" />},
        { text: 'Engine oil', link: '#',icon: <Oil className="w-12 h-11 lg:w-28 lg:h-28 md:w-24 md:h-24 sm:w-20 sm:h-20 fill-red-600" />},
        { text: 'Batteries', link: '#',icon: <Battery className="w-12 h-11 lg:w-28 lg:h-28 md:w-24 md:h-24 sm:w-20 sm:h-20 fill-red-600" /> },
        { text: 'Spark plug', link: '#',icon: <Spark className="w-12 h-11 lg:w-28 lg:h-28 md:w-24 md:h-24 sm:w-20 sm:h-20 fill-red-600" />},
        { text: 'Rims', link: '#',icon: <Rim className="w-12 h-11 lg:w-28 lg:h-28 md:w-24 md:h-24 sm:w-20 sm:h-20 fill-red-600" />},
        { text: 'Rim Cover', link: '#',icon: <RimCover className="w-12 h-11 lg:w-28 lg:h-28 md:w-24 md:h-24 sm:w-20 sm:h-20 fill-red-600" />},
        { text: 'Liquids', link: '#',icon: <Liquid className="w-12 h-11 lg:w-28 lg:h-28 md:w-24 md:h-24 sm:w-20 sm:h-20 fill-red-600" /> },
        { text: 'accessories', link: '#',icon: <Accessories className="w-12 h-11 lg:w-28 lg:h-28 md:w-24 md:h-24 sm:w-20 sm:h-20 fill-red-600" />},
    ]

    const addBackground = {
        background: `url("${background}")`,
        backgroundPosition: 'center center',
        objectFit: 'cover',
    }
    return (
        <section  style={addBackground}>
            <div className='bg-gradient-to-r from-sky-800/75 to-sky-600/75'>
                <div className="container mx-auto p-9">
                    <h2 className="text-center text-3xl text-white font-medium my-5">What are you looking for?</h2>
                    <div className="flex flex-wrap justify-center mx-auto gap-2 lg:gap-7 md:gap-6 sm:gap-3">
                        {
                            cards.map(card => {
                                return (
                                    <a href={card.link} key={card.text} className="w-13 h-20 lg:w-40 lg:h-40 md:w-32 md:h-32 sm:w-32 sm:h-32 flex justify-around flex-col rounded-md bg-slate-100">
                                        <div className="w-24 h-21 lg:w-28 lg:h-28 max-h-[70%] flex items-center justify-center max-w-full mx-auto">
                                            {card.icon}
                                        </div>
                                        <div className="text-sm font-light md:font-normal md:text-base mx-auto">{card.text}</div>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cards