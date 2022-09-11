import { Link } from "react-router-dom";
import "./userSidebar.css";
const UserSidebar = () => {
  return (
    <div>
      <div className="user-sidebar-item">
        <Link to="/admin/usersettings">
          <i className="uil uil-dashboard"></i>
          User Dashboard
        </Link>
      </div>
    </div>
  );
};

export default UserSidebar;
