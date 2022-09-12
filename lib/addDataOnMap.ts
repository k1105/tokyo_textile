import bikeStation from "../public/data/bikeStation";
import trainStation from "../public/data/trainStation";
import trainLine from "../public/data/trainLine";
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
import centeredLines from "../public/data/centeredLines";
import selectedLines from "../public/data/selectedLines";

export default function addDataOnMap(map: mapboxgl.Map) {
  // Add the vector tileset as a source.
  const metersToPixelsAtMaxZoom = (meters: number, latitude: number) =>
    meters / 0.075 / Math.cos((latitude * Math.PI) / 180);

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

  map.addSource("bike-station", {
    type: "geojson",
    data: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: bikeStation(),
      },
    },
  });

  map.addSource("train-station", {
    type: "geojson",
    data: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: trainStation(),
      },
    },
  });

  for (let i = network.length - 1; i >= 0; i--) {
    const id = `bike-line-${i * 500}`;
    map.addSource(id, {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "MultiLineString",
          coordinates: network[i](),
        },
      },
    });

    map.addLayer({
      id: id,
      type: "line",
      source: id,
      layout: {
        "line-join": "round",
        "line-cap": "round",
        visibility: "none",
      },
      paint: {
        "line-color": `rgba(${4},${169 - (i - 1) * 10},${109},1)`,
        "line-width": 1,
      },
    });
  }

  map.addSource("train-line", {
    type: "geojson",
    data: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "MultiLineString",
        coordinates: trainLine(),
      },
    },
  });

  map.addSource("centered-lines", {
    type: "geojson",
    data: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "MultiLineString",
        coordinates: selectedLines(0),
      },
    },
  });

  map.addLayer({
    id: "centered-lines",
    type: "line",
    source: "centered-lines",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#fff", //f5a7aa
      "line-width": 1,
      "line-opacity": 1,
    },
  });

  map.addLayer({
    id: "bike-station",
    type: "circle",
    source: "bike-station",
    paint: {
      // Make circles larger as the user zooms from z12 to z22.
      "circle-radius": {
        stops: [
          [0, 0],
          [20, metersToPixelsAtMaxZoom(20, 35.72902)],
        ],
        base: 2,
      },
      // Color circles by ethnicity, using a `match` expression.
      "circle-color": `rgba(4,220,109,1)`,
      "circle-opacity": 0.8,
    },
  });

  map.addLayer({
    id: "train-station",
    type: "circle",
    source: "train-station",
    paint: {
      // Make circles larger as the user zooms from z12 to z22.
      "circle-radius": {
        stops: [
          [0, 0],
          [20, metersToPixelsAtMaxZoom(40, 35.72902)],
        ],
        base: 2,
      },
      // Color circles by ethnicity, using a `match` expression.
      "circle-color": "#fff",
      "circle-opacity": 0.6,
    },
  });

  map.addLayer({
    id: "train-line",
    type: "line",
    source: "train-line",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#fff", //f5a7aa
      "line-width": 3,
      "line-opacity": 0.3,
    },
  });

  let index = 0;

  setInterval(() => {
    index++;
    const source = map.getSource("centered-lines") as mapboxgl.GeoJSONSource;
    source.setData({
      type: "Feature",
      properties: {},
      geometry: {
        type: "MultiLineString",
        coordinates: selectedLines(index),
      },
    });
  }, 100);
}
