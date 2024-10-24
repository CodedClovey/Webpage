'use client'

import Image from "next/image";
import { useState } from "react";

const pjs = [
    {
        link: ['/a1.png','/a2.png'],
        tag: 'Schedule',
        desc: 'Create multiple schedules, Sort them around the week, Mark finished tasks to keep motivated.',
    },
    {
        link: ['/b2.png','/b1.png'],
        tag: 'Keep Focus',
        desc: 'Set up a timer to keep track of time, stay focused and take breaks while you are working',
    },
    {
        link: ['/c1.png','/c2.png'],
        tag: 'Note Down',
        desc: 'Keep notes on important details and list down things in diffenent pages for convenience',
    },
    {
        link: ['/d1.png','/d2.png'],
        tag: 'Mark Dates',
        desc: 'Set Reminders so that you do not forget important events, mark them down in your calendar',
    },
]
export default function Page() {
    const [pos,setPos] = useState(2)
    return (
    <div className="flex flex-row justify-between gap-0 px-16 py-16 grow bg-white rounded-3xl" >
        <div className="flex flex-col justify-between grow">
            <div className="flex flex-col md:flex-row items-center">
                <div className="flex flex-col w-24">
                    <Image
                        alt="img" src="/amuletapp.png"
                        className="hidden md:block"
                        width={100}
                        height={100}
                    ></Image>
                    <p className="text-2xl text-center font-[family-name:var(--font-roboto)] font-black">AMULET</p>
                    
                </div>
                <div className="flex grow justify-center items-center max-w-xl">
                    <p className="text-xl text-gray-400">The All-in-One Productivity App</p>
                </div>
            </div>
            <div className=" justify-end">
                <div className="my-7 flex-grow max-w-2xl">
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

        <div className=" hidden md:flex items-center justify-center">
            <div className='flex flex-row gap-x-10'>
                <Image
                alt="img" src={pjs[pos].link[0]}
                className="border-4 rounded-lg border-gray-300 drop-shadow-2xl"
                width={418*0.58}
                height={882*0.58}
                ></Image>
                <Image
                alt="img" src={pjs[pos].link[1]}
                className="border-4 rounded-lg border-gray-300 drop-shadow-2xl"
                width={418*0.58}
                height={882*0.58}
                ></Image>
            </div>
        </div>

    </div>
    )
}