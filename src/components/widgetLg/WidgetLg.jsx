import "./widgetlg.css";

export default function WidgetLg() {
    const Button = ({type}) => {
        return <button className={`widgetLgButton ${type}`}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="wigetLgTh">Customer</th>
                    <th className="wigetLgTh">Date</th>
                    <th className="wigetLgTh">Amount</th>
                    <th className="wigetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img className="widgetLgImage" src="images/user1.jpeg" alt="" />
                        <span className="widgetLgName">Nathaniel Topp</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"></Button>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img className="widgetLgImage" src="images/user1.jpeg" alt="" />
                        <span className="widgetLgName">Nathaniel Topp</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined"></Button>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img className="widgetLgImage" src="images/user1.jpeg" alt="" />
                        <span className="widgetLgName">Nathaniel Topp</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending"></Button>
                    </td>
                </tr>
            </table>
        </div>
    )
}
