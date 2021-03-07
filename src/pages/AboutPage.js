import React from 'react'
import Hero from '../Hero'
import AboutImage from '../images/about-promo.jpg'

function AboutPage() {
    return (
        <div>
            <Hero title="About me" subtitle="Wanna know more? Sure thing. I'm a student by day, techie in the evening and a photographer at night." bgImage={AboutImage} />
        </div>
    )
}

export default AboutPage
