import bikeStation from "../public/data/bikeStation";
import trainStation from "../public/data/trainStation";
import trainLine from "../public/data/trainLine";
import meter0 from "../public/data/network/meter0";

export default function addDataOnMap(map: mapboxgl.Map) {
  // Add the vector tileset as a source.
  const metersToPixelsAtMaxZoom = (meters: number, latitude: number) =>
    meters / 0.075 / Math.cos((latitude * Math.PI) / 180);

  let pedestrianRadius = 700;
  let riderRadius = pedestrianRadius * 3;

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

  map.addSource("bike-line", {
    type: "geojson",
    data: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "MultiLineString",
        coordinates: meter0(),
      },
    },
  });

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

  //   map.addLayer({
  //     id: "bike-station-position",
  //     type: "circle",
  //     source: "bike-station",
  //     paint: {
  //       // Make circles larger as the user zooms from z12 to z22.
  //       "circle-radius": {
  //         base: 3,
  //         stops: [
  //           [12, 4],
  //           [22, 200],
  //         ],
  //       },
  //       // Color circles by ethnicity, using a `match` expression.
  //       "circle-color": "#ffffff",
  //     },
  //   });

  //   map.addLayer({
  //     id: "rider-coverage",
  //     type: "circle",
  //     source: "bike-station",
  //     paint: {
  //       // Make circles larger as the user zooms from z12 to z22.
  //       "circle-radius": 3,
  //       // Color circles by ethnicity, using a `match` expression.
  //       "circle-color": "#abcabc",
  //       "circle-opacity": 0.6,
  //     },
  //   });

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
      "circle-color": "#ffffff",
      "circle-opacity": 0.8,
    },
  });

  //   map.addLayer({
  //     id: "rider-covarage",
  //     type: "circle",
  //     source: "bike-station",
  //     paint: {
  //       // Make circles larger as the user zooms from z12 to z22.
  //       "circle-radius": {
  //         stops: [
  //           [0, 0],
  //           [20, 0],
  //         ],
  //         base: 2,
  //       },
  //       // Color circles by ethnicity, using a `match` expression.
  //       "circle-color": "#ffffff",
  //       "circle-opacity": 1,
  //     },
  //   });

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
      "circle-color": "#f5a7aa",
      "circle-opacity": 0.8,
    },
  });

  //   map.addLayer({
  //     id: "pedestrian-covarage",
  //     type: "circle",
  //     source: "train-station",
  //     paint: {
  //       // Make circles larger as the user zooms from z12 to z22.
  //       "circle-radius": {
  //         stops: [
  //           [0, 0],
  //           [20, 0],
  //         ],
  //         base: 2,
  //       },
  //       "circle-opacity": 1,
  //       // Color circles by ethnicity, using a `match` expression.
  //       "circle-color": "#000000",
  //     },
  //   });

  map.addLayer({
    id: "train-line",
    type: "line",
    source: "train-line",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#f5a7aa",
      "line-width": 3,
      "line-opacity": 0.8,
    },
  });

  map.addLayer({
    id: "bike-line",
    type: "line",
    source: "bike-line",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#04A96D",
      "line-width": 1,
    },
  });

  map.moveLayer("bike-line", "country-label");

  //   setInterval(() => {
  //     //i += 0.001;
  //     map.setPaintProperty("pedestrian-covarage", "circle-radius", {
  //       stops: [
  //         [0, 0],
  //         [
  //           20,
  //           metersToPixelsAtMaxZoom(
  //             Math.min(pedestrianRadius * i, 5000),
  //             35.72902
  //           ),
  //         ],
  //       ],
  //       base: 2,
  //     });
  //     map.setPaintProperty("rider-covarage", "circle-radius", {
  //       stops: [
  //         [0, 0],
  //         [
  //           20,
  //           metersToPixelsAtMaxZoom(Math.min(riderRadius * i, 15000), 35.72902),
  //         ],
  //       ],
  //       base: 2,
  //     });
  //   }, 20);
}
