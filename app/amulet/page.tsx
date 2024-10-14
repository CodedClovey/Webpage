import Image from "next/image";

export default function Page() {
    return (
    <div className="flex flex-col  gap-14" >

        <div className="flex-none flex-col ">
            <p className="text-2xl text-center font-[family-name:var(--font-geist-mono)]">Amulet</p>
            <p className="text-1xl text-center font-[family-name:var(--font-geist-mono)] text-grey">Productivity App</p>
        </div>
    
        <div className=" flex flex-row gap-5 items-center justify-center grow">
        {['/am1.png','/am2.png','/am3.png','/am4.png',].map((item,index)=>{
            return(
            <div key={index} className=" flex flex-col gap-5 items-center justify-center font-[family-name:var(--font-geist-sans)] ">
                <div className='border-4 rounded-lg border-gray-300 drop-shadow-2xl transition ease-in-out hover:scale-105'>
                    <Image 
                    alt="img" src={item}
                    className=""
                    width={418/2}
                    height={882/2}
                    ></Image>
                </div>
                <p>
                    {item=='/am1.png' && 'Schedule your day'}
                    {item=='/am2.png' && 'Keep focused'}
                    {item=='/am3.png' && 'Note things down'}
                    {item=='/am4.png' && 'Set Reminders'}
                    
                </p>
            </div>
            )
        })
        }
        </div>

    </div>
    )
}