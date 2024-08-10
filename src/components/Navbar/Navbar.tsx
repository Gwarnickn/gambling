import React, {FunctionComponent, useEffect, useState, useContext} from "react";
import './navbar.scss';
import Button from "../Button/Button";
import { ReactComponent as Github} from '../../assets/github-icon.svg';
import { ReactComponent as Linkedin} from '../../assets/linkedin-icon.svg';
import { ReactComponent as Twitter} from '../../assets/twitter-icon.svg';
import { ReactComponent as Logo} from '../../assets/logo.svg';
import ColorPicker from "../ColorPicker/ColorPicker";
import Switch from "../Switch/Switch";
import { ReactComponent as Sun} from '../../assets/sun.svg';
import { ReactComponent as Moon} from '../../assets/moon.svg';
import PageFocus from "../../contexts/PageFocus";
import { NavLink } from "react-router-dom";


const Navbar:FunctionComponent = () => {
    const {pageFocus, setPageFocus} = useContext(PageFocus);
    const [theme, setTheme] = useState(localStorage.getItem("page-theme") === "light-theme" ? true : false);

    const changeTheme = (switchValue: boolean) => {
        setTheme(switchValue);
        document.body.className = switchValue ? "light-theme" : "dark-theme";
        localStorage.setItem("page-theme", switchValue ? "light-theme" : "dark-theme");
    }

    useEffect(() => {
        document.body.className = localStorage.getItem("page-theme") === "light-theme" ? "light-theme" : "dark-theme";
    },[])

    return(
        <div className="navbar">
            <div className="buttons">
                <Button className="btn-secondary btn-logo"><Logo/></Button>
                <ColorPicker/>
                <Switch handleChange={changeTheme} defaultValue={theme}/> 
                <div className={`theme-box theme-${theme ? "light" : "dark"}`}>{theme ? <Sun/> : <Moon/>}</div>
            </div>
            <div className="account-and-media">
                <div className="media-container">
                    <a href="" target="blank"><div className="media">
                        <Twitter/>
                    </div></a>
                    <a href="https://www.linkedin.com/in/nikita-gwardiak-49593031a/" target="blank"><div className="media">
                        <Linkedin/>
                    </div></a>
                    <a href="https://github.com/Gwarnickn/gambling" target="blank"><div className="media">
                        <Github/>
                    </div></a>
                </div>
                <div className="account">
                    <NavLink to="log-in" className="nav-link"><Button className="btn-secondary">Log in</Button></NavLink>
                    <NavLink to="sign-up" className="nav-link"><Button className="btn-primary">Sign up</Button></NavLink>
                </div>
            </div>
        </div>
    )
}
export default Navbar