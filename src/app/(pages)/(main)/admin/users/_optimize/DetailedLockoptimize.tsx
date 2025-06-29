import DetailedLock from "../_components/detailedLock";
import { NotificationModel } from "../model/notification";
import { UserModel } from "../model/user";
interface DetailedLockOptimizeProps {

    selectedUser: UserModel;
    setIsModalLockOpen: (isOpen: boolean) => void;
    setListUser: (users: UserModel[] | ((users: UserModel[]) => UserModel[])) => void; // Function to update the list of users
    setNotification: (noti: NotificationModel | null) => void;
}

const DetailedLockOptimize = ({ setIsModalLockOpen, selectedUser, setNotification, setListUser }: DetailedLockOptimizeProps) => {
    const handleLockUser = (id: string) => {
        setListUser((prev) =>
            prev.map((user) =>
                user.id === id ? { ...user, status: !user.status } : user
            )
        );
        setIsModalLockOpen(false);
    };
    return (
        <div className="fixed w-screen h-screen flex justify-center items-center z-50 top-0 left-0 bg-[#080808]/30">
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
    );
}

export default DetailedLockOptimize;