import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <Sidebar />
      <section id="main" className="home-section">
        <div className="home-content" style={{ paddingRight: "20px" }}>
          <i className="bx bx-menu"></i>
          <div className="flex-center-vertical gap-20"></div>
        </div>
        <article className="admin-main-container">
          <Outlet />
        </article>
      </section>
    </>
  );
}
