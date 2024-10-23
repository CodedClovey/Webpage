'use client'

import Image from "next/image";
import { useState } from "react";

const pjs = [
    {
        link: '/am1.png',
        tag: 'Schedule',
        desc: 'Create multiple schedules, Sort them around the week, Mark finished tasks to keep motivated.',
    },
    {
        link: '/am2.png',
        tag: 'Keep Focus',
        desc: 'Set up a timer to keep track of time, stay focused and take breaks while you are working',
    },
    {
        link: '/am3.png',
        tag: 'Note Down',
        desc: 'Keep notes on important details and list down things in diffenent pages for convenience',
    },
    {
        link: '/am4.png',
        tag: 'Mark Dates',
        desc: 'Set Reminders so that you do not forget important events, mark them down in your calendar',
    },
]
export default function Page() {
    const [pos,setPos] = useState(0)
    return (
    <div className="flex flex-row justify-between gap-0 px-16 py-16 grow bg-white rounded-3xl" >
        <div className="flex flex-col justify-between grow">
            <div className="flex flex-row">
                <div className="flex flex-col w-24">
                    <Image
                        alt="img" src="/amulet.png"
                        className="hidden md:block"
                        width={100}
                        height={100}
                    ></Image>
                    <p className="text-2xl text-center font-[family-name:var(--font-roboto)] font-black">AMULET</p>
                    
                </div>
                <div className="flex grow justify-center items-center ">
                    <p className="text-xl text-gray-400">The All-in-One Productivity App</p>
                </div>
            </div>
            <div className=" justify-end">
                <div className="my-7 flex-grow">
                    <p className="text-2xl text-left font-[family-name:var(--font-roboto)] text-grey">{pjs[pos].desc}</p>
                </div>
                <div className="flex flex-row flex-wrap gap-3">
                {
                    pjs.map((item,index)=>{
                        return(
                            <button key={index} onClick={()=>{
                                setPos(index)
                            }
                            }>
                                <div className={`${pos==index?'bg-[#dadaba]':'bg-[#EBEBD9]'} px-8 py-2 rounded-xl`}>
                                    <p className="font-[family-name:var(--font-roboto)]">{item.tag}</p>
                                </div>
                            </button>
                        )
                    })
                }
                </div>
            </div>
        </div>

        <div className=" flex gap-5 items-center justify-center font-[family-name:var(--font-geist-sans)] bg-slate-200">
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