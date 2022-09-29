import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import Chart from "./../../components/chart/Chart";
import { activeUsers } from "../../data.js";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import WidgetLarge from "./../../components/widgetLarge/WidgetLarge";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart title="User Analytics" data={activeUsers} dataKey={"Active User"} grid />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;
