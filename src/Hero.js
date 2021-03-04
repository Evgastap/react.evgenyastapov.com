import React from 'react'
import PropTypes from 'prop-types'

function Hero(props) {
    return (
        <div className="h-screen flex bg-cover " style={{backgroundImage: props.imgUrl}}>
                <div className="bg-black bg-opacity-60 h-full w-full flex items-center">
                <div className="text-center w-full">
                    <span className="text-8xl font-bold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-red-500">
                        {props.title}
                    </span>
                    </span>
                    <div className="text-gray-300 text-xl mt-10">{props.subtitle}</div>
                </div>
            </div>
        </div>
    )
}

Hero.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imgUrl: PropTypes.string
}

export default Hero

