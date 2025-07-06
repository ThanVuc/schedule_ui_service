import { useEffect } from "react";
import AssigRole from "../_components/assigRole";
import { NotificationModel } from "../model/notification";
import { UserModel } from "../model/user";

interface AssigRoleOptimizeProps {
    selectedUser: UserModel;
    setIsModalAssigRoleOpen: (isOpen: boolean) => void;
    setNotification: (noti: NotificationModel | null) => void;
}

const AssigRoleOptimize = ({
    setIsModalAssigRoleOpen,
    selectedUser,
    setNotification,
}: AssigRoleOptimizeProps) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsModalAssigRoleOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [setIsModalAssigRoleOpen]);

    const handleAssigRoleUser = (id: string) => {
        // Xử lý phân quyền ở đây nếu cần
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#080808]/30 px-2"
            onClick={() => setIsModalAssigRoleOpen(false)}
        >
            <div
                className="relative"
                onClick={e => e.stopPropagation()}
            >
                <AssigRole
                    onClose={() => setIsModalAssigRoleOpen(false)}
                    onAssig={handleAssigRoleUser}
                    userAssigRole={{
                        id: selectedUser.id,
                        name: selectedUser.name,
                        role: selectedUser.role,
                    }}
                />
            </div>
        </div>
    );
};

export default AssigRoleOptimize;