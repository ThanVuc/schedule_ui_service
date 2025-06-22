import { cn } from "@/lib/utils";
import { LockKeyhole, LockKeyholeOpen } from "lucide-react";
import { IFDetailedLock } from "../../../../../model/detailedlock";



interface DetailedLockProps {
    onClose: () => void;
    onLock: (id: string) => void;
    userDetailedLock: IFDetailedLock;
}

const DetailedLock = ({ onClose, userDetailedLock, onLock }: DetailedLockProps) => {
    return (
        <div className=" bg-white w-full max-w-[350px] pb-5 border-2 border-[#bababa] shadow-lg rounded-lg overflow-y-auto">
            <div className="text-center font-bold mb-4 p-[7px] bg-[#817E7E] text-white h-15">{userDetailedLock.lock ? "Xác nhận mở khóa tài khoản:" : "Xác nhận khóa tài khoản:"}
                <p className=" underline">{userDetailedLock.name}</p>
            </div>
            <div className="flex justify-center">
                <p className="mb-5 p-10 border-5 rounded-full bg-[#E8F5E8] flex justify-center">
                    {userDetailedLock.lock ? <LockKeyhole size={"50px"} /> : <LockKeyholeOpen size={"50px"} />}
                </p>
            </div>
            <div >
                <p className="text-center mb-4">{userDetailedLock.lock ? "Bạn xác nhận muốn mở khoá người dùng này" : "Bạn xác nhận muốn khoá người dùng này"}</p>
            </div>
            <div className="flex justify-around">
                <button
                    className={cn("px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600", userDetailedLock.lock && "bg-green-500  hover:bg-green-600")}
                    onClick={() => onLock(userDetailedLock.id)}
                >
                    {userDetailedLock.lock ? "Mở Khoá" : "Khóa"}
                </button>
                <button
                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    onClick={onClose}
                >
                    Hủy
                </button>
            </div>
        </div>
    );
}

export default DetailedLock;