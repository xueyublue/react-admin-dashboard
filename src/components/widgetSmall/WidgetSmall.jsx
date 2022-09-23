import { Visibility } from "@mui/icons-material";
import "./widgetSmall.css";

const WidgetSmall = () => {
  return (
    <div className="widgetSmall">
      <h3 className="widgetSmallTitle">New Join Members</h3>
      <ul className="widgetSmallList">
        <li className="widgetSmallListItem">
          <img
            className="widgetSmallImage"
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="widgetSmallUser">
            <span className="widgetSmallUserName">Anna Keller</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button class="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            className="widgetSmallImage"
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="widgetSmallUser">
            <span className="widgetSmallUserName">Min Guang</span>
            <span className="widgetSmallUserTitle">Senior Software Engineer</span>
          </div>
          <button class="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            className="widgetSmallImage"
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="widgetSmallUser">
            <span className="widgetSmallUserName">David Lee</span>
            <span className="widgetSmallUserTitle">Staff Engineer</span>
          </div>
          <button class="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            className="widgetSmallImage"
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="widgetSmallUser">
            <span className="widgetSmallUserName">Will Smith</span>
            <span className="widgetSmallUserTitle">Technical Lead</span>
          </div>
          <button class="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            className="widgetSmallImage"
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="widgetSmallUser">
            <span className="widgetSmallUserName">John Doe</span>
            <span className="widgetSmallUserTitle">Intern</span>
          </div>
          <button class="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSmall;
