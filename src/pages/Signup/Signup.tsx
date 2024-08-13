import React from "react";
import './signup.scss';
import { ReactComponent as ArrowDown} from "../../assets/arrow-down.svg";
import { ReactComponent as LogoIcon } from '../../assets/logo/logo-icon.svg';
import { FormInput } from "../../components/Form/FormInput";
import Button from "../../components/Button/Button";
import { NavLink } from "react-router-dom";
import { ReactComponent as UserIcon } from '../../assets/user.svg';
import { ReactComponent as EmailIcon } from '../../assets/email.svg';
import { ReactComponent as PasswordIcon } from '../../assets/password.svg';
import { ReactComponent as ConfirmPasswordIcon } from '../../assets/password-2.svg';
import { Checkbox } from "../../components/Form/Common/Checkbox/Checkbox";


const Signup = () =>{

    return(
        <div className="signup-page">
            <div className="signup-wrapper">
                <div className="signup">
                    <div className="signup-logo">
                        <LogoIcon/>
                        <div className="signup-logo-text">ComfyClicker</div>
                    </div>
                    <div className="signup-header">Sign up</div>
                    <div>Sign up and begin an incredible adventure with the coziest clicker and a seamless experience.</div>
                    <form className="signup-form">
                        <div className="svg-with-input">
                            <UserIcon/>
                            <FormInput name="username" type="text" placeholder="username" required/>
                        </div>
                        <div className="svg-with-input">
                            <EmailIcon/>
                            <FormInput name="email" type="email" placeholder="e-mail" required/>
                        </div>
                        <div className="svg-with-input">
                            <PasswordIcon/>
                            <FormInput name="password" type="password" pattern=".{8,}" placeholder="password" required/>
                        </div>
                        <div className="svg-with-input">
                            <ConfirmPasswordIcon/>
                            <FormInput name="repeated-password" type="password" pattern=".{8,}" placeholder="confirm password" required/>
                        </div>
                        <Checkbox name="accept_terms_and_privacy">I agree to the <NavLink to="password-reset" className="nav-link nav-link-text">terms of service</NavLink> and <NavLink to="password-reset" className="nav-link nav-link-text">privacy policy</NavLink></Checkbox>
                        <Button type="submit" className="btn-primary">Sign up</Button>
                    </form>
                    <div>
                        Already have an account?
                        <NavLink to="log-in" className="nav-link"><span className="primary-text glow cursor-pointer"> Log in!</span></NavLink>
                    </div>
                </div>
                <div className="go-back" onClick={() => {window.history.back()}}>
                    <ArrowDown/>
                </div>
            </div>
        </div>
    )
}
export default Signup;