import React from "react";

type Props = {
  pitch: number;
  setPitch: (angle: number) => void;
};

export default function PitchController({ pitch, setPitch }: Props) {
  return (
    <div>
      <p style={{ marginTop: "30px" }}>Pitch</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "200px",
          margin: "0 auto",
          marginBottom: "15px",
        }}
      >
        <a
          onClick={() => setPitch(0)}
          style={{
            margin: "0 15px",
            textDecoration: pitch === 0 ? "line-through" : "none",
          }}
        >
          0°
        </a>
        <p>|</p>
        <p onClick={() => setPitch(45)}>
          <a
            style={{
              margin: "0 15px",
              textDecoration: pitch === 45 ? "line-through" : "none",
            }}
          >
            45°
          </a>
        </p>
        <p>|</p>
        <p onClick={() => setPitch(70)}>
          <a
            style={{
              margin: "0 15px",
              textDecoration: pitch === 70 ? "line-through" : "none",
            }}
          >
            70°
          </a>
        </p>
      </div>
    </div>
  );
}
