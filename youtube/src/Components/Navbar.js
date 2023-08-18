import React, {Component, useState} from 'react';
import icon from './createlogo.png';
import icon1 from './img.png';
import defpic from './pfp/createlogo.png'
function Navbar(props)
{
    const [btnstyle, setBtnStyle] = useState("search")
    const [dashStyle, setDashStyle] = useState("fa-solid fa-bars fa-lg dash none")
    const [searchStyle, setSearchStyle] = useState("hehe")
    const [borderclr, setBorderclr] = useState("searchbtnback1")
    const [image, setImage] = useState(icon)

    const [bellStyle, setBellStyle] = useState("fa-regular fa-bell bell")
    const [c, setC] = useState(1)
    const [noti, setNoti] = useState(0)

    const [digit, setDigit] = useState(noti!=0?(noti <= 9 ? "notinum" : "notinum1"):"none1")
    const [ban, setBan] = useState(noti!=0?(noti <= 9 ? "banner" : "banner1"):"none1")


    const handleFocus = (e) => {
        setSearchStyle("fa-solid fa-magnifying-glass searchicon")
        setBtnStyle("searchfocus")
        setBorderclr("searchbtnback1focus")
    }
    const handleBlur = (e) => {
        setSearchStyle("hehe")
        setBtnStyle("search")
        setBorderclr("searchbtnback1")
    }
    const handleHover = (e) => {
        setImage(icon1)

    }
    const handleHoverOut = (e) => {
        setImage(icon)

    }
    const handleHover1 = (e) => {
        if ((noti <= 9)&&noti!=0 ){
            setBan("bannerhover")
        }
        else if(noti===0){
            setBan("none1")
        }
        else {
            setBan("bannerhover1")
        }
    }
    const handleHoverOut1 = (e) => {
        if ((noti <= 9)&&noti!=0) {
            setBan("banner")
        }
        else if(noti===0){
            setBan("none1")
        }
        else {
            setBan("banner1")
        }
    }

    const handleBellClick = (e) => {
        setC(c + 1)
        if (c % 2 === 0) {
            setBellStyle("fa-regular fa-bell bell")
        } else {
            setBellStyle("fa-solid fa-bell bell")
        }
    }
    return (<div>


        <div className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <li>
                        <i className={dashStyle} style={{color: "#ffffff",}}></i>
                    </li>
                    <li>
                        <a href="#"><img src={require('./youtube_logo.png')} height="40px" draggable="false"/></a>
                    </li>
                    <li>
                        <i className={searchStyle} style={{color: "#ffffff",}}></i>
                        <div className="wrapper">
                            <input type="text" onFocus={handleFocus} onBlur={handleBlur} placeholder="Search"/>
                            <button className={btnstyle}>
                                <div className={borderclr}>
                                    <i className="fa-solid fa-magnifying-glass searchbtn"
                                       style={{color: "#ffffff",}}></i>
                                </div>
                                <div className="searchbtnback2">

                                </div>
                            </button>
                        </div>
                    </li>
                    <li>
                        <i className="fa-solid fa-microphone mic" style={{color: "#ffffff",}}></i>
                    </li>
                    <li>
                        <img className={image === icon ? "create" : "create1"} src={image}
                             height={image === icon ? "20px" : "40px"} onMouseOver={handleHover}
                             onMouseOut={handleHoverOut} draggable="false"/>

                    </li>
                    <li className="noti">
                        <i className={bellStyle} style={{color: "#ffffff",}} onMouseOver={handleHover1}
                           onMouseOut={handleHoverOut1} onClick={handleBellClick}></i>
                        <div className={ban}>
                            <div className={digit}>
                                {noti!=0?(noti > 9 ? "9+" : noti):""}
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src={defpic} height="40px" className="defpfp" draggable="false"/>
                    </li>


                </li>

            </ul>

        </div>
    </div>);
}

export default Navbar;