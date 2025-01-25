import React, { useState } from "react";

function SubMenu({ item, handleLinkClick }) {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  const handleClick = () => {
    if (item.subNav) {
      showSubnav();
    } else {
      handleLinkClick(); // Call the handleLinkClick function passed as prop
    }
  };

  return (
    <div>
      <div
        className="sidebarLink flex text-[black] justify-between items-center p-4 list-none font-second text-sm font-normal border-b mx-5"
        to={item.path}
        onClick={handleClick}
      >
        <div className="SidebarLabel ">{item.title}</div>
        <div>
          {item.subNav && subnav
            ? item.iconOpen
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </div>

      {subnav &&
        item.subNav.map((subItem, index) => (
          <div
            className="font-second ml-[18%] text-sm"
            key={index}
            onClick={() => {
              handleLinkClick();
              if (!subItem.subNav) showSubnav(false); // Close submenu if this item has no further sub-menu
            }}
          >
            <div className="Sidebarlabel mt-6 mb-3">{subItem.title}</div>
          </div>
        ))}
    </div>
  );
}

export default SubMenu;
