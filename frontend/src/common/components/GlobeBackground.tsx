import React, { useEffect, useRef, useState } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";

/**
 * Globe background that:
 * 1. Starts rotating the Earth freely
 * 2. After a short spin delay, zooms & pans to Nepal
 * 3. Stops rotation once Nepal is centred
 * 4. Highlights Nepal's outside boundaries with red neon sparkling lights
 */

const NEPAL_POV = { lat: 28.3949, lng: 84.124, altitude: 1.1 };

export const GlobeBackground: React.FC = () => {
  const globeEl = useRef<GlobeMethods>();
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [nepalPolygon, setNepalPolygon] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [glowPaths, setGlowPaths] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dataPoints, setDataPoints] = useState<any[]>([]);

  // Fetch Nepal GeoJSON polygon border
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson"
    )
      .then((r) => r.json())
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((data: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const nepalFeature = data.features.find((f: any) => f.properties.ADMIN === "Nepal");
        if (nepalFeature) {
          setNepalPolygon([nepalFeature]);
          
          // Flatten coordinates for paths
          const coords = nepalFeature.geometry.type === 'Polygon' 
            ? nepalFeature.geometry.coordinates[0]
            : nepalFeature.geometry.coordinates.flat(1)[0];
            
          const mappedPath = coords.map((c: any) => ({ lat: c[1], lng: c[0] }));
          
          // Layered paths for "Bloom" effect: [glow-outer, glow-inner, white-core]
          setGlowPaths([
            { points: mappedPath, color: "rgba(255, 170, 0, 0.15)", width: 10, dash: 0, animate: 0 }, // Outer glow
            { points: mappedPath, color: "rgba(255, 200, 0, 0.4)", width: 5, dash: 0, animate: 0 },  // Inner glow
            { points: mappedPath, color: "#ffffff", width: 1.5, dash: 0.1, animate: 2000 } // White-hot core
          ]);

          // Generate simulated data points (city-light style) across the continent/country
          const points = [];
          for (let i = 0; i < 400; i++) {
            points.push({
              lat: 26 + Math.random() * 4,
              lng: 80 + Math.random() * 8,
              size: Math.random() * 0.4,
              color: Math.random() > 0.5 ? "#ffffff" : "#aaaaaa"
            });
          }
          setDataPoints(points);
        }
      })
      .catch(() => {/* silent fail */});
  }, []);

  // Resize handler
  useEffect(() => {
    const handleResize = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation sequence
  useEffect(() => {
    if (!globeEl.current) return;

    const controls = globeEl.current.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.8; // Slower, more cinematic rotation
    controls.enableZoom = false;

    // Gradual camera zoom and pan to Nepal
    const zoomTimer = setTimeout(() => {
      globeEl.current?.pointOfView(
        { lat: NEPAL_POV.lat, lng: NEPAL_POV.lng, altitude: NEPAL_POV.altitude },
        5000 // Slower, smoother camera glide
      );

      // Graceful deceleration of auto-rotate speed
      let friction = 0.8;
      const decelerate = setInterval(() => {
        if (!globeEl.current) return;
        const c = globeEl.current.controls();
        friction *= 0.96; // Smooth logarithmic decay
        c.autoRotateSpeed = friction;
        
        if (friction < 0.05) {
          c.autoRotate = false;
          clearInterval(decelerate);
        }
      }, 100);

      return () => {
        clearInterval(decelerate);
      };
    }, 1500);

    return () => clearTimeout(zoomTimer);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-black pointer-events-none opacity-80">
      <Globe
        ref={globeEl}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={true}
        atmosphereColor="#3a445e"
        atmosphereAltitude={0.2}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        lineHoverPrecision={0}

        /* Subtle dark fill for country */
        polygonsData={nepalPolygon}
        polygonCapColor={() => "rgba(255, 200, 0, 0.05)"}
        polygonSideColor={() => "rgba(0, 0, 0, 0)"}
        polygonAltitude={0.01}

        /* Layered "Bloom" paths */
        pathsData={glowPaths}
        pathPoints="points"
        pathColor={(p: any) => p.color}
        pathStroke={(p: any) => p.width}
        pathDashLength={(p: any) => p.dash}
        pathDashAnimateTime={(p: any) => p.animate}
        pathPointAlt={0.015}

        /* Shimmering point cloud (data explorer style) */
        pointsData={dataPoints}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointRadius="size"
        pointAltitude={0.02}
        pointsMerge={true}
      />
    </div>
  );
};
