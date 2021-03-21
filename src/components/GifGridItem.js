import React from "react";
import PropTypes from "prop-types";

export const GifGridItem = ({ url, title }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <div className="card-img">
        <img src={url} alt={title} />
      </div>
      <div className="card-title">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

GifGridItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
