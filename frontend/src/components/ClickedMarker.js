import React from "react";
import { Popup } from "react-map-gl";
import FilledForm from "./FilledForm";

const ClickedMarker = ({
  id,
  lat,
  long,
  title,
  desc,
  rating,
  username,
  createdAt,
  setCurrentPlaceId,
}) => {
  return (
    <div className="createdMarker">
      <Popup
        key={id}
        latitude={lat}
        longitude={long}
        closeButton={true}
        closeOnClick={false}
        onClose={() => setCurrentPlaceId(null)}
        anchor="top"
        className="popup"
      >
        <FilledForm
          id={id}
          title={title}
          desc={desc}
          rating={rating}
          username={username}
          createdAt={createdAt}
        />
      </Popup>
    </div>
  );
};

export default ClickedMarker;
