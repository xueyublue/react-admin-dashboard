import "./NewUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form action="" className="userUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="John" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="JohnSmith@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="****" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123456789" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="female" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="other" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active">
            <option vallue="Yes">Yes</option>
            <option vallue="No">No</option>
          </select>
        </div>
      </form>
      <button className="newUserButton">CREATE</button>
    </div>
  );
}
