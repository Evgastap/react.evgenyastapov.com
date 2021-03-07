import React from 'react'
import PropTypes from 'prop-types'
import { motion, useTransform, useViewportScroll } from "framer-motion"

function Hero({title, subtitle, bgImage}) {
    const { scrollY } = useViewportScroll()
    let intViewportHeight = window.innerHeight;
    
    const yPosAnimation = useTransform(scrollY, [0,intViewportHeight/2], [1,0])
    const yScaleAnimation = useTransform(scrollY, [0, intViewportHeight/2], [1, 0.98])
    const heroStyle = {
        backgroundImage: `url(${bgImage})`, 
        opacity: yPosAnimation, 
        backgroundPositionX: "85%", 
        backgroundPositionY: "25%",
        scale: yScaleAnimation,
    }

    return (
        <motion.div className="h-screen w-screen bg-gray-700 fixed top-0 -z-10 flex bg-cover" style={heroStyle}>
                <div className="bg-black bg-opacity-60 h-full w-full flex items-center">
                <div className="text-center w-full">
                    <span className="text-4xl font-bold md:text-6xl lg:text-8xl">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-red-500">
                            {title}
                        </span>
                    </span>
                    <div className="text-gray-300 text-xl mt-10 mx-10 lg:mx-0">{subtitle}</div>
                </div>
            </div>
        </motion.div>
    )
}

Hero.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
}

export default Hero

