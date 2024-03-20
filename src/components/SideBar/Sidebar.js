import Link from "next/link";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-menu">
      <div className="toggle-btn"></div>
      <div className="sidebar"></div>
      <div className="links">
        <div className="link">
          <Link href="">Discussion Fourm</Link>
        </div>
        <div className="link">
          <Link href="">Market Stories</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
