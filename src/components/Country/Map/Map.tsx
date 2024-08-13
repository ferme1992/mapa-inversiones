"use client";

import { useState, useRef } from "react";
import Map, { Source, Layer, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer,
} from "./layers";

export default function MapComponent({ locations }) {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 18.7357,
    longitude: -70.1627,
    zoom: 7,
  });

  const mapRef = useRef();

  const handleViewportChange = (newViewport) => {
    setViewport(newViewport);
  };

  const onClick = (event) => {
    const feature = event.features[0];
    if (!feature || !feature.properties.cluster_id) return;

    const clusterId = feature.properties.cluster_id;
    const mapboxSource = mapRef.current?.getSource("locations");

    mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err) return;

      if (mapRef.current) {
        mapRef.current.easeTo({
          center: feature.geometry.coordinates,
          zoom,
          duration: 1200,
        });
      }
    });
  };

  // Convert locations to GeoJSON
  const geojsonData = {
    type: "FeatureCollection",
    features: locations.map((location) => ({
      type: "Feature",
      properties: {
        id: location.id,
      },
      geometry: {
        type: "Point",
        coordinates: [
          location.geometry.coordinates[0],
          location.geometry.coordinates[1],
        ],
      },
    })),
  };

  return (
    <div style={{ height: "100vh", width: "85%" }}>
      <Map
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        onMove={(evt) => handleViewportChange(evt.viewState)}
        interactiveLayerIds={[clusterLayer.id]}
        onClick={onClick}
        ref={mapRef}
      >
        <Source
          id="locations"
          type="geojson"
          data={geojsonData}
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source>
      </Map>
    </div>
  );
}
