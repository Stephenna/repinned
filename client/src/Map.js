import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import DisplayAllPins from "./components/DisplayAllPins";
import CreateMarker from "./components/CreateMarker";
import ControlBox from "./components/ControlBox";
import dotenv from "dotenv";

dotenv.config();

const Map = () => {
  const myStorage = window.localStorage;
  const [toggle, setToggle] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);
  const [newPlace, setNewPlace] = useState(null);
  const [pin, setPin] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 3,
  });
  console.log(currentUser)
  const AddPin = (e) => {
    // onDblClick returns event object.
    console.log(e);
    const [long, lat] = e.lngLat;
    setNewPlace({
      lat,
      long,
    });
  };

  const mode = () => {
    setToggle(!toggle);
    setToggleIcon(!toggleIcon);
  };

  let sun = "mapbox://styles/sjcstephenna/ckwy5xoqb1jjl14tjgczgdgzf";
  let moon = "mapbox://styles/mapbox/dark-v10";

  return (
    <ReactMapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle={toggleIcon ? moon : sun}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      onDblClick={currentUser === null ? false : AddPin}
    >
      <button className="mode" onClick={mode}>
        {toggleIcon ? "🌞" : "🌚"}
      </button>

      <DisplayAllPins
        viewport={viewport}
        setViewport={setViewport}
        updatePinState={(update) => setPin(update)}
        pin={pin}
        currentUser={currentUser}
      />

      {newPlace && (
        <CreateMarker
          currentUser={currentUser}
          lat={newPlace.lat}
          long={newPlace.long}
          setNewPlace={setNewPlace}
          pin={pin}
          setPin={setPin}
        />
      )}

      <ControlBox
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        myStorage={myStorage}
        toggleIcon={toggleIcon}
        setToggleIcon={setToggleIcon}
        mode={mode}
      />
    </ReactMapGL>
  );
};

export default Map;
