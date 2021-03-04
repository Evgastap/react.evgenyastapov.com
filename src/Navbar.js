import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { React, Component } from 'react'
import { ReactComponent as Logo} from "./logo.svg"

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = { showMenu: false }
        this.menuShowToggle = this.menuShowToggle.bind(this)
    }

    menuShowToggle = () => {
        this.setState({showMenu : !this.state.showMenu})
    }

    render = () => {
        return (
            <>
            <div className={this.state.showMenu ? "fixed top-0 w-full h-full bg-gradient-to-tr from-purple-700 to-red-600 flex items-center" : "hidden"}>
                <ul className="text-3xl font-medium text-white tracking-wider leading-relaxed text-center w-full">
                        <li>Portfolio</li>
                        <li>About</li>
                        <li>Instagram</li>
                        <li>Contact</li>
                        <li className="pt-5">
                            <FontAwesomeIcon icon={faEnvelopeOpen} /><span className="px-2"></span>
                            <FontAwesomeIcon icon={faInstagram}/><span className="px-2"></span>
                            <FontAwesomeIcon icon={faLinkedinIn}/><span className="px-2"></span>
                            <FontAwesomeIcon icon={faYoutube}/>
                        </li>
                </ul>
            </div>
            <div className="fixed flex w-full px-10 pt-5 justify-between top-0">
                <div><Logo className="h-10"/></div>
                <div><FontAwesomeIcon icon={faBars} className="fill-current text-white w-10 text-3xl" onClick={this.menuShowToggle} /></div>
            </div>
            </>
        )
    }
}
