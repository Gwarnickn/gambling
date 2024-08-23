import React, {useEffect, useState} from "react";
import './about.scss';
import { ReactComponent as LogoIcon } from '../../assets/logo/logo-icon.svg';
import HorizontalButton from "../../components/HorizontalButton/HorizontalButton";
import Spacer from "../../components/Spacer/Spacer";
const About = () => {

    return(
        <div className="about-page">
            <div className="about-wrapper">
                <div className="logo-container">
                    <div className="about-logo">
                        <LogoIcon/>
                        <div className="about-logo-text">ComfyCoiner</div>
                    </div>
                </div>
                <div className="about-text">
                <Spacer position="left">About ComfyCoiner</Spacer>
                <span>ComfyCoiner is all about simple, enjoyable gaming. Our platform allows you to earn tokens through clicking and use them to play risk-free roulette. With no real money involved, it’s designed for those who want to enjoy gaming without any pressure or stress.</span>
                <Spacer position="left">Our goal</Spacer>
                <span>ComfyCoiner is focused on offering a fun and relaxed gaming experience. Whether you’re looking to pass the time or just enjoy a casual game, ComfyCoiner provides a straightforward and engaging way to play. It’s all about enjoying the process, with easy-to-use features that let you play at your own pace.</span>
                <Spacer position="left">In a nutshell</Spacer>
                <span>At its core, ComfyCoiner is about bringing you a stress-free, enjoyable way to game.</span>
                </div>
                <div className="to-terms-of-service">
                    <HorizontalButton to="terms-of-service">Terms of service</HorizontalButton>
                </div>
            </div>
        </div>
    )
}
export default About;