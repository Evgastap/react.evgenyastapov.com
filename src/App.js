import React from 'react'
import AboutText from './AboutText'
import Hero from './Hero'
import homeImage from './images/home.jpg'
import Navbar from "./Navbar"

function App() {
  return (
    <>
    <Hero title="I ❤️ taking pics." subtitle="Hi! I'm Evgeny, a full-stack creative in Rotterdam, and I like to shoot photos, videos, and get shit done." bgImage={homeImage} />
    <Navbar />
    <AboutText />
    </>
  );
}

export default App;
