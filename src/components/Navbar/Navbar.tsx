import React from "react";
import './navbar.scss';
import Button from "../Button/Button";
import { ReactComponent as GitHubLogo } from '../../assets/github-mark.svg';

const Navbar = () => {

    return(
        <div className="navbar">
            <div className="buttons">

            </div>
            <div className="account-and-media">
                <div className="media-container">
                    <div className="media">
                        <GitHubLogo/>
                    </div>
                    <div className="media">
                        <GitHubLogo/>
                    </div>
                    <div className="media">
                        <GitHubLogo/>
                    </div>
                </div>
                <Button>Login</Button>
            </div>
        </div>
    )
}
export default Navbar