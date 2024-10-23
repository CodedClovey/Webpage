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
          <div className="flex transition ease-in-out hover:scale-105 ">
                  <Image
                    alt="img" src="/amuletapp.png"
                    className=""
                    width={100}
                    height={100}
                  ></Image>
          </div>
        </Link>
      </div>

    </div>
  );
}
