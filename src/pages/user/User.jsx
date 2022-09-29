import "./user.css";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h3>Edit User</h3>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              className="userShowTopImage"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
              alt=""
            />
            <div className="userShowTopTitle">
              <strong>Anna Becker</strong>
              <span>Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom"></div>
        </div>
        <div className="userUpdate">
          <h3>Edit</h3>
        </div>
      </div>
    </div>
  );
};

export default User;
