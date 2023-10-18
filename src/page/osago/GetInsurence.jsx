import React, { useState } from "react";
import getCar from "../../component/getCar";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import CardMenu from "../../component/cards/CardMenu";
import "../../../public/styles/majburiy/majburiy.scss";
import "../../../public/styles/cards/cardMenu.scss";

// Images \\
import logo from "../../../public/images/Logo1.svg";
import heroImageNew from "../../../public/images/cutted.png";

// Icons \\
import { BsArrowLeft } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseCircleFill } from "react-icons/ri";
import Navbar from "../../component/Navbar";
import CreateOrder from "../../component/CreateOrder";

function Header() {
  const navigate = useNavigate();

  const [car, setCar] = useState();
  const [error, setError] = useState("Bu error row");

  const [techpassportseria, setTechpassportseria] = useState("AAF");
  const [techPassportNumber, SetTechPassportNumber] = useState("3132507");
  const [govNumber, setGovNumber] = useState("01D797EB");

  const req = async () => {
    console.log('kuting');
    let res= await CreateOrder({"name": "Abbos", "age": 29})
   console.log(res); 
    console.log('data keldi');
  };

  // Modal header

  const [active, setActive] = useState(false);

  const openModal = () => {
    console.log("active");
    return setActive(!active);
  };

  // bg-[#058668]

  return (
    <div className="majburiy ">
      <div className="container m-auto ">
        <div className="majburiy_items">
          <div className="majbury_items_header">
            <div className="header_mobile pt-6">
              <div className="header_mobile_items">
                <div className="header_mobile_items_logo">
                  <Link>
                    <img src={logo} alt="logo" />
                  </Link>
                </div>

                <div className="header_mobile_items_icon">
                  <RxHamburgerMenu className="burgerIcon" onClick={openModal} />
                </div>
              </div>
            </div>

            <div className="hero">
              <div className="hero_items">
                <div className="hero_items_content">
                  <Link className="new">Yangi mavsum</Link>
                  <div className="content">
                    <h2 onClick={req}>
                      Majburiy <br /> avto sug`urta
                    </h2>
                    <Link className="new newMobile">Yangi mavsum</Link>
                    <p className="desc">
                      You can read this text, but it doesn’t matter. It’s
                      concept, not <br /> important for your life or life your
                      friends
                    </p>
                    {/* <Link className="buy" to={"/buying"}>
                      <BsArrowLeft /> Bog'lanish
                    </Link> */}
                  </div>
                  <div className="hero_image">
                    <img src={heroImageNew} alt="heroImage" />
                  </div>
                </div>
              </div>
            </div>

            <div className="menu_box">
              <CardMenu />
            </div>
          </div>
        </div>
      </div>

      <div className={`navModal_bg ${active ? "active" : ""}`}>
        <div className={`navModal`}>
          <div className="header_item_navbar">
            <div className="navbars">
              <div className="icon_X float-right">
                <RiCloseCircleFill className="closeIcon" onClick={openModal} />
              </div>

              <ul>
                <li>
                  <Link className="anchor">Asosiy</Link>
                </li>
                <hr className="hr_line text-[#005440]" />
                <li>
                  <Link className="anchor">Biz haqimizda</Link>
                </li>
                <hr className="hr_line" />
                <li>
                  <Link className="anchor" >Xizmatlar</Link>
                </li>
                <hr className="hr_line" />
                <li>
                  <Link className="anchor">Aloqa</Link>
                </li>
                <hr className="hr_line" />
              </ul>

              <div className="login">
                <Link className="login_btn">Kirish</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
