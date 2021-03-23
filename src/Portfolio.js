import {React, useState} from 'react'
import ImageCard from './ImageCard'
import photo1 from './images/work-1.jpg'
import photo2 from './images/work-2.jpg'
import photo3 from './images/work-3.jpg'
import photo4 from './images/work-4.jpg'


function Portfolio({images}) {

    const [selectedImg, setSelectedImg] = useState(null)

    return (
        <>
        <div className="w-full flex justify-center">
            <div className="lg:w-3/4 lg:flex">
            <style jsx>{`
                .masonry {
                    column-count: 1;
                    column-gap: 2rem;
                }
                @screen md {
                    .masonry {
                    column-count: 2;
                    }
                }
            `}</style>
                <div className="lg:w-1/4 mx-4">
                    <p className="text-gray-300 uppercase">Portfolio</p>
                    <span className="text-4xl font-bold md:text-2xl lg:text-4xl">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-red-500">
                            I really do ❤️ taking pics
                        </span>
                    </span>
                </div>
                <div className="lg:w-3/4 grid lg:grid-cols-2 mx-10 lg:mx-0 gap-4 row-auto">
                    <ImageCard image={photo1} category="events" title="ETS 2019" description="Organized and shot this 500+ person tech event." />
                    <ImageCard image={photo2} category="portraits" title="Smoke bombs" description="It's a cliché in photography, but it's fun as heck." />
                    <ImageCard image={photo3} category="personal" title="Milky way" description="It's a dream of mine to go to Norway to shoot the milky way and northern lights. One day. This is the best I got so far." />
                    <ImageCard image={photo4} category="portraits" title="Portraits" description="I shoot portraits, too!" />
                    {/* <img src={photo1} alt=""/>
                    <img src={photo2} alt=""/>
                    <img src={photo3} alt=""/>
                    <img src={photo4} alt=""/> */}
                </div>
                {/* <div className="w-3/4 flex flex-wrap">
                    <img src={photo1} alt="" className="w-1/2" /> 
                    <img src={photo2} alt="" className="w-1/2" />
                    <img src={photo3} alt=""/>
                    <img src={photo4} alt=""/>
                </div> */}
            </div>
        </div>
        {<div className="absolute"><ImageCard image={photo1} category="events" title="ETS 2019" description="Organized and shot this 500+ person tech event." /></div>}
        </>
    )
}

export default Portfolio
