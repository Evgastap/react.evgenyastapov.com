import React from 'react'

function ImageCard({image, category, title, description}) {
    return (
        <figure className="relative overflow-hidden">
            <img src={image} alt={title} className="" />
            <figcaption className="absolute z-10 top-0">
                {title}
                {description}
            </figcaption>
        </figure>
    )
}

export default ImageCard
