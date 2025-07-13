import { useEffect } from "react";
import AssigRole from "../_components/assigRole";
import { NotificationModel } from "../model/notification";
import { UserModel } from "../model/user";
import { Curtain } from "@/components/common/Curtain";

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
        <div>
            <Curtain onClose={() => setIsModalAssigRoleOpen(false)}>
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
            </Curtain>
        </div>
    );
};

export default AssigRoleOptimize;