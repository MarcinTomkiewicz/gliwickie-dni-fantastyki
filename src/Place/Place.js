import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { Spinner } from "react-bootstrap";
import { Marker } from "./MyMap/Marker/Marker";
import { MyMap } from "./MyMap/MyMap";

const zoom = 15;
const center = { lat: 50.2857750194284, lng: 18.687803515218846 };

const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return <Spinner />;
    case Status.FAILURE:
      return console.log("error");
    case Status.SUCCESS:
      return (
        <MyMap zoom={zoom} center={center}>
          <Marker
            position={center}
            label={{
              text: "Gliwickie Dni Fantastyki 2022",
              color: "#6D111E",
              fontSize: "16px",
              fontWeight: "600",
              fontFamily: "Dosis",
              className: "marker-position",
            }}
          />
        </MyMap>
      );
  }
};

export const Place = () => {
  return (
    <Wrapper apiKey="AIzaSyBaUkQxLErUJ79Vr2aZ5FsRsFwr_2nlFMg" render={render} />
  );
};
