import { Noti } from "@/app/model/notification";
import Notification from "../_components/notification";

interface NotificationProps {
    notification: Noti | null;
    setNotification: (notification: Noti | null) => void;
}


const NotificationOptimize = ({ notification, setNotification }: NotificationProps) => {
    return (
        <div>
            {notification?.isVisible && (<Notification onClose={() => setNotification(null)} noti={notification} />)}
        </div>
    );
}

export default NotificationOptimize;