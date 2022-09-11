import "./adminTitle.css";

const AdminTitle = (props) => {
  const { title, span } = props;
  return (
    <div className="adminTitle">
      <h1>
        {title}
        <span>{span}</span>
      </h1>
    </div>
  );
};

export default AdminTitle;
