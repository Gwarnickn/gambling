import React from "react";
import './navbar.scss';
import Button from "../Button/Button";
import { ReactComponent as Github} from '../../assets/github-icon.svg';
import { ReactComponent as Linkedin} from '../../assets/linkedin-icon.svg';
import { ReactComponent as Twitter} from '../../assets/twitter-icon.svg';
import { ReactComponent as Logo} from '../../assets/logo.svg';
import ColorPicker from "../ColorPicker/ColorPicker";

const Navbar = () => {

    return(
        <div className="navbar">
            <div className="buttons">
                <Button className="btn-secondary btn-logo"><Logo/></Button>
                <ColorPicker/>
            </div>
            <div className="account-and-media">
                <div className="media-container">
                    <div className="media">
                        <a href="https://x.com/Gwarnick_"><Twitter/></a>
                    </div>
                    <div className="media">
                        <a href="https://www.linkedin.com/in/nikita-gwardiak-49593031a/"><Linkedin/></a>
                    </div>
                    <div className="media">
                        <a href="https://github.com/Gwarnickn/gambling"><Github/></a>
                    </div>
                </div>
                <div className="account">
                    <Button className="btn-secondary">Login</Button>
                    <Button className="btn-primary">Sign in</Button>
                </div>
            </div>
        </div>
    )
}
export default Navbar