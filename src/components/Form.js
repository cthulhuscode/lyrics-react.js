import React, { useState } from "react";
import PropTypes from "prop-types";

// Components
import Error from "./Error";

const Form = ({ setQuery }) => {
  // States
  const [queryForm, setQueryForm] = useState({
    artist: "",
    song: "",
  });
  const [error, setError] = useState(false);

  const { artist, song } = queryForm;

  // Read input changes
  const updateState = (e) => {
    setQueryForm({
      ...queryForm,
      [e.target.name]: e.target.value,
    });
  };

  // On Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar
    if (artist.trim() === "" || song.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    // Send the queryForm to App
    setQuery(queryForm);
  };

  return (
    <div className="bg-warning">
      <div className="container">
        <div className="row">
          <form
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
            onSubmit={handleSubmit}
          >
            <fieldset>
              {error ? <Error msg="Todos los campos son obligatorios" /> : null}
              <legend className="text-center">Simple Lyrics Finder</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="text-dark font-weight-bold">
                      Artista
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="artist"
                      placeholder="Nombre artista"
                      onChange={updateState}
                      value={artist}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="text-dark font-weight-bold">
                      Canción
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="song"
                      placeholder="Nombre canción"
                      onChange={updateState}
                      value={song}
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-dark float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

Form.propTypes = {
  setQuery: PropTypes.func.isRequired,
};

export default Form;
