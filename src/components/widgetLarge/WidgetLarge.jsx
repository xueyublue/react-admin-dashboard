import "./widgetLarge.css";

const WidgetLarge = () => {
  const Button = ({ type }) => {
    return <button className={`widgetLargeButton ${type}`}>{type}</button>;
  };

  return (
    <div className="widgetLarge">
      <h3 className="widgetLargeTitle">Latest Transactions</h3>
      <table className="widgetLargeTable">
        <tr className="widgetLargeTr">
          <th className="widgetLargeTh">Customrer</th>
          <th className="widgetLargeTh">Date</th>
          <th className="widgetLargeTh">Amount</th>
          <th className="widgetLargeTh">Status</th>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              className="widgetLargeImage"
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <span className="widgetLargeUsername">Obama Due</span>
          </td>
          <td className="widgetLargeDate">2 Jun 2021</td>
          <td className="widgetLargeAmount">$122.00</td>
          <td className="widgetLargeStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              className="widgetLargeImage"
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <span className="widgetLargeUsername">Obama Due</span>
          </td>
          <td className="widgetLargeDate">2 Jun 2021</td>
          <td className="widgetLargeAmount">$122.00</td>
          <td className="widgetLargeStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              className="widgetLargeImage"
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <span className="widgetLargeUsername">Obama Due</span>
          </td>
          <td className="widgetLargeDate">2 Jun 2021</td>
          <td className="widgetLargeAmount">$122.00</td>
          <td className="widgetLargeStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              className="widgetLargeImage"
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <span className="widgetLargeUsername">Obama Due</span>
          </td>
          <td className="widgetLargeDate">2 Jun 2021</td>
          <td className="widgetLargeAmount">$122.00</td>
          <td className="widgetLargeStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLarge;
