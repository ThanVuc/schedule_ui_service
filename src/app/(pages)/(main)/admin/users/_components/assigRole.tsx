import { IdCardLanyard, UserRound } from "lucide-react";
import AssigListRole from "./assiglistrole";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { AssigRoleModel } from "../model/assigrole";
import { AssigListRoleModel } from "../model/assiglistrole";

interface AssigRoleProps {
    onClose: () => void;
    onAssig: (id: string) => void;
    userAssigRole: AssigRoleModel;
}

const AssigRole = ({ onClose, onAssig, userAssigRole }: AssigRoleProps) => {
    const [roleList, setRoleList] = useState<AssigListRoleModel[]>([
        { id: "1", roleName: "admin" },
        { id: "2", roleName: "user" },
        { id: "3", roleName: "editor" },
        { id: "4", roleName: "viewer" },
    ]);
    const [userAssigRoles, setUserAssigRoles] = useState<AssigRoleModel>(userAssigRole);
    const handleToggleRoles = (roleName: string) => {
        setUserAssigRoles((prev) => ({
            ...prev,
            role: prev.role.includes(roleName)
                ? prev.role.filter((r) => r !== roleName)
                : [...prev.role, roleName],
        }));
    };
    return (<div className="bg-white md:w-150 w-full max-w-[600px] h-full max-h-[600px] border-2 border-[#bababa] 
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
            <div className="flex flex-col gap-2 border-2 border-[#bababa] rounded-lg p-4 max-h-[200px] overflow-y-scroll">
                {roleList.length > 0 && roleList.map(role => (
                    <AssigListRole
                        key={role.id}
                        IFuser={role}
                        checked={userAssigRoles.role.includes(role.roleName)}
                        onToggle={() => handleToggleRoles(role.roleName)}
                    />
                ))}
            </div>
        </div>
        <div className="flex justify-around border-t-2 p-4 gap-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={() => onAssig(userAssigRoles.id)}>
                Xác nhận
            </button>
            <button className="bg-gray-300 text-black py-2 px-6 rounded  hover:bg-gray-400" onClick={onClose}>
                Huỷ
            </button>
        </div>
    </div>);
}

export default AssigRole;