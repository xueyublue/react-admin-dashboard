import "./user.css";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h3>Edit User</h3>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">Show</div>
        <div className="userUpdate">
          <h3>Edit</h3>
        </div>
      </div>
    </div>
  );
};

export default User;
