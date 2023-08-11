import { useState, useEffect } from 'react';

export default function Joke() {
  const [joke, setJoke] = useState("Fetching");

  const fetchJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(json => setJoke(json.value));
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <>
      <hr />
      <p>{joke}</p>
    </>
  )
}