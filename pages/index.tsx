import type { NextPage } from "next";
import Head from "next/head";
import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import addDataOnMap from "../lib/addDataOnMap";
import changeNetworkOnMap from "../lib/changeNetworkOnMap";
import Link from "next/link";
import LayerRadio from "../components/layerRadio";
import PitchController from "../components/pitchController";

type Center = {
  lat: number;
  lon: number;
};

const Home: NextPage = () => {
  const mapContainer = useRef<any>(null);
  const map = useRef<mapboxgl.Map | any>(null);
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN ?? "";
  const [meter, setMeter] = useState<number>(0);
  const [zoom, setZoom] = useState<number>(0);
  const [center, setCenter] = useState<Center>({ lat: 0, lon: 0 });
  const [pitch, setPitch] = useState<number>(0);

  useEffect(() => {
    const bounds: mapboxgl.LngLatBoundsLike = [
      [139.0434, 35.4133],
      [140.0264, 35.8606],
    ];
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v10", //custom style: "mapbox://styles/kn5mr/cl7r6inmt000w15od1r175qgk", dark style: "mapbox://styles/mapbox/dark-v10"
      center: [139.7567, 35.6841], // center map on Chad
      zoom: 12,
      minZoom: 10,
      maxBounds: bounds,
    });

    map.current.on("load", () => {
      addDataOnMap(map.current);
      setZoom(map.current.getZoom());
      setCenter({
        lat: map.current.getCenter()["lat"],
        lon: map.current.getCenter()["lng"],
      });
    });

    map.current.on("zoom", () => {
      setZoom(map.current.getZoom());
    });

    map.current.on("move", () => {
      setCenter({
        lat: map.current.getCenter()["lat"],
        lon: map.current.getCenter()["lng"],
      });
    });
  }, []);

  useEffect(() => {
    if (typeof map.current === "object") {
      changeNetworkOnMap(map.current, meter);
    }
  }, [meter]);

  useEffect(() => {
    if (typeof map.current === "object") {
      map.current.setPitch(pitch);
    }
  }, [pitch]);

  return (
    <div>
      <Head>
        <title>Data Visualize Bikeshare Information</title>
        <meta
          name="description"
          content="This page visualize bike share information via Public Transportation Open Data Center."
        />
      </Head>

      <main>
        <div
          className="map-container"
          ref={mapContainer}
          style={{ width: "100vw", height: "100vh", background: "#343332" }}
        />
        <div
          style={{
            position: "absolute",
            color: "white",
            left: "30px",
            top: "30px",
          }}
        >
          <p>Zoom: {Math.round(zoom * 100) / 100}</p>
          <p>Latitude: {Math.round(center.lat * 10000) / 10000}</p>
          <p>Longitude: {Math.round(center.lon * 10000) / 10000}</p>
          <PitchController pitch={pitch} setPitch={setPitch} />
          <p style={{ marginTop: "15px" }}>Map Style</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "200px",
              margin: "0 auto",
              marginBottom: "15px",
            }}
          >
            <Link href="/blank">
              <a style={{ margin: "0 15px" }}>Blank</a>
            </Link>
            <p>|</p>
            <p
              style={{
                margin: "0 15px",
                textDecoration: "line-through",
              }}
            >
              Detailed
            </p>
          </div>
        </div>
        <LayerRadio meter={meter} setMeter={setMeter} />
      </main>
    </div>
  );
};

export default Home;
