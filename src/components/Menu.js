import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function Menu() {
  const location = useLocation();
  const [currentMenu, setCurrentMenu] = useState("/");

  useEffect(() => {
    setCurrentMenu(location.pathname);
  }, [currentMenu, location.pathname]);

  const menus = [
    {
      name: "/",
      icon: "assets/icons/bx_bxs-dashboard.png",
      alt: "BX Icon",
    },
    {
      name: "/chat",
      icon: "assets/icons/bi_chat-left-fill.png",
      alt: "BX Icon",
    },
    {
      name: "/notification",
      icon: "assets/icons/clarity_notification-solid.png",
      alt: "Clarity Icon",
    },
    {
      name: "/setting",
      icon: "assets/icons/ant-design_setting-filled.png",
      alt: "Ant Icon",
    },
  ];

  const handleMenu = (menu) => <Link to={menu} replace />;

  return (
    <div
      className="menu"
      style={{
        margin: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ul>
        {menus.map((e, key) => {
          return (
            <li
              key={key}
              style={{
                marginTop: 50,
                borderLeft: currentMenu === e.name && "5px solid white",
                paddingLeft: 10,
              }}
            >
              <Link to={e.name}>
                <img src={e.icon} alt={e.alt} width={36} height={36} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
