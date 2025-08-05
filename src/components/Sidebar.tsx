import "@/styles/components/Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-details">
        <span className="logo-name">YOUNGDEV57</span>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/dashboard">
            <i className="bx bx-grid-alt"></i>
            <span className="link-name">Dashboard</span>
          </Link>
        </li>
        <li>
          <div className="icon-link">
            <Link to="/modules/api">
              <i className="bx bx-grid-alt"></i>
              <span className="link-name">Modules</span>
            </Link>
            <i className="bx bxs-chevron-down arrow"></i>
          </div>
          <ul className="sub-menu">
            <li>
              <Link to="/modules/api">Api</Link>
            </li>
            <li>
              <Link to="/modules/pager">Pager</Link>
            </li>
            <li>
              <Link to="/modules/file-manager">File Manager</Link>
            </li>
            <li>
              <Link to="/modules/thumbnail-manager">Thumbnail Manager</Link>
            </li>
            <li>
              <Link to="/modules/region">Region</Link>
            </li>
          </ul>
        </li>
        <li>
          <div className="icon-link">
            <Link to="#">
              <i className="bx bx-grid-alt"></i>
              <span className="link-name">Common</span>
            </Link>
            <i className="bx bxs-chevron-down arrow"></i>
          </div>
          <ul className="sub-menu">
            <li>
              <Link to="/common/form">Form</Link>
            </li>
            <li>
              <Link to="/common/grid">Grid</Link>
            </li>
            <li>
              <Link to="/common/ui">UI</Link>
            </li>
            <li>
              <Link to="/common/util">Utils</Link>
            </li>
          </ul>
        </li>
        <li>
          <div className="icon-link">
            <Link to="#">
              <i className="bx bx-grid-alt"></i>
              <span className="link-name">Templates</span>
            </Link>
            <i className="bx bxs-chevron-down arrow"></i>
          </div>
          <ul className="sub-menu">
            <li>
              <Link to="#">Form</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
