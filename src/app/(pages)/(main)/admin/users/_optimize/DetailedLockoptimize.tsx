import { useEffect } from "react";
import DetailedLock from "../_components/detailedLock";
import { NotificationModel } from "../model/notification";
import { UserModel } from "../model/user";
import { Curtain } from "@/components/common/Curtain";
interface DetailedLockOptimizeProps {

    selectedUser: UserModel;
    setIsModalLockOpen: (isOpen: boolean) => void;
    setListUser: (users: UserModel[] | ((users: UserModel[]) => UserModel[])) => void; // Function to update the list of users
    setNotification: (noti: NotificationModel | null) => void;
}

const DetailedLockOptimize = ({ setIsModalLockOpen, selectedUser, setNotification, setListUser }: DetailedLockOptimizeProps) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsModalLockOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [setIsModalLockOpen]);

    const handleLockUser = (id: string) => {
        setListUser((prev) =>
            prev.map((user) =>
                user.id === id ? { ...user, status: !user.status } : user
            )
        );
        setIsModalLockOpen(false);
    };
    return (
        <div >
            <Curtain onClose={() => setIsModalLockOpen(false)}>
                <div className="relative"
                    onClick={e => e.stopPropagation()}
                >
                    <DetailedLock
                        onClose={() => setIsModalLockOpen(false)}
                        onLock={() => handleLockUser(selectedUser.id)}
                        userDetailedLock={{
                            id: selectedUser.id,
                            name: selectedUser.name,
                            lock: !selectedUser.status
                        }}
                        setNotification={setNotification}
                    />
                </div>
            </Curtain>

        </div>
    );
}

export default DetailedLockOptimize;