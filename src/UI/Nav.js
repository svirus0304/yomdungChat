import React, { useEffect, useState } from "react";

import classes from "./Nav.module.css";
import navItems from "./NavItems";
import yomdungChatIcon from './Img/yomdungChatIcon.png';

const Nav = (props) => {
  const [navs, setNavs] = useState(navItems);

  //초기화
  useEffect(() => {
    //순서1이(order:1) 선택된 것으로 셰팅(isSelected:true)
    setNavs((prev) => {
      const initNav = [...prev];
      initNav.map((map, i) => {
        if (map.order === 1) {
          map.isSelected = true;
        }
      });
      return initNav;
    });
    const selectedNav = navs.filter((filter) => filter.isSelected)[0];
    props.onSelect(selectedNav.target);
  }, []);

  //메뉴 선택 시
  const clickHandler = (nav) => {
    setNavs((prev) => {
      const updatedNav = [...prev];
      updatedNav.map((map) => {
        map.isSelected = false;
        if (map.id === nav.id) map.isSelected = true;
      });
      return updatedNav;
    });
    props.onSelect(nav.target);
  };

  return (
    <>
      <div className={classes.nav}>
        <div className={classes.mainIcon}><img src={yomdungChatIcon} /></div>
        {navs.map((nav) => (
          <div
            className={`${classes.navItem} ${
              nav.isSelected ? classes.selected : ""
            }`}
            key={nav.id}
            onClick={clickHandler.bind(null, nav)}
          >
            {nav.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Nav;
