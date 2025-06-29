import { Noti } from "@/app/model/notification";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import { useEffect, useState } from "react";

interface NotificationProps {
    noti: Noti;
    onClose: () => void;
}

const Notification = ({ noti, onClose }: NotificationProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const enterTimeout = setTimeout(() => {
            setIsVisible(true);
        }, 10);

        const exitTimeout = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
        }, noti.duration);

        return () => {
            clearTimeout(enterTimeout);
            clearTimeout(exitTimeout);
        };
    }, [noti.duration, onClose]);
    return (
        <div
            onClick={() => {
                setIsVisible(false);
                setTimeout(onClose, 300);
            }}
            className={cn(
                "fixed top-4 right-4 max-w-sm p-4 rounded-lg shadow-lg flex items-center gap-2 text-white z-50 transition-all duration-500 ease-in-out transform ",
                isVisible
                    ? "opacity-100 translate-y-[-10px] scale-95"
                    : "opacity-0 translate-y-0 scale-100",
                noti.type === "success" ? "bg-[#4CAF50]" : "bg-red-500"
            )}
        >
            <span className="flex items-center gap-3 pr-5"><CircleCheck /> {noti.message}</span>
        </div>
    );
};

export default Notification;
