'use client'

import { Alignment, EventType, Fit, Layout, RiveEventType, useRive, useStateMachineInput } from '@rive-app/react-canvas';
import {useEffect} from "react";

// { 
//   ( numX!=null && numX?.value==2) &&
//   <div className="absolute flex mx-96 my-10">
//     <iframe width="800" height="500" src="https://www.youtube.com/embed/KfiwhfqsAUg?si=K7NkRcDcPC6XPhVM" 
//       title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
//       referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
//     </iframe>
//   </div>
// }

export default function Home() {

  const {
    rive, RiveComponent
  } = useRive(
    {
      src: "website.riv",
      stateMachines: "State Machine 1",
      autoplay: true,
      automaticallyHandleEvents: true,
      layout: new Layout({
        fit: Fit.Cover,
        alignment: Alignment.Center,
    }),
    },
  );

  const numX = useStateMachineInput(rive, "State Machine 1", "page");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onRiveEventReceived = (riveEvent:any) => {
    const eventData = riveEvent.data;
    const eventProperties = eventData.properties;
    if (eventData.type === RiveEventType.General) {
    console.log("Event name", eventData.name);
    // Added relevant metadata from the event
    console.log("Rating", eventProperties.rating);
    console.log("Message", eventProperties.message);
    } else if (eventData.type === RiveEventType.OpenUrl) {
    console.log("Event name", eventData.name);
    // Handle OpenUrl event manually
    //window.location.href = data.url;
    }
};

// Wait until the rive object is instantiated before adding the Rive
// event listener
useEffect(() => {
    if (rive) {
    rive.on(EventType.RiveEvent, onRiveEventReceived);
    }
}, [rive]);

  return (
    <div>

      <div className="block h-screen">
        <RiveComponent />
      </div>
    </div>
  );
}
