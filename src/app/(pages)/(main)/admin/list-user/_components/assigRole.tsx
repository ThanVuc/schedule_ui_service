import { IdCardLanyard, UserRound } from "lucide-react";
import { IFAssigRole } from "../../../../../model/assigrole";

interface AssigRoleProps {
    onClose: () => void;
    onAssig: (id: string) => void;
    userAssigRole: IFAssigRole;
}


const AssigRole = ({ onClose, onAssig, userAssigRole }: AssigRoleProps) => {
    return (<div className="bg-white w-full max-w-[550px] h-full max-h-[550px] border-2 border-[#bababa] 
    shadow-lg rounded-lg overflow-y-auto">
        <div className="border-2 pb-6">
            <div className="m-6">
                <p className="text-[22px] font-bold mb-2">Gán vai trò cho người dùng</p>
                <p className="font-light text-sm ">Chọn vai trò phù hợp cho người dùng trong hệ thống.</p>
            </div>
            <div className="mx-8 rounded-sm bg-[#FAFAFA] border-[#000000]/10 border-2">
                <div className="flex items-center gap-2 p-1">
                    <div className="rounded-full border-1 p-2"> <UserRound /></div>
                    <p>Họ và tên: {userAssigRole.name}</p>
                </div>
                <div className="flex items-center gap-2 p-1">
                    <div className="rounded-full border-1 p-2"> <IdCardLanyard /></div>
                    <p>ID người dùng: {userAssigRole.id}</p>
                </div>
            </div>
        </div>
        <div className="m-6">
            <p className="text-[18px] font-bold mb-2">Danh sách vai trò</p>
            <div>

            </div>
        </div>
        <div >
            <button onClick={onClose}>huỷ</button>
        </div>
    </div>);
}

export default AssigRole;