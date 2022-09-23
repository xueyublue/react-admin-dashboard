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
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
              alt=""
            />
            <span className="widgetLargeUsername">Alice Cho</span>
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
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
              alt=""
            />
            <span className="widgetLargeUsername">Obama Due</span>
          </td>
          <td className="widgetLargeDate">8 Jul 2021</td>
          <td className="widgetLargeAmount">$22.00</td>
          <td className="widgetLargeStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              className="widgetLargeImage"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <span className="widgetLargeUsername">Lucy Bang</span>
          </td>
          <td className="widgetLargeDate">31 Aug 2021</td>
          <td className="widgetLargeAmount">$722.00</td>
          <td className="widgetLargeStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              className="widgetLargeImage"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
            <span className="widgetLargeUsername">David Chee</span>
          </td>
          <td className="widgetLargeDate">21 Dec 2021</td>
          <td className="widgetLargeAmount">$222.00</td>
          <td className="widgetLargeStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              className="widgetLargeImage"
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <span className="widgetLargeUsername">Lily Amanda</span>
          </td>
          <td className="widgetLargeDate">31 Jan 2022</td>
          <td className="widgetLargeAmount">$322.00</td>
          <td className="widgetLargeStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLarge;
