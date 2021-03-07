import React from 'react'

export default function AboutText() {
    return (
        <>
            <div className="h-screen"></div>
            <div className="grid lg:grid-cols-2 mx-40">
                <div>picture goes here</div>
                <div>
                    <div className="text-lg uppercase text-gray-200">About me</div>
                    <span className="bg-clip-text text-2xl font-semibold text-transparent bg-gradient-to-r from-purple-500 to-red-500">Jack of all trades, master of some</span>
                    <div className="text-gray-100 text-lg">Did you know that last part of the quote? I didn't until recently, but it describes me pretty well. I don't want to be known for studying x, taking pictures of y, or "that guy who only does z well". I'm not a landscape photographer, nor a street photographer, nor a portrait guy. I want to try it all - take pictures of everything, and have fun while doing it, rather than do one thing and get stuck in a rut.

    And this describes me well in real life too. While there are things I excel at, I never let them define who I am, and always try to be better at something new. So if you want to get to know me better, shoot me a message, and let's talk!</div>
                </div>
            </div>
        </>
    )
}
