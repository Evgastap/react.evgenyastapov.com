import React from 'react'
import AboutText from '../AboutText'
import Hero from '../Hero'
import AboutImage from '../images/about-promo.jpg'

function AboutPage() {
    return (
        <div>
            <Hero title="About me" subtitle="Wanna know more? Sure thing. I'm a student by day, techie in the evening and a photographer at night." bgImage={AboutImage} />
            <div className="mt-screenheight"><AboutText /></div>
        </div>
    )
}

export default AboutPage
