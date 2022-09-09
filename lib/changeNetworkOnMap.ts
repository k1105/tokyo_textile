import meter0 from "../public/data/network/meter0";
import meter500 from "../public/data/network/meter500";
import meter1000 from "../public/data/network/meter1000";
import meter1500 from "../public/data/network/meter1500";
import meter2000 from "../public/data/network/meter2000";
import meter2500 from "../public/data/network/meter2500";
import meter3000 from "../public/data/network/meter3000";
import meter3500 from "../public/data/network/meter3500";
import meter4000 from "../public/data/network/meter4000";
import meter4500 from "../public/data/network/meter4500";
import meter5000 from "../public/data/network/meter5000";

export default function changeNetworkOnMap(map: mapboxgl.Map, meter: number) {
  // Add the vector tileset as a source.

  const network = [
    meter0,
    meter500,
    meter1000,
    meter1500,
    meter2000,
    meter2500,
    meter3000,
    meter3500,
    meter4000,
    meter4500,
    meter5000,
  ];

  console.log(meter);

  const index = Math.floor(meter / 500);
  console.log(index);

  if (typeof map.getSource("bike-line") !== "undefined") {
    const source: mapboxgl.GeoJSONSource = map.getSource(
      "bike-line"
    ) as mapboxgl.GeoJSONSource;
    source.setData({
      type: "Feature",
      properties: {},
      geometry: {
        type: "MultiLineString",
        coordinates: network[index](),
      },
    });
  }
}
