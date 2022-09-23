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
            src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
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
            src="https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
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
            src="https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=682&q=80"
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
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
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
