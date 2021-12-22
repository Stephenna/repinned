/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Marker } from "react-map-gl";
import { Room } from "@material-ui/icons";
import ClickedMarker from "./ClickedMarker";
import http from "../http";

const DisplayAllPins = ({
  viewport,
  setViewport,
  pin,
  updatePinState,
  currentUser,
}) => {
  const [currentPlaceId, setCurrentPlaceId] = useState(null);

  const pleaseWork = (res) => {
    updatePinState(res.data);
  };

  useEffect(() => {
    const getPins = async () => {
      try {
        const res = await http.get("/pins");
        pleaseWork(res);
        console.log(res.data)
      } catch (e) {
        console.log(`Error getting pins ${e}`);
      }
    };
    getPins();
  }, []);

  const DisplayFilledForm = (id, lat, long) => {
    setCurrentPlaceId(id);
    setViewport({
      ...viewport,
      latitude: lat,
      longitude: long,
    });
  };

 
  return (
    <div>
      {pin.map((body) => (
        <div key={body._id}>
          <Marker
            key={body._id}
            latitude={body.lat}
            longitude={body.long}
            offsetLeft={-viewport.zoom * 3.5}
            offsetTop={-viewport.zoom * 7}
          >
            <Room
              className="room"
              style={{
                fontSize: viewport.zoom * 7,
                color: body.username === currentUser ? "#c90076" : "#16537e",
                cursor: "pointer",
              }}
              onClick={() => DisplayFilledForm(body._id, body.lat, body.long)}
            />
          </Marker>
          {body._id === currentPlaceId && (
            <ClickedMarker
              className="clickedMarker"
              id={body._id}
              lat={body.lat}
              long={body.long}
              title={body.title}
              desc={body.desc}
              rating={body.rating}
              username={body.username}
              createdAt={body.createdAt}
              setCurrentPlaceId={setCurrentPlaceId}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default DisplayAllPins;
