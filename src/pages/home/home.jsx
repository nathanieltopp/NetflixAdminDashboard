import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import {userData} from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import {useState, useEffect, useMemo} from "react";
import axios from "axios";

export default function Home() {
    const MONTHS = useMemo(() => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], []);
    const [userStats, setUserStats] = useState([]);
    useEffect(() => {
        const getUserStats = async() => {
        try {
            const res = await axios.get(`users/stats`, {
                headers: {
                    token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTRmZDI5ZGRjZTkzYzJiMGI0NjcwYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzE1NDIyMCwiZXhwIjoxNjM3NTg2MjIwfQ.kkv0t2QF3oGQgK0__pRPmqBmQisQwqv_2ThDdz3Tloc`
                }
            });
            const processedData = res.data.map(item => ({name:MONTHS[item._id - 1], "New User": item.total}));
            setUserStats(processedData);
        } catch (error) {
            console.log(error);
        }
    }
    getUserStats();
    }, [MONTHS]);

    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
