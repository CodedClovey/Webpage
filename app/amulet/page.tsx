'use client'

import Image from "next/image";
import { useState } from "react";

const pjs = [
    {
        link: '/am1.png',
        tag: 'Schedule',
        desc: 'Schedule your day, break down tasks and mark completed tasks',
    },
    {
        link: '/am2.png',
        tag: 'Focus',
        desc: 'Set up a timer and keep focused throughout the day',
    },
    {
        link: '/am3.png',
        tag: 'Notes',
        desc: 'Note down important things or list out items and mark them',
    },
    {
        link: '/am4.png',
        tag: 'Calendar',
        desc: 'Set Reminders so that you do not forget important events',
    },
]
export default function Page() {
    const [pos,setPos] = useState(0)
    return (
    <div className="flex flex-row justify-between gap-14 px-32 py-16 grow" >
        <div className="flex flex-col justify-between">
            <div className="flex flex-col ">
                <p className="text-2xl text-left font-[family-name:var(--font-geist-mono)]">Amulet</p>
                <p className="text-1xl text-left font-[family-name:var(--font-geist-mono)] text-grey">Productivity App</p>
            </div>
            <div>
                <div className="my-7 ">
                    <p className="text-1xl text-left font-[family-name:var(--font-geist-mono)] text-grey">{pjs[pos].desc}</p>
                </div>
                <div className="flex flex-row flex-wrap gap-3">
                {
                    pjs.map((item,index)=>{
                        return(
                            <button key={index} onClick={()=>{
                                setPos(index)
                            }
                            }>
                                <div className="bg-cyan-700 px-8 py-2 rounded-xl">
                                    <p className="text-slate-100 font-[family-name:var(--font-geist-mono)]">{item.tag}</p>
                                </div>
                            </button>
                        )
                    })
                }
                </div>
            </div>
        </div>

        <div className=" flex flex-col gap-5 items-center justify-center font-[family-name:var(--font-geist-sans)] ">
            <div className='border-4 rounded-lg border-gray-300 drop-shadow-2xl transition ease-in-out hover:scale-105'>
                <Image
                alt="img" src={pjs[pos].link}
                className=""
                width={418/2}
                height={882/2}
                ></Image>
            </div>
        </div>

    </div>
    )
}