import React from "react";

type Props = {
  zoom: number;
  center: { lat: number; lon: number };
};

export default function MapInformation({ zoom, center }: Props) {
  return (
    <div>
      <p>Zoom: {Math.round(zoom * 100) / 100}</p>
      <p>Latitude: {Math.round(center.lat * 10000) / 10000}</p>
      <p>Longitude: {Math.round(center.lon * 10000) / 10000}</p>
    </div>
  );
}
