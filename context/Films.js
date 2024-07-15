import { createContext, useState } from 'react';

const FilmsContext = createContext(1);

const Provider = ({ children }) => {
  // const serverURL = 'https://movie-tokens-server-3331c046a6df.herokuapp.com';
  const serverURL = 'http://192.168.2.131:4000';
  const [films, setFilms] = useState('');
  const [posterURL, setPosterURL] = useState('');

  const [selectedFilm, setSelectedFilm] = useState({
    filmID: '',
    title: '',
    date: '',
    theater: '',
    viewType: '',
    time: '',
    poster: '',
  });

  const [tokens, setTokens] = useState([]);
  const [filmDone, setFilmDone] = useState(false);

  const getFilmData = async () => {
    fetch(`${serverURL}/now-playing`)
      .then((res) => res.json())
      .then((data) => {
        setFilms(data);
      })
      .catch((error) => {
        console.error(error);
      });

    fetch(`${serverURL}/poster-url`)
      .then((res) => res.json())
      .then((data) => {
        setPosterURL(data.poster);
      })
      .catch((error) => {
        console.error(error);
      });

    fetch(`${serverURL}/get-all-tokens`)
      .then((res) => res.json())
      .then((data) => {
        setTokens(data.tokens);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateSelectedFilm = ({
    filmID,
    title,
    date,
    theater,
    viewType,
    time,
    poster,
  }) => {
    let updatedValues = {};

    filmID ? (updatedValues.filmID = filmID) : '';
    title ? (updatedValues.title = title) : '';
    date ? (updatedValues.date = date) : '';
    theater ? (updatedValues.theater = theater) : '';
    viewType ? (updatedValues.viewType = viewType) : '';
    time ? (updatedValues.time = time) : '';
    poster ? (updatedValues.poster = poster) : '';

    setSelectedFilm((selectedFilm) => ({
      ...selectedFilm,
      ...updatedValues,
    }));
  };

  const updateToSee = () => {
    if (filmDone) {
      setFilmDone(false);
    } else {
      setTimeout(() => {
        setFilmDone(true);
      }, 3000);
    }
  };

  const updateSeenFilms = (newTokenURL) => {
    setTokens([...tokens, newTokenURL]);
  };

  const value = {
    films,
    posterURL,
    getFilmData,
    updateSelectedFilm,
    selectedFilm,
    updateSeenFilms,
    tokens,
    updateToSee,
    serverURL,
    filmDone,
  };

  return (
    <FilmsContext.Provider value={value}>{children}</FilmsContext.Provider>
  );
};

export { FilmsContext, Provider };
