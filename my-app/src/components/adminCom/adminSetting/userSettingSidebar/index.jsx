import "./userSettingSidebar.css";
const sidebarData = [
  {
    icon: <i className="uil uil-dashboard"></i>,
    title: "Room Status",
    tab: "room-status",
  },
  {
    icon: <i className="uil uil-plus-circle"></i>,
    title: "Add Room",
    tab: "add-room",
  },
  {
    icon: <i className="uil uil-edit"></i>,
    title: "Delete Room",
    tab: "delete-room",
  },
];
const UserSettingSidebar = (props) => {
  const { activeTab, setActiveTab } = props;
  return (
    <>
      {sidebarData.map((item, index) => (
        <div
          className={`user-setting-sidebar-item ${
            activeTab === item.tab ? "user-active" : ""
          }`}
          onClick={() => setActiveTab(`${item.tab}`)}
          key={index}
        >
          <div>
            {item.icon}
            {item.title}
          </div>
        </div>
      ))}
    </>
  );
};

export default UserSettingSidebar;
