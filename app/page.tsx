'use client'

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col grow md:px-40">
      <div className="flex flex-row justify-center">
            <p className="text-2xl text-center font-[family-name:var(--font-roboto)] text-[#6E6E57] tracking-[0.5em]">ABHINAV</p>
      </div>
      <div className="flex grow items-center justify-center">
        <Link href={'/amulet'}>
          <div className="flex flex-col transition ease-in-out hover:scale-105 group">
                  <Image
                    alt="img" src="/amuletapp.png"
                    className=""
                    width={100}
                    height={100}
                  ></Image>
                  <p className="hidden group-hover:block text-2xl text-center font-[family-name:var(--font-roboto)] font-black">AMULET</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
