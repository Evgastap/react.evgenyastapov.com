import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { React, useState } from 'react'
import { ReactComponent as Logo} from "./logo.svg"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"


const menuVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.25,
            staggerChildren: 0.2
        }
    }
}

const linkVariants = {
    hidden: {
        opacity: 0,
        y: -10
    },
    visible: {
        opacity: 1, 
        y: 0
    }
}

    // links
    const linksMap = [
        {title: "Portfolio", url: "/"},
        {title: "About", url: "/about"},
        {title: "Contact", url: "/contact"}
    ]

    const iconsMap = [
        {fa: faEnvelopeOpen, url: "mailto:evgastap@gmail.com"},
        {fa: faInstagram, url: "https://instagram.com/evgastap"},
        {fa: faLinkedinIn, url: "https://linkedin.com/in/evgeny-astapov"},
        {fa: faYoutube, url: "https://www.youtube.com/channel/UCkIpIRSrYHhTd0gmvJ8523g"}
    ]

function Navbar() {

    // states
    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    function setNavState() { 
        setIsOpen(!isOpen) // setIsOpen is called async, so we check the opposite of it to setIsVisible (big retard) 
        if (!isOpen) {
            setIsVisible(true)
        }
    }

        return (
            <>
            <motion.div 
                className={isVisible ? "fixed top-0 w-full h-full bg-gradient-to-tr from-purple-700 to-red-600 flex items-center justify-center" : "hidden"}
                animate={isOpen ? "visible" : "hidden"}
                variants={menuVariants}
                onAnimationComplete={() => isOpen ? null : setIsVisible(false)}
            >
                <ul className="text-3xl lg:text-4xl font-medium text-white tracking-wider leading-relaxed lg:leading-loose text-center" onClick={() => {setNavState()}}>
                    {linksMap.map((link, index) => (
                        <motion.li variants={linkVariants} key={index} whileHover={{scale: 1.1, y: -5}} transition={{duration: 0.25}} whileTap={{scale: 0.4}}><Link to={link.url}>{link.title}</Link></motion.li>
                    ))}
                    <motion.li variants={linkVariants} whileHover={{scale: 1.1, y: -5}} transition={{duration: 0.25}} whileTap={{scale: 0.4}}><a href="https://instagram.com/evgastap">Instagram</a></motion.li>
                    <motion.li variants={linkVariants} className="pt-5">
                        {iconsMap.map((item, index) => (
                            <motion.div className="inline-block" whileHover={{scale: 1.1, y: -5}} whileTap={{scale: 0.4}}><a key={index} href={item.url}><FontAwesomeIcon icon={item.fa} className="mx-4"/></a></motion.div>
                        ))}
                    </motion.li>
                </ul>
            </motion.div>
            <div className="fixed flex w-full px-5 lg:px-10 pt-5 justify-between top-0">
                <motion.div whileTap={{scale: 0.4}}><Link to="/"><Logo className="h-10"/></Link></motion.div>
                <div><FontAwesomeIcon icon={faBars} className="fill-current text-white w-10 text-3xl cursor-pointer" onClick={() => {setNavState()}} /></div>
            </div>
            </>
        )
}

export default Navbar