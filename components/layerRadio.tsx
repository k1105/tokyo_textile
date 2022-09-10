import React from "react";
import SmallRadio from "./smallRadio";
import LargeRadio from "./largeRadio";

type Props = {
  meter: number;
  setMeter: (meter: number) => void;
};

export default function LayerRadio({ meter, setMeter }: Props) {
  return (
    <div
      style={{
        position: "absolute",
        color: "white",
        left: "0px",
        bottom: "30px",
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "300px",
          margin: "0 auto",
        }}
      >
        <LargeRadio
          txt="0"
          value="0"
          onclick={() => setMeter(0)}
          currentValue={meter}
        />
        <SmallRadio
          txt="500"
          value="500"
          onclick={() => setMeter(500)}
          currentValue={meter}
        />
        <LargeRadio
          txt="1km"
          value="1000"
          onclick={() => setMeter(1000)}
          currentValue={meter}
        />
        <SmallRadio
          txt="1500"
          value="1500"
          onclick={() => setMeter(1500)}
          currentValue={meter}
        />
        <LargeRadio
          txt="2km"
          value="2000"
          onclick={() => setMeter(2000)}
          currentValue={meter}
        />
        <SmallRadio
          txt="2500"
          value="2500"
          onclick={() => setMeter(2500)}
          currentValue={meter}
        />
        <LargeRadio
          txt="3km"
          value="3000"
          onclick={() => setMeter(3000)}
          currentValue={meter}
        />
        <SmallRadio
          txt="3500"
          value="3500"
          onclick={() => setMeter(3500)}
          currentValue={meter}
        />
        <LargeRadio
          txt="4km"
          value="4000"
          onclick={() => setMeter(4000)}
          currentValue={meter}
        />
        <SmallRadio
          txt="4500"
          value="4500"
          onclick={() => setMeter(4500)}
          currentValue={meter}
        />
        <LargeRadio
          txt="5km"
          value="5000"
          onclick={() => setMeter(5000)}
          currentValue={meter}
        />
      </div>
    </div>
  );
}
