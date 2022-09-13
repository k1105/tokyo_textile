import React from "react";

type Props = {
  txt: string;
  value: string;
  onclick: () => void;
  currentValue: number;
};

export default function LargeRadio({
  txt,
  value,
  onclick,
  currentValue,
}: Props) {
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "0.8rem",
        width: "30px",
      }}
    >
      <input
        type="radio"
        id={txt}
        value={value}
        checked={value === `${currentValue}`}
        onClick={() => {
          onclick();
        }}
        readOnly
      />
      <br />
      <label htmlFor={txt} style={{ lineHeight: "1.6rem" }}>
        {txt}
      </label>
    </div>
  );
}
