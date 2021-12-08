import React from "react";
import { Popup } from "react-map-gl";
import InputForm from "./InputForm";

const CreateMarker = ({ lat, long, setNewPlace, pin, setPin }) => {
  return (
    <div>
      <Popup
        latitude={lat}
        longitude={long}
        closeButton={true}
        closeOnClick={false}
        onClose={() => setNewPlace(null)}
        anchor="left"
      >
        <InputForm
          lat={lat}
          long={long}
          pin={pin}
          setPin={setPin}
          setNewPlace={setNewPlace}
        />
      </Popup>
    </div>
  );
};

export default CreateMarker;
