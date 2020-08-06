import React from "react";
import PropTypes from "prop-types";

const Artist = ({ infoArtist }) => {
  if (Object.keys(infoArtist).length === 0) return null;

  const {
    strArtistThumb,
    strBiographyES,
    strBiographyEN,
    strGenre,
  } = infoArtist;

  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        Información artista
      </div>
      <div className="card-body">
        <img src={strArtistThumb} alt="Imagen de artista" />
        <h2 className="card-text">Biografía</h2>
        <p className="card-text">{strBiographyES || strBiographyEN}</p>
        <p className="card-text">Género: {strGenre}</p>
        <p className="card-text">
          <a
            href={`https://${infoArtist.strFacebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href={`https://${infoArtist.strTwitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href={`${infoArtist.strLastFMChart}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-lastfm"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

Artist.propTypes = {
  infoArtist: PropTypes.object.isRequired,
};

export default Artist;
