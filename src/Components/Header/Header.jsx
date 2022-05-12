import React from "react";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import logOut from "../../Firebase/logOut";
import "./Header.css";
import logo from "../../logo.jpg";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let logoutAvailable = () => {
        return (
            location.pathname === "/admin" ||
            location.pathname === "/create-new-job"
        );
    };
    return (
        <header>
            <div className="content">
                <NavLink to="/">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <span className="heading">u-smart.ai</span>
                    </div>
                </NavLink>
                {logoutAvailable() ? (
                    <div
                        className="button"
                        onClick={() => {
                            logOut();
                            navigate("/");
                        }}
                    >
                        Logout
                    </div>
                ) : (
                    <div className="links">
                        <NavLink
                            style={({ isActive }) =>
                                isActive ? { color: "rgb(29, 78, 216)" } : {}
                            }
                            className="link"
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            style={({ isActive }) =>
                                isActive ? { color: "rgb(29, 78, 216)" } : {}
                            }
                            className="link"
                            to="/careers"
                        >
                            Careers
                        </NavLink>
                        <NavLink
                            style={({ isActive }) =>
                                isActive ? { color: "rgb(29, 78, 216)" } : {}
                            }
                            className="link"
                            to="/contact"
                        >
                            Contact Us
                        </NavLink>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
