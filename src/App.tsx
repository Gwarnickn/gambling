import React, {createContext, SetStateAction, useEffect, useState} from 'react';
import './main.scss';
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';
import PageFocus from './contexts/PageFocus';
import { useLocation } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import PasswordReset from './pages/PasswordReset/PasswordReset';

function App() {
  const location = useLocation();

  const [pageFocus, setPageFocus] = useState<string | null>(localStorage.getItem('page-focus') || "homepage");
  const [isMoving, setIsMoving] = useState(false);

  document.body.className = localStorage.getItem("page-theme") === "light-theme" ? "light-theme" : "dark-theme";
  const color = localStorage.getItem("primary-color") || "#ff4d00";
  document.documentElement.style.setProperty('--g-primary',color);
  document.documentElement.style.setProperty('--g-primary-op70',`${color}b3`);
  document.documentElement.style.setProperty('--g-primary-op50',`${color}80`);
  document.documentElement.style.setProperty('--g-primary-op30',`${color}4d`);

  useEffect(() => {
    //@ts-ignore
    localStorage.setItem('page-focus', pageFocus);
    setIsMoving(true);
    setTimeout(() =>{
      setIsMoving(false);
    },1000)
  },[pageFocus])

  // useEffect(() =>{
  //   setPageFocus(location.pathname.slice(1,location.pathname.length))
  // },[pageFocus])

  useEffect(() =>{
    setPageFocus(location.pathname.slice(1,location.pathname.length))
  })

  return (
    <PageFocus.Provider value={{pageFocus, setPageFocus}}>
      <div className={`app app-focus-${pageFocus} moving-${isMoving}`}>
        <Homepage/>
        <Login/>
        <Signup/>
        <PasswordReset/>
        <div style={{backgroundColor: "yellow"}}></div>
        <div style={{backgroundColor: "purple"}}></div>
        <div style={{backgroundColor: "gray"}}></div>
        <div style={{backgroundColor: "red"}}></div>
        <div style={{backgroundColor: "green"}}></div>
        <div style={{backgroundColor: "blue"}}></div>
        <div style={{backgroundColor: "yellow"}}></div>
        <div style={{backgroundColor: "purple"}}></div>
        <div style={{backgroundColor: "gray"}}></div>
        <div style={{backgroundColor: "red"}}></div>
        <div style={{backgroundColor: "green"}}></div>
        <div style={{backgroundColor: "blue"}}></div>
        <div style={{backgroundColor: "yellow"}}></div>
        <div style={{backgroundColor: "purple"}}></div>
        <div style={{backgroundColor: "gray"}}></div>
        <div style={{backgroundColor: "red"}}></div>
        <div style={{backgroundColor: "green"}}></div>
        <div style={{backgroundColor: "blue"}}></div>
        <div style={{backgroundColor: "yellow"}}></div>
        <div style={{backgroundColor: "purple"}}></div>
        <div style={{backgroundColor: "gray"}}></div>
      </div>
    </PageFocus.Provider>
  );
}

export default App;
