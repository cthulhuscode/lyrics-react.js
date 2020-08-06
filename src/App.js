import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

// Components
import Form from "./components/Form";
import Lyrics from "./components/Lyrics";
import Artist from "./components/Artist";

function App() {
  // States
  const [query, setQuery] = useState({});
  const [lyrics, setLyrics] = useState("");
  const [infoArtist, setInfoArtist] = useState([]);

  useEffect(() => {
    if (Object.keys(query).length === 0) return;

    const getLyrics = async () => {
      const { artist, song } = query;

      const lyrics_url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const info_url = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      // This approach gives more performance
      const [lyricsResult, infoResult] = await Promise.all([
        axios.get(lyrics_url),
        axios.get(info_url),
      ]);

      setLyrics(lyricsResult.data.lyrics);
      setInfoArtist(infoResult.data.artists[0]);
    };
    getLyrics();
  }, [query]);

  return (
    <>
      <Fragment>
        <Form setQuery={setQuery} />

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 mb-5">
              <Lyrics lyrics={lyrics} />
            </div>
            <div className="col-md-6">
              <Artist infoArtist={infoArtist} />
            </div>
          </div>
        </div>
      </Fragment>
    </>
  );
}

export default App;
