import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col font-[family-name:var(--font-geist-sans)] grow items-center justify-center">
          <div className="flex-none flex-col">
            <p className="text-2xl text-center font-[family-name:var(--font-geist-mono)]">Abhinav Manoj</p>
            <p className="text-1xl text-center font-[family-name:var(--font-geist-mono)] text-grey">Front-End Developer</p>
          </div>
      <div className="flex grow items-center justify-center ">
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
      <p className="text-gray-500"><a href="mailto:abhinavmanoj222@gmail.com">Contact me</a></p>
    </div>
  );
}
