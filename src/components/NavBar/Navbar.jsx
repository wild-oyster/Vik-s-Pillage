import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./images/logo.jpg";
import imgprofile from "./images/ragnar-feat.jpg";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      menuActive: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { menuActive } = this.state;
    this.setState({
      menuActive: !menuActive,
    });
  }

  render() {
    const { menuActive } = this.state;
    return (
      <header>
        <nav>
          <div
            className="LogoViks"
            style={{
              backgroundImage: `url(${logo})`,
            }}
          />
          <ul className="navMenu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Exploration">Exploration</Link>
            </li>
            <li>
              <Link to="/navalbase">Dock</Link>
            </li>
          </ul>
          <div>
            <Link to="/Login">
              <div
                className="elementProfile"
                style={{
                  backgroundImage: `url(${imgprofile})`,
                }}
              />
            </Link>
          </div>
          <div
            className={menuActive ? "menuBurger open" : "menuBurger"}
            onClick={this.handleClick}
          >
            <span className="menuBars" />
          </div>
        </nav>
        <div
          className="menuMobile"
          style={{
            transform: menuActive ? "translateX(0)" : "translate(100%)",
          }}
        >
          <ul className="navMenuMobile">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Exploration">Exploration</Link>
            </li>
            <li>
              <Link to="/navalbase">Dock</Link>
            </li>
          </ul>
          <Link to="/Login">
            <span
              className="elementProfileMobile"
              style={{
                backgroundImage: `url(${imgprofile})`,
              }}
            />
          </Link>
        </div>
      </header>

      // <div className="Navbar__globalContainer">
      //   <div
      //     className="LogoViks"
      //     style={{
      //       backgroundImage: `url("./images/Vik's & Pillage.jpg")`,
      //     }}
      //   />{" "}
      //   <nav>
      //     <div className="Navbar__elementHome">
      //       <ul>
      //         <li className="Navbar__elementExplorer">Explorer</li>
      //         <li>Home </li>
      //       </ul>
      //     </div>
      //   </nav>
      //   <div className="Navbar__elementProfile">Le Profile</div>
      // </div>
    );
  }
}

export default Navbar;
