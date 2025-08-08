import "@/styles/components/Sidebar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MENUS } from "@/data/menus";

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState<Set<string>>(new Set());

  const toggleMenu = (name: string) => {
    setOpenMenus((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  return (
    <div className="sidebar">
      <div className="logo-details">
        <span className="logo-name">YOUNGDEV57</span>
      </div>
      <ul className="nav-links">
        {MENUS.map((menu) => {
          const hasChildren = !!menu.children?.length;
          const isOpen = openMenus.has(menu.name);

          return (
            <li key={menu.name} className={isOpen ? "showMenu" : ""}>
              {hasChildren ? (
                <Link to="#">
                  <div className="icon-link">
                    <i className="bx bx-grid-alt"></i>
                    <span className="link-name">{menu.name}</span>
                    <i
                      className="bx bxs-chevron-down arrow"
                      onClick={() => toggleMenu(menu.name)}
                    />
                  </div>
                </Link>
              ) : (
                <Link to={menu.to || "#"}>
                  <i className="bx bx-grid-alt"></i>
                  <span className="link-name">{menu.name}</span>
                </Link>
              )}

              {hasChildren && (
                <ul className="sub-menu">
                  {menu.children!.map((child) => (
                    <li key={child.to}>
                      <Link to={child.to}>{child.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
