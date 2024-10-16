'use client'

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col font-[family-name:var(--font-geist-sans)] grow md:px-40">
      <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <p className="text-2xl md:text-left text-center font-[family-name:var(--font-geist-mono)]">Abhinav Manoj</p>
            <p className="text-1xl md:text-left text-center font-[family-name:var(--font-geist-mono)] text-grey">Front-End Developer</p>
          </div>

          <div className="flex h-10 w-40 bg-teal-600 items-center justify-center rounded-xl self-center">
            <p className="text-gray-100"><a href="mailto:abhinavmanoj222@gmail.com">Contact me</a></p>
          </div>
      </div>
      <div className="flex grow items-center justify-center">
        <Link href={'/amulet'}>
          <div className="flex transition ease-in-out hover:scale-105 ">
                  <Image
                    alt="img" src="/amulet.png"
                    className=""
                    width={418/2}
                    height={882/2}
                  ></Image>
          </div>
        </Link>
      </div>

    </div>
  );
}
