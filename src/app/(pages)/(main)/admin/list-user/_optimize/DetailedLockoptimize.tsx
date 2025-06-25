import { IFUser } from "@/app/model/user";
import DetailedLock from "../_components/detailedLock";
import { Noti } from "@/app/model/notification";
interface DetailedLockOptimizeProps {

    selectedUser: IFUser;
    setIsModalLockOpen: (isOpen: boolean) => void;
    setListUser: (users: IFUser[] | ((users: IFUser[]) => IFUser[])) => void; // Function to update the list of users
    setNotification: (noti: Noti | null) => void;
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
                setNotification={(noti) => {
                    setNotification(noti);
                }}
            />
        </div>
    );
}

export default DetailedLockOptimize;