import React, {useState} from "react";

function SubMenu({ item }) {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav)
  return (
    <div>
      <div
        className="sidebarLink flex text-[black] justify-between items-center p-4 list-none h-14 font-second text-sm font-normal border-b mx-5"
        to={item.path} onClick={item.subNav && showSubnav}
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

      {subnav && item.subNav.map((item, index) => {
        return (
          <div className="font-second ml-[18%] text-sm" to={item.path} key={index}>
            <div className="Sidebarlabel mt-6 mb-3">
              {item.title}
            </div>
          </div>
        )
      })}

    </div>
  );
}

export default SubMenu;
