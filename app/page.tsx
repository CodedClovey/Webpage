'use client'
import { MdPlayArrow } from "react-icons/md";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col grow md:px-40">
      <div className="flex flex-row justify-center">
        <p className="text-2xl text-center font-[family-name:var(--font-roboto)] text-slate-200 tracking-[0.5em]">ABHINAV </p>
        <Link href={'https://www.behance.net/gallery/150637875/Animation-showreel-2023'} target="_blank">
        <MdPlayArrow className='fill-slate-50 text-2xl w-20 pt-1 pr-3'></MdPlayArrow>
        </Link>
        <p className="text-2xl text-center font-[family-name:var(--font-roboto)] text-slate-200 tracking-[0.5em]"> MANOJ</p>
      </div>
      <div className="flex grow items-center justify-center">
        <Link href={'/amulet'}>
          <div className="flex flex-col transition ease-in-out hover:scale-105 group ">
                  <Image
                    alt="img" src="/amuletapp.png"
                    className="rounded-xl"
                    width={100}
                    height={100}
                  ></Image>
                  {
                    //<p className="hidden group-hover:block text-2xl text-center font-[family-name:var(--font-roboto)] font-black text-slate-200">AMULET</p>
                  }
          </div>
        </Link>
      </div>
    </div>
  );
}
