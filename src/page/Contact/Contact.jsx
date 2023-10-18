import React from 'react';
import Navbar from "../../component/Navbar.jsx";
import {Link} from "react-router-dom";
import "./contact.css"

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <>
                <section>
                    <div className="container mt-5">
                        <div className="row">
                            <p style={{color: "blue", fontWeight: "bold"}}>
                                <Link to={"/"}>Home</Link> ➡ <Link to={"/contact"}>Contact us </Link>
                            </p>
                        </div>
                        <div className="row my-4">
                            <div className="col-sm-12 col-lg-4">
                                <h1 className="row__left-h1 fw-bold" style={{fontSize: 60}}>
                                    Contacts
                                </h1>
                                <p className="row__left-p" style={{fontSize: 20, width: 300}}>
                                    Get in touch with us by droping messages or call us now
                                </p>
                            </div>
                            <div className="col-sm-12 col-xl-8 col-lg-12 d-flex flex-column g-4">
                                <form className="row">
                                    <div className="mb-3 col-sm-12 col-lg-6">
                                        <label htmlFor="exampleInputEmail1" className="form-label">
                                            Name
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control "
                                            placeholder="Your name"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div className="mb-3 col-sm-12 col-lg-6">
                                        <label htmlFor="exampleInputPassword1" className="form-label">
                                            Email
                                        </label>
                                        <input
                                            type="name"
                                            className="form-control"
                                            placeholder="Your email"
                                            id="exampleInputPassword1"
                                        />
                                    </div>
                                    <div className="mb-3 col-sm-12 col-lg-6">
                                        <label htmlFor="exampleInputEmail1" className="form-label">
                                            Phone
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Your phone"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div className="mb-3 col-sm-12 col-lg-6">
                                        <label htmlFor="exampleInputPassword1" className="form-label">
                                            Subject{" "}
                                        </label>
                                        <input
                                            type="name"
                                            className="form-control"
                                            placeholder="Subject"
                                            id="exampleInputPassword1"
                                        />
                                    </div>
                                </form>
                                <div className="comment">
                                    <h1 style={{fontSize: 16, color: "#212529"}}>Comment</h1>
                                    <div className="form-floating">
              <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{height: 200}}
                  defaultValue={""}
              />
                                        <label htmlFor="floatingTextarea2">
                                            Type your comment here...
                                        </label>
                                    </div>
                                    <div className="form-check mt-3">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="flexCheckDefault"
                                        />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            I agree to the Terms &amp; Conditions
                                        </label>
                                    </div>
                                    <button type="button" className="btn btn-outline-success mt-3 fs-5 p-3">
                                        Send your message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="carts__section">
                    <div className="container">
                        <div className="carts__content">
                            <div className="cart">
                                <h1 className="title">New Zeland</h1>
                                <h1 className="number">
                                    <i className="fa fa-phone" aria-hidden="true"/> +72 8564 652 932
                                </h1>
                                <h1 className="number">
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    Support@themezhub.com
                                </h1>
                                <h1 className="number">
                                    <i className="fa fa-map-marker" aria-hidden="true"/>
                                    4488 Harter Street Dayton, OH 45402
                                </h1>
                            </div>
                            <div className="cart">
                                <h1 className="title">New Zeland</h1>
                                <h1 className="number">
                                    <i className="fa fa-phone" aria-hidden="true"/> +72 8564 652 932
                                </h1>
                                <h1 className="number">
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    Support@themezhub.com
                                </h1>
                                <h1 className="number">
                                    <i className="fa fa-map-marker" aria-hidden="true"/>
                                    4488 Harter Street Dayton, OH 45402
                                </h1>
                            </div>
                            <div className="cart">
                                <h1 className="title">New Zeland</h1>
                                <h1 className="number">
                                    <i className="fa fa-phone" aria-hidden="true"/> +72 8564 652 932
                                </h1>
                                <h1 className="number">
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    Support@themezhub.com
                                </h1>
                                <h1 className="number">
                                    <i className="fa fa-map-marker" aria-hidden="true"/>
                                    4488 Harter Street Dayton, OH 45402
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        </div>
    );
};

export default Contact;