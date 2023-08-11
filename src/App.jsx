import './App.css'
import { useState } from 'react';
import Joke from './joke.jsx';
import Title from './title';
import ProfilePic from './profilePic';
import Detail from './detail.jsx';

function App() {

  const [seeMore, setSeeMore] = useState(false);
  const updateSeeMore = () => {setSeeMore(!seeMore)};

  //this could be read from a database, for example, hard coded for now
  const details = [{
      title: "Hobbies",
      body: "Language learning, corgi-walking and making heart-breaker TTRPGs"
    },
    {
      title: "Skills",
      body: "Web dev, Japanese, Scuba"
    },
    {
      title: "Goals",
      body: "Get six figures in my savings account, tour Nice, finish that Dieselpunk RPG"
    }
  ];

  const detailElements = details.map((detail, index) => {
    return <Detail key={index} title={detail.title} body={detail.body}/>
  });

  return (
    <>
      <Title />

      <ProfilePic/>

      <button onClick={updateSeeMore}>See more</button>

      {seeMore && <div>{detailElements}</div>}

      <Joke />
    </>
  )
}

export default App
