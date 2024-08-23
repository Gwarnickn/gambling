import React, {useState} from "react";
import './terms-of-service.scss';
import Term from "../../components/Term/Term";
import { NavLink } from "react-router-dom";
import { ReactComponent as ArrowDown} from "../../assets/arrow-down.svg";
import { ReactComponent as LogoIcon } from '../../assets/logo/logo-icon.svg';
import HorizontalButton from "../../components/HorizontalButton/HorizontalButton";

const TermsOfService = () => {
    const terms = [
        {
            header: "1. Acceptance of Terms",
            content: <>By accessing and using ComfyCoiner, you agree to comply with these Terms of Service. If you do not agree, please do not use our platform.</>,
        },
        {
            header: "2. Eligibility",
            content: <>You must be at least 13 years old to use ComfyCoiner. By creating an account, you confirm that you meet this age requirement.</>,
        },
        {
            header: "3. Account Registration",
            content: <>To access certain features, you must create an account. You are responsible for maintaining the confidentiality of your account information and for any activities that occur under your account.</>,
        },
        {
            header: "4. Use of Tokens",
            content: <ul>
                <li>To access certain features, you must create an account. You are responsible for maintaining the confidentiality of your account information and for any activities that occur under your account.</li>
                <li>You earn tokens through gameplay, which can be used to participate in roulette and other site features.</li>
                <li>Tokens cannot be purchased, sold, or exchanged for real money or any other goods outside of the platform.</li>
            </ul>,
        },
        {
            header: "5. Chat and Social Features",
            content: <ul>
                <li>Users must interact respectfully in public and private chats. Harassment, abuse, or inappropriate content is strictly prohibited.</li>
                <li>Users can invite friends to private tables, but all interactions must adhere to the community standards outlined here.</li>
            </ul>,
        },
        {
            header: "6. Prohibited Conduct",
            content: <>You agree not to:
                <ul>
                    <li>Cheat, hack, or exploit the platform.</li>
                    <li>Engage in spamming, advertising, or solicitation.</li>
                    <li>Impersonate other users or ComfyCoiner staff.</li>
                    <li>Share personal information in public chats.</li>
                </ul></>,
        },
        {
            header: "7. Account Suspension and Termination",
            content: <>ComfyCoiner reserves the right to suspend or terminate any account that violates these Terms of Service. Suspensions or terminations may occur without prior notice, and tokens or progress associated with the account may be forfeited.</>,
        },
        {
            header: "8. Intellectual Property",
            content: <>All content on ComfyCoiner, including but not limited to text, images, and game elements, is owned by ComfyCoiner or its licensors. You may not reproduce, distribute, or create derivative works from any content without our express permission.</>,
        },
        {
            header: "9. Disclaimers and Limitation of Liability",
            content: <ul>
                <li>ComfyCoiner is provided "as is" without warranties of any kind. We do not guarantee uninterrupted access or the accuracy of content.</li>
                <li>We are not liable for any damages arising from your use of ComfyCoiner, including but not limited to loss of data or account suspension.</li>
            </ul>,
        },
        {
            header: "10. Amendments",
            content: <>We may update these Terms of Service periodically. Users will be notified of significant changes, and continued use of the platform constitutes acceptance of the new terms.</>,
        },
        {
            header: "11. Governing Law",
            content: <>These Terms of Service are governed by the laws of [Your Jurisdiction]. Any disputes arising from the use of ComfyCoiner will be resolved in the courts of [Your Jurisdiction].</>,
        },
        {
            header: "12. Contact Information",
            content: <>For questions or concerns regarding these Terms of Service, please contact us at [Insert Contact Information].</>,
        }
    ];

    const [activeTerm, setActiveTerm] = useState(-1);
    return(
        <div className="terms-of-service-page">
            <div className="terms-of-service">
                <div className="to-about">
                    <HorizontalButton to="about" up>About</HorizontalButton>
                </div>
                <div className="terms-of-service-header">Terms of service</div>
                <div className={`terms-container ${localStorage.getItem("page-status")}`}>
                {terms.map((term, key) => (
                    <Term id={key} activeTerm={activeTerm} header={term.header} content={term.content} handleClick={() => {activeTerm === key ? setActiveTerm(-1) : setActiveTerm(key)}}/>
                ))}
                </div>
                <div className="to-privacy-policy">
                    <HorizontalButton to="privacy-policy">Privacy policy</HorizontalButton>
                </div>
            </div>
        </div>
    )
}
export default TermsOfService;