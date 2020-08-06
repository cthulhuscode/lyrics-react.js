import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Lyrics = ({ lyrics }) => {
  if (lyrics.length === 0) return null;

  return (
    <Fragment>
      <h2>Letra canción</h2>
      <p className="letra">{lyrics}</p>
    </Fragment>
  );
};

Lyrics.propTypes = {
  lyrics: PropTypes.string.isRequired,
};

export default Lyrics;
