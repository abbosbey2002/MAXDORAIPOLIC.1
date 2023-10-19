import React, {useState} from "react";
import logo from "../../public/images/Logo1.svg";
import {RxHamburgerMenu} from "react-icons/rx";
import {RiCloseCircleFill} from "react-icons/ri";
import {Link} from "react-router-dom";
import "../../public/styles/majburiy/majburiy.scss";

function Navbar() {
    const [active, setActive] = useState(false);

    const openModal = () => {
        console.log("active");
        return setActive(!active);
    };
    return (
        <div>
            <div></div>
            <header>
                <div className="container">
                    <div className="header_items">
                        <div className="header_items_logo">
                            <Link to={"/"}>
                                <img src={logo} alt="logo"/>
                            </Link>
                        </div>

                        <div className="header_item_navbar">
                            <div className="navbar">
                                <ul>
                                    <li>
                                        <Link to={"/"} className="anchor">Asosiy</Link>
                                    </li>
                                    <li>
                                        <Link to={"/about"} className="anchor">Biz haqimizda</Link>
                                    </li>
                                    <li>
                                        <Link className="anchor">Xizmatlar</Link>
                                    </li>
                                    {/*<li>*/}
                                    {/*    <Link className="anchor">Yangiliklar</Link>*/}
                                    {/*</li>*/}
                                    <li>
                                        <Link to={"/contact"} className="anchor">Aloqa</Link>
                                    </li>
                                </ul>

                                {/*<div className="login">*/}
                                {/*    <Link className="login_btn">Kirish</Link>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
