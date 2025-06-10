/* global kakao */
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

declare global {
  interface Window {
    kakao: any;
  }
}
type Props = {
  value :string
}
const MapChungra = ({value} :Props) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  useEffect(() => {
    let container = document.getElementById("map3");

    let options = {
      center: new window.kakao.maps.LatLng(
        37.31329082221341,
        126.82815986260724
      ),
      level: 2,
    };

    let map = new window.kakao.maps.Map(container, options);

    var imageSrc = require('../static/marker.png'),
    imageSize = new window.kakao.maps.Size(48, 64),
    imageOption = {offset: new window.kakao.maps.Point(27, 69)};

    var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
        markerPosition = new window.kakao.maps.LatLng(
          37.31329082221341,
          126.82815986260724
        );

    var marker = new window.kakao.maps.Marker({
      position: markerPosition,
      clickable: true,
      image: markerImage
    });

    marker.setMap(map);
    map.setZoomable(true);
  }, []);

  return (
    <div
      id="map3"
      style={{
        width: '100vw',
        height: isMobile ? 320 : 672,
        marginBottom: 0,
        marginTop: 0
      }}
    />
  );
};

export default MapChungra;
