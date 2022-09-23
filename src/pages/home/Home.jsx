import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import Chart from "./../../components/chart/Chart";
import { userData } from "../../data.js";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart title="User Analytics" data={userData} dataKey={"Active User"} grid />
    </div>
  );
};

export default Home;
