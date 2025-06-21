import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Crown, LockKeyhole, Shield } from "lucide-react";

interface CardItemProps {
    name: string;
    email: string;
    role: string;
    status: boolean;
    timestamp: string;
    onClick: () => void;
    onClickLock: () => void;
}

const formatTimeAgo = (timestamp: string) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diff = (now.getTime() - time.getTime()) / 1000;

    if (diff < 60) return `${Math.floor(diff)} giây trước`;
    if (diff < 3600) return `${Math.floor(diff / 60)} phút trước`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} giờ trước`;
    if (diff < 2592000) return `${Math.floor(diff / 86400)} ngày trước`;
    if (diff < 31104000) return `${Math.floor(diff / 2592000)} tháng trước`;
    return `${Math.floor(diff / 31104000)} năm trước`;
};

const CardItem = ({ name, email, role, status, timestamp, onClick, onClickLock }: CardItemProps) => {
    const getInitials = (name: string) => {
        const words = name.trim().split(" ");
        const first = words[0]?.[0] || "";
        const last = words.length > 1 ? words[words.length - 1]?.[0] : "";
        return (first + last).toUpperCase();
    };
    const isAdmin = (r: string) => r.toLowerCase() === "admin";

    const formatRole = (r: string) => {
        switch (r.toLowerCase()) {
            case "admin":
                return "Quản trị viên";
            case "user":
                return "Người dùng";
            default:
                return r;
        }
    };
    const randomColor = () => {
        const colors = [
            "bg-red-500",
            "bg-green-500",
            "bg-blue-500",
            "bg-yellow-500",
            "bg-purple-500",
            "bg-pink-500",
            "bg-orange-500",
            "bg-amber-400",
            "bg-lime-500",
            "bg-cyan-500",
        ];
        const index = Math.floor(Math.random() * colors.length);
        return colors[index];
    };

    const avatarBg = randomColor();



    return (<div>
        <Card className="" onClick={onClick}>
            <div className="flex justify-between px-2" >
                <div className="flex items-center" >
                    <Avatar className={`p-5 ${avatarBg} text-white`}>
                        <AvatarFallback>{getInitials(name)}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                        <h1>{name}</h1>
                        <h2 className="text-sm text-gray-500">{email}</h2>
                        <div className=" flex items-center space-x-2">
                            <div className="rounded-xl text-[#3B82F6] bg-[#EBF8FF] font-medium text-xs px-1 flex items-center w-fit">
                                {isAdmin(role) && <Crown size={12} className="fill-amber-400 text-amber-900" />}
                                {formatRole(role)}
                            </div>
                            <div>
                                <span className="text-xs text-gray-400">Hoạt động {formatTimeAgo(timestamp)}</span>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex items-center space-x-3" >
                    <span
                        className={`flex items-center justify-center h-fit px-2 py-1 rounded-md text-xs font-medium border ${status
                            ? "bg-[#D1FAE5] text-[#065F46] border-[#10B981]"
                            : "bg-[#FEE2E2] text-[#991B1B] border-[#EF4444]"
                            }`}
                    >
                        {status ? "Hoạt Động" : "Bị Khóa"}
                    </span>
                    <button className="bg-[#F3F4F6] p-1 rounded-md hover:bg-[#E5E7EB]" onClick={(e) =>
                        e.stopPropagation()}>
                        <Shield />
                    </button>
                    <button className="bg-[#F3F4F6] p-1 rounded-md hover:bg-[#E5E7EB]" onClick={(e) => {
                        e.stopPropagation();
                        onClickLock();
                    }}>
                        <LockKeyhole />
                    </button>
                </div>
            </div>
        </Card>
    </div>);
}

export default CardItem;