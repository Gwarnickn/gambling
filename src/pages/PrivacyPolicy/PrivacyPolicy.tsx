import React, {useState} from "react";
import './privacy-policy.scss';
import Term from "../../components/Term/Term";
import { NavLink } from "react-router-dom";
import { ReactComponent as LogoIcon } from '../../assets/logo/logo-icon.svg';
import HorizontalButton from "../../components/HorizontalButton/HorizontalButton";

const PrivacyPolicy = () => {
    const privacyPolicies = [
        {
            header: "1. Introduction",
            content: <>ComfyCoiner values your privacy. This Privacy Policy explains how we collect, use, and protect your personal information while you interact with our platform.</>
        },
        {
            header: "2. Information We Collect",
            content: <ul>
                <li>Account Information: When you sign up, we collect your username, email address, and password.</li>
                <li>Usage Data: We collect data about your interactions on the site, including games played, chat messages, and friend lists.</li>
                <li>Cookies: We use cookies to personalize your experience and analyze site usage.</li>
            </ul>
        },
        {
            header: "",
            content: <></>
        },
        {
            header: "",
            content: <></>
        },
        {
            header: "",
            content: <></>
        },
        {
            header: "",
            content: <></>
        },
        {
            header: "",
            content: <></>
        },
        {
            header: "",
            content: <></>
        },
        {
            header: "",
            content: <></>
        },
    ]
    const [activeTerm, setActiveTerm] = useState(-1);
    return(
        <div className="privacy-policy-page">
            <div className="privacy-policy">
                <div className="to-terms-of-service">
                    <HorizontalButton to="terms-of-service" up>Terms of service</HorizontalButton>
                </div>
                <div className="privacy-policy-header">Privacy policy</div>
                <div className={`policies-container ${localStorage.getItem("page-status")}`}>
                    {privacyPolicies.map((term, key) => (
                        <Term id={key} activeTerm={activeTerm} header={term.header} content={term.content} handleClick={() => {activeTerm === key ? setActiveTerm(-1) : setActiveTerm(key)}}/>
                    ))}
                </div>
                <div className="to-about">
                    <HorizontalButton to="about">About</HorizontalButton>
                </div>
            </div>
        </div>
    )
}
export default PrivacyPolicy;