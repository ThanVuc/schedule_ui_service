import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { X } from "lucide-react";
import { UserModel } from "../model/user";

interface DetailedInformationProps {
    userDetailedInfo: UserModel,
    onClose: () => void;
}

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
// lấy tuổi
const getAge = (date: string) => {
    if (!date) return "N/A";
    const birthDate = new Date(date);
    if (isNaN(birthDate.getTime())) return "lỗi này tháng";
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age.toString();
};
// lấy dd/MM/YYYY
const formatDate = (date: string) => {
    if (!date) return "N/A";
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) return "lỗi này tháng";
    const day = parsedDate.getDate().toString().padStart(2, "0");
    const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0");
    const year = parsedDate.getFullYear();
    return `${day}/${month}/${year}`;
};
// chuyển thời gian
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
// fomat role
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

const getInitials = (name: string) => {
    const words = name.trim().split(" ");
    const first = words[0]?.[0] || "";
    const last = words.length > 1 ? words[words.length - 1]?.[0] : "";
    return (first + last).toUpperCase();
};
const avatarBg = randomColor(); // Tạo màu ngẫu nhiên mỗi khi render
const DetailedInformation = ({ userDetailedInfo, onClose }: DetailedInformationProps) => {

    return (
        <div className="bg-white w-full max-w-[600px] h-full max-h-[700px] border-2 border-[#bababa] relative shadow-lg rounded-lg overflow-y-auto">
            <button
                className="absolute top-1 right-1 text-[#ff0000] p-2 hover:bg-gray-100 rounded-full"
                onClick={onClose}
            >
                <X size={24} />
            </button>
            <div className=" flex flex-col items-center p-6 h-full">
                <h1 className="text-xl font-bold mb-4">Thông tin chi tiết</h1>
                <div className="flex flex-col items-center mb-3 ">
                    <Avatar className={`p-8 ${avatarBg} text-white drop-shadow-xl/25 border-[#E5E7EB] border`}>
                        <AvatarFallback>{getInitials(userDetailedInfo.name)}</AvatarFallback>
                    </Avatar>
                    <p className="text-center font-bold"> {userDetailedInfo.name}</p>
                </div>
                <div className="space-y-4 text-sm w-[480px]">
                    <div className="flex justify-center">
                        <p className="capitalize p-1 bg-[#F1F5F9] rounded-xl">{userDetailedInfo.gender}-{getAge(userDetailedInfo.date || "")} tuổi</p>
                    </div>
                    <div className="flex justify-between p-3 border-b-1">
                        <p>🎂 Ngày sinh:</p>
                        <p>{formatDate(userDetailedInfo.date || "")}</p>
                    </div>

                    <div className="flex justify-between p-3 border-b-1">
                        <p>📧 Email:</p>
                        <p>{userDetailedInfo.email}</p>
                    </div>
                    <div className="flex justify-between p-3 border-b-1">
                        <p>🆔 Vai trò:</p>
                        <p> {userDetailedInfo.role.length > 0 ? userDetailedInfo.role.map(formatRole).join(", ") : "Không có vai trò"}</p>
                    </div>
                    <div className="flex justify-between p-3 border-b-1">
                        <p>🟢 Trạng thái:</p>
                        <p> {userDetailedInfo.status ? "Hoạt động" : "bị khoá"}</p>
                    </div>
                    <div className="flex justify-between p-3 border-b-1">
                        <p>🕐 Thời gian đăng nhập:</p>
                        <p> {formatTimeAgo(userDetailedInfo.timestamp || "")}</p>
                    </div>
                    <div className="flex justify-between p-3 border-b-1">
                        <p>🕐 Thời gian cập nhật lần cuối:</p>
                        <p> {formatTimeAgo(userDetailedInfo.updatelast || "")}</p>
                    </div>
                    <div className="flex justify-between p-3 border-b-1">
                        <p>📖 Mô tả</p>
                        <p>{userDetailedInfo.bio || "Chưa có tiểu sử"}</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DetailedInformation;