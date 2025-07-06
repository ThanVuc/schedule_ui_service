import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Crown, LockKeyhole, LockKeyholeOpen, Shield } from "lucide-react";
import { CardItemModel } from "../model/carditem";

interface CardItemProps {
    userCardItem: CardItemModel;
    onClick: () => void;
    onClickLock: () => void;
    onClickAssigRole: () => void,
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

const CardItem = ({ userCardItem, onClick, onClickLock, onClickAssigRole }: CardItemProps) => {
    const getInitials = (name: string) => {
        const words = name.trim().split(" ");
        const first = words[0]?.[0] || "";
        const last = words.length > 1 ? words[words.length - 1]?.[0] : "";
        return (first + last).toUpperCase();
    };
    const isAdmin = (role: string | string[] | null | undefined): boolean => {
        if (!role) return false;
        if (Array.isArray(role)) {
            return role.some(r => typeof r === "string" && r.toLowerCase() === "admin");
        }
        return typeof role === "string" && role.toLowerCase() === "admin";
    };

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
    const getColorById = (id: string) => {
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
        const index = parseInt(id) % colors.length; // Dùng id để chọn màu cố định
        return colors[index];
    };

    const avatarBg = getColorById(userCardItem.id);



    return (<div>
        <Card className="hover:bg-[#f3f4f8] transform " onClick={onClick}>
            <div className="flex justify-between px-2" >
                <div className="flex items-center" >
                    <Avatar className={`p-3 md:p-5 ${avatarBg} text-white`}>
                        <AvatarFallback>{getInitials(userCardItem.name)}</AvatarFallback>
                    </Avatar>
                    <div className="ml-2 md:ml-4">
                        <h1 className="text-base md:text-lg font-semibold">{userCardItem.name}</h1>
                        <h2 className="text-sm text-gray-500 ">{userCardItem.email}</h2>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1">
                            <div className="rounded-xl text-[#3B82F6] bg-[#EBF8FF] font-medium text-xs px-1 flex items-center w-fit">
                                {isAdmin(userCardItem.role)}
                                {userCardItem.role.length > 0 ? formatRole(userCardItem.role?.[0]) : "không có vai trò"}
                            </div>
                            <div>
                                <span className="text-xs text-gray-400 block md:inline">Hoạt động {formatTimeAgo(userCardItem.timestamp)}</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div
                    className="flex flex-row items-center gap-2 md:gap-3 md:mt-0 self-center"
                >
                    <span
                        className={`flex text-nowrap items-center justify-center h-fit px-2 py-1 rounded-md text-xs font-medium border transition-all duration-150
                            ${userCardItem.status
                                ? "bg-[#D1FAE5] text-[#065F46] border-[#10B981]"
                                : "bg-[#FEE2E2] text-[#991B1B] border-[#EF4444]"
                            }`}
                    >
                        {userCardItem.status ? "Hoạt Động" : "Bị Khóa"}
                    </span>
                    <button
                        className="bg-[#F3F4F6] p-2 rounded-full hover:bg-[#10B981]/90 hover:text-white transition-all duration-150 shadow-sm"
                        title="Phân quyền"
                        onClick={e => {
                            e.stopPropagation();
                            onClickAssigRole();
                        }}
                    >
                        <Shield size={18} />
                    </button>
                    <button
                        className="bg-[#F3F4F6] p-2 rounded-full hover:bg-[#EF4444]/90 hover:text-white transition-all duration-150 shadow-sm"
                        title={userCardItem.lock ? "Mở khóa" : "Khóa"}
                        onClick={e => {
                            e.stopPropagation();
                            onClickLock();
                        }}
                    >
                        {userCardItem.lock
                            ? <LockKeyhole size={18} />
                            : <LockKeyholeOpen size={18} />}
                    </button>
                </div>
            </div>
        </Card>
    </div>);
}

export default CardItem;