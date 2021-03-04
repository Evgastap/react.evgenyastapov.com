import React from 'react'
import Hero from './Hero'
import Navbar from "./Navbar"
import Portfolio from "./Portfolio"

function App() {
  return (
    <>
    <Hero title="I ❤️ taking pics." subtitle="Hi! I'm Evgeny, a full-stack creative in Rotterdam, and I like to shoot photos, videos, and get shit done." imgUrl="url('./images/home.jpg')" />
    <Navbar />
    <Portfolio />
    </>
  );
}

export default App;
