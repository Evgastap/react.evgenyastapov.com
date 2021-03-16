import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelopeOpen, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { React, useState } from 'react'
import { ReactComponent as Logo} from "./logo.svg"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
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
    },
    // TODO: use these
    hover: {
        scale: 1.1, 
        y: -5
    },
    tap: {
        scale: 0.4
    },
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

    // state
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <AnimatePresence>
                {isOpen && <motion.div 
                    className={"fixed top-0 w-full h-full bg-gradient-to-tr from-purple-700 to-red-600 flex items-center justify-center"}
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <ul className="text-3xl lg:text-4xl font-medium text-white tracking-wider leading-relaxed lg:leading-loose text-center" onClick={() => {setIsOpen(false)}}>
                        {linksMap.map((link, index) => (
                            <motion.li variants={linkVariants} whileHover={{scale:1.1}} whileTap={{scale:0.5}} key={index}><Link to={link.url}>{link.title}</Link></motion.li>
                        ))}
                        <motion.li variants={linkVariants} whileHover={{scale:1.1}} whileTap={{scale:0.5}}><a href="https://instagram.com/evgastap">Instagram</a></motion.li>
                        <motion.li variants={linkVariants} whileHover={{scale:1.1}} whileTap={{scale:0.5}} className="pt-5">
                            {iconsMap.map((item, index) => (
                                <motion.div className="inline-block" variants={linkVariants} key={index}><a href={item.url}><FontAwesomeIcon icon={item.fa} className="mx-4"/></a></motion.div>
                            ))}
                        </motion.li>
                    </ul>
                </motion.div>}
            </AnimatePresence>
        
            {/* navbar: home icon & burger menu */}
            <div className="fixed flex w-full px-5 lg:px-10 pt-5 justify-between top-0">
                <motion.div whileTap={{scale: 0.4}} onClick={() => setIsOpen(false)} layoutId="navBar"><Link to="/"><Logo className="h-10"/></Link></motion.div>
                <AnimateSharedLayout>
                    {!isOpen && <motion.div layoutId="navBarLayout"><FontAwesomeIcon icon={faBars} className="fill-current text-white w-10 text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)} /></motion.div>}
                    {isOpen && <AnimatePresence>
                        <motion.div layoutId="navBarLayout"><FontAwesomeIcon icon={faTimes} className="fill-current text-white w-10 text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}/></motion.div>
                    </AnimatePresence>}
                </AnimateSharedLayout>
            </div>
        </>
    )
}

export default Navbar