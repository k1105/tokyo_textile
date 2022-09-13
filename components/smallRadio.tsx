import React from "react";

type Props = {
  txt: string;
  value: string;
  onclick: () => void;
  currentValue: number;
};

export default function SmallRadio({
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
        marginRight: "0px",
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
    </div>
  );
}
