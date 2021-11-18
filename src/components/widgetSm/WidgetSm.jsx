import { Visibility } from "@material-ui/icons";
import "./widgetsm.css";
import {useState, useEffect} from "react";
import axios from "axios";

export default function WidgetSm() {
    const [newUsers, setNewUsers] = useState([]);
    useEffect(() => {
        const getNewUsers = async() => {
        try {
            const res = await axios.get(`users?new=true`, {
                headers: {
                    token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTRmZDI5ZGRjZTkzYzJiMGI0NjcwYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzE1NDIyMCwiZXhwIjoxNjM3NTg2MjIwfQ.kkv0t2QF3oGQgK0__pRPmqBmQisQwqv_2ThDdz3Tloc`
                }
            });
            setNewUsers(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    getNewUsers();
    }, []);
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {newUsers.map(user => (
                    <li key={user._id} className="widgetSmListItem">
                        <div className="nameInfo">
                            <img alt="" className="widgetSmImage" src={user.profilePic || "https://pereaclinic.com/wp-content/uploads/2019/12/270x270-male-avatar.png"} />
                            <div className="widgetSmUser">
                                <span className="widgetSmUsername">{user.username}</span>
                                {/* <span className="widgetSmUserTitle">Software Engineer</span> */}
                            </div>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

