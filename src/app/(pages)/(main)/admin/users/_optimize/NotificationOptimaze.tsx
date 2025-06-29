import Notification from "../_components/notification";
import { NotificationModel } from "../model/notification";

interface NotificationOptimizeProps {
    notification: NotificationModel | null;
    setNotification: (notification: NotificationModel | null) => void;
}


const NotificationOptimize = ({ notification, setNotification }: NotificationOptimizeProps) => {
    return (
        <div>
            {notification?.isVisible && (<Notification onClose={() => setNotification(null)} noti={notification} />)}
        </div>
    );
}

export default NotificationOptimize;