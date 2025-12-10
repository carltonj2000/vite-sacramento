import { APIProvider, Map } from "@vis.gl/react-google-maps";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function GoogleMap() {
  console.log(API_KEY);
  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        style={{ width: "50vw", height: "50vh" }}
        defaultCenter={{ lat: 38.3, lng: -122 }}
        defaultZoom={9}
        gestureHandling="greedy"
        disableDefaultUI
      />
    </APIProvider>
  );
}
