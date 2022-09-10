export default function changeNetworkOnMap(map: mapboxgl.Map, meter: number) {
  // Add the vector tileset as a source.
  for (let i = 0; i <= 5000; i += 500) {
    const id = `bike-line-${i}`;
    if (typeof map.getSource(id) !== "undefined") {
      if (i <= meter) {
        map.setLayoutProperty(id, "visibility", "visible");
      } else {
        map.setLayoutProperty(id, "visibility", "none");
      }
    }
  }
}
