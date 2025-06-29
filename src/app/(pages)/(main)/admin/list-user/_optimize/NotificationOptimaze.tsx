import { Noti } from "@/app/model/notification";
import Notification from "../_components/notification";

interface NotificationOptimizeProps {
    notification: Noti | null;
    setNotification: (notification: Noti | null) => void;
}


const NotificationOptimize = ({ notification, setNotification }: NotificationOptimizeProps) => {
    return (
        <div>
            {notification?.isVisible && (<Notification onClose={() => setNotification(null)} noti={notification} />)}
        </div>
    );
}

export default NotificationOptimize;