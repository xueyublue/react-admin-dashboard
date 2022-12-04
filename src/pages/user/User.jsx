import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import styles from "./user.module.css";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className={styles.user}>
      <div className={styles.userTitleContainer}>
        <h3>Edit User</h3>
        <Link to="/users/add">
          <button className={styles.userAddButton}>Create</button>
        </Link>
      </div>
      <div className={styles.userContainer}>
        <div className={styles.userShow}>
          <div className={styles.userShowTop}>
            <img
              className={styles.userShowTopImage}
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
              alt=""
            />
            <div className={styles.userShowTopTitle}>
              <strong>Anna Becker</strong>
              <span>Software Engineer</span>
            </div>
          </div>
          <div className={styles.userShowBottom}>
            <span className={styles.userShowTitle}>Account Details</span>
            <div className={styles.userShowInfo}>
              <PermIdentity className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>annabecker</span>
            </div>
            <div className={styles.userShowInfo}>
              <CalendarToday className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>10.12.1999</span>
            </div>
            <span className={styles.userShowTitle}>Contact Details</span>
            <div className={styles.userShowInfo}>
              <PhoneAndroid className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>+1 123456789</span>
            </div>
            <div className={styles.userShowInfo}>
              <MailOutline className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>anna.becker@lamaadmin.com</span>
            </div>
            <div className={styles.userShowInfo}>
              <LocationSearching className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>New York | USA</span>
            </div>
          </div>
        </div>
        <div className={styles.userUpdate}>
          <span className={styles.userUpdateTitle}>Edit</span>
          <form className={styles.userUpdateForm}>
            <div className={styles.userUpdateLeft}>
              <div className={styles.userUpdateItem}>
                <label>Username</label>
                <input type="text" placeholder="annabecker" className={styles.userUpdateInput} />
              </div>
              <div className={styles.userUpdateItem}>
                <label>Fullname</label>
                <input type="text" placeholder="Anna Becker" className={styles.userUpdateInput} />
              </div>
              <div className={styles.userUpdateItem}>
                <label>Email</label>
                <input type="text" placeholder="anna.becker@lamaadmin.com" className={styles.userUpdateInput} />
              </div>
              <div className={styles.userUpdateItem}>
                <label>Phone</label>
                <input type="text" placeholder="+1 123456789" className={styles.userUpdateInput} />
              </div>
              <div className={styles.userUpdateItem}>
                <label>Address</label>
                <input type="text" placeholder="New York | USA" className={styles.userUpdateInput} />
              </div>
            </div>
            <div className={styles.userUpdateRight}>
              <div className={styles.userUpdateUpload}>
                <img
                  className={styles.userUpdateImage}
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className={styles.userUpdateIcon} />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className={styles.userUpdateButton}>UPDATE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
