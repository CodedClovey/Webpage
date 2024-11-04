'use client'
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col grow md:px-40">
      <div className="flex flex-col justify-center">
        <p className="text-2xl text-center font-[family-name:var(--font-roboto)] text-neutral-950 tracking-[0.3em] border-b-2">ABHINAV MANOJ</p>
        <p className="text-2xl text-center font-[family-name:var(--font-roboto)] text-neutral-500 tracking-[0.1em]">
          Welcome to my page!
        </p>
      </div>
      <div className="flex grow flex-col items-center justify-center gap-3">
        <Link href={'/amulet'}>
          <div className="flex flex-col transition ease-in-out hover:scale-105 group ">
                  <Image
                    alt="img" src="/amuletapp.png"
                    className="rounded-xl border-gray-300 border-4"
                    width={150}
                    height={150}
                  ></Image>
                  {
                    //<p className="hidden group-hover:block text-2xl text-center font-[family-name:var(--font-roboto)] font-black text-slate-200">AMULET</p>
                  }
          </div>
        </Link>
        <Link href={'https://www.behance.net/gallery/150637875/Animation-showreel-2023'} target="_blank">
                  <Image
                    alt="img" src="/video.png"
                    className="rounded-xl border-gray-300 border-4 transition ease-in-out hover:scale-105"
                    width={150}
                    height={150}
                  ></Image>
        </Link>
      </div>
    </div>
  );
}
