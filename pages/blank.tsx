import type { NextPage } from "next";
import Head from "next/head";
import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import addDataOnMap from "../lib/addDataOnMap";
import LargeRadio from "../components/largeRadio";
import SmallRadio from "../components/smallRadio";
import changeNetworkOnMap from "../lib/changeNetworkOnMap";
import Link from "next/link";

type Center = {
  lat: number;
  lon: number;
};

const Blank: NextPage = () => {
  const mapContainer = useRef<any>(null);
  const map = useRef<mapboxgl.Map | any>(null);
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN ?? "";
  const [meter, setMeter] = useState<number>(0);
  const [zoom, setZoom] = useState<number>(0);
  const [center, setCenter] = useState<Center>({ lat: 0, lon: 0 });
  const [pitch, setPitch] = useState<number>(0);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/kn5mr/cl7r6inmt000w15od1r175qgk", //custom style: "mapbox://styles/kn5mr/cl7r6inmt000w15od1r175qgk", dark style: "mapbox://styles/mapbox/dark-v10"
      center: [139.7567, 35.6841], // center map on Chad
      zoom: 12,
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
          style={{ width: "100vw", height: "100vh", background: "#023F80" }}
        />
        <div
          style={{
            position: "absolute",
            color: "white",
            left: "50px",
            top: "30px",
          }}
        >
          <h1>Tokyo Textile</h1>
          <p>Zoom: {Math.round(zoom * 100) / 100}</p>
          <p>Latitude: {Math.round(center.lat * 10000) / 10000}</p>
          <p>Longitude: {Math.round(center.lon * 10000) / 10000}</p>
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
            <a onClick={() => setPitch(0)} style={{ margin: "0 15px" }}>
              0°
            </a>
            <p>|</p>
            <p onClick={() => setPitch(45)}>
              <a style={{ margin: "0 15px" }}>45°</a>
            </p>
            <p>|</p>
            <p onClick={() => setPitch(70)}>
              <a style={{ margin: "0 15px" }}>70°</a>
            </p>
          </div>
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
            <p
              style={{
                margin: "0 15px",
                textDecoration: "line-through",
              }}
            >
              Blank
            </p>
            <p>|</p>
            <Link href="/">
              <a style={{ margin: "0 15px" }}>Detailed</a>
            </Link>
          </div>
        </div>
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
      </main>
    </div>
  );
};

export default Blank;
