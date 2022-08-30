import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiXCircle, FiChevronDown } from "react-icons/fi";
import { GiSupersonicArrow, GiHamburgerMenu } from "react-icons/gi";

import { Header } from "./styles";

const Navbarmenu = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }

  return (
    <Header>
      <header className="header__middle">
        <div className="container">
          <div className="row">
            {/* Add Logo  */}
            <div className="header__middle__logo">
              <NavLink exact activeClassName="is-active" to="/">
                <GiSupersonicArrow className="icon-menu" />
              </NavLink>
            </div>

            <div className="header__middle__menus">
              <nav className="main-nav ">
                {/* Responsive Menu Button */}
                {isResponsiveclose === true ? (
                  <>
                    <span
                      className="menubar__button"
                      style={{ display: "none" }}
                      onClick={toggleClass}
                    >
                      {" "}
                      <FiXCircle />{" "}
                    </span>
                  </>
                ) : (
                  <>
                    <span
                      className="menubar__button"
                      style={{ display: "none" }}
                      onClick={toggleClass}
                    >
                      {" "}
                      <GiHamburgerMenu />{" "}
                    </span>
                  </>
                )}

                <ul className={boxClass.join(" ")}>
                  <li className="menu-item">
                    <NavLink
                      exact
                      activeClassName="is-active"
                      onClick={toggleClass}
                      to="home"
                    >
                      {" "}
                      Home{" "}
                    </NavLink>
                  </li>

                  <li className="menu-item ">
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to="champion"
                    >
                      {" "}
                      champion{" "}
                    </NavLink>{" "}
                  </li>
                  <li className="menu-item ">
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to="agentes"
                    >
                      {" "}
                      agentes{" "}
                    </NavLink>{" "}
                  </li>

                  <li className="menu-item ">
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to="pro"
                    >
                      {" "}
                      prosettings{" "}
                    </NavLink>{" "}
                  </li>
                  <li
                    onClick={toggleSubmenu}
                    className="menu-item sub__menus__arrows"
                  >
                    {" "}
                    <Link to="#">
                      {" "}
                      mais
                      <FiChevronDown />{" "}
                    </Link>
                    <ul className={boxClassSubMenu.join(" ")}>
                      <li>
                        {" "}
                        <NavLink
                          onClick={toggleClass}
                          activeClassName="is-active"
                          to="dicas"
                        >
                          {" "}
                          dicas{" "}
                        </NavLink>{" "}
                      </li>
                      <li>
                        <NavLink
                          onClick={toggleClass}
                          activeClassName="is-active"
                          to="patch"
                        >
                          {" "}
                          patch note{" "}
                        </NavLink>{" "}
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </Header>
  );
};

export default Navbarmenu;
