'use client'
import Link from "next/link";

import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import { MouseEvent, MouseEventHandler } from "react";

export default function Home() {
  const {
    rive, RiveComponent
  } = useRive(
    {
      src: "web.riv",
      stateMachines: "Amulet",
      autoplay: true,
    },
  );

  const numX = useStateMachineInput(rive, "State Machine 1", "Number 1", 100);

  const onMouseMove: MouseEventHandler<HTMLDivElement> = (
    e: MouseEvent<HTMLDivElement>
  ) => {
    if (!numX) {
      return;
    }
    const maxWidth = window.innerWidth;
    numX.value = (e.clientX / maxWidth) * 100;
  };

  return (
    <div className="flex flex-col grow md:px-40" onMouseMove={onMouseMove}>
      <div className="flex flex-col justify-center">
        <p className="text-2xl text-center font-[family-name:var(--font-roboto)] text-neutral-950 tracking-[0.3em] border-b-2">ABHINAV MANOJ</p>
      </div>
      
      <div className="flex grow flex-col items-center justify-center gap-3">
        <Link href={'/amulet'}>
          <div className="flex flex-col group ">
              <div className="w-96 h-96" >
                <RiveComponent />
              </div>
                  {
                    //<p className="hidden group-hover:block text-2xl text-center font-[family-name:var(--font-roboto)] font-black text-slate-200">AMULET</p>
                  }
          </div>
        </Link>
      </div>
    </div>
  );
}
