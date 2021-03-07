import React from 'react'
import Portfolio from '../Portfolio'
import Hero from '../Hero'
import homeImage from '../images/home.jpg'

function HomePage() {
    return (
        <div>
            <Hero title="I ❤️ taking pics." subtitle="Hi! I'm Evgeny, a full-stack creative in Rotterdam, and I like to shoot photos, videos, and get shit done." bgImage={homeImage} />
            <Portfolio className="mt-screenheight" />
        </div>
    )
}

export default HomePage
