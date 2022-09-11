import "./userProfile.css";
import UserProfileRightSide from "./userRightSide";
import UserSidebar from "./userSidebar";

const UserProfile = () => {
  return (
    // <AddUserInfo />
    <div className="user-profile-wrapper flex">
      <div className="userProfile-sidebar">
        <UserSidebar />
      </div>
      <div className="userProfile-rightbar">
        <UserProfileRightSide />
      </div>
    </div>
  );
};

export default UserProfile;
