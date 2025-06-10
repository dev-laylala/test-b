/* global kakao */
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(
        37.52677152790441,
        126.89796767969911
      ),
      level: 2,
    };

    let map = new window.kakao.maps.Map(container, options);

    var markerPosition = new window.kakao.maps.LatLng(
      37.52677152790441,
      126.89796767969911
    );

    var marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  }, []);

  return (
    <div
      id="map"
      style={{
        width: isMobile ? "100%" : 550,
        height: isMobile ? 180 : 324,
        marginBottom: 6,
        borderRadius: 30,
      }}
    />
  );
};

export default Map;
