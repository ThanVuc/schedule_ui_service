import { IFUser } from "@/app/model/user";
import CardItem from "../_components/cardItem";
interface ListUserProps {
    currentUsers: IFUser[];
    setSelectedUser: (user: IFUser) => void;
    setIsModalOpen: (isOpen: boolean) => void;
    setIsModalLockOpen: (isOpen: boolean) => void;
    setIsModalAssigRoleOpen: (isOpen: boolean) => void;
}

const ListUser = ({ currentUsers, setSelectedUser, setIsModalOpen, setIsModalLockOpen, setIsModalAssigRoleOpen }: ListUserProps) => {
    return (<div className="mt-10 flex flex-col gap-3">
        {currentUsers.map((user) => (
            <CardItem
                key={user.id}
                onClick={() => {
                    setSelectedUser(user);
                    setIsModalOpen(true);
                }}
                onClickLock={() => {
                    setSelectedUser(user);
                    setIsModalLockOpen(true)
                    setIsModalOpen(false);
                }}
                onClickAssigRole={() => {
                    setSelectedUser(user);
                    setIsModalAssigRoleOpen(true)
                    setIsModalOpen(false);
                }}
                userCardItem={{
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    status: user.status,
                    timestamp: user.timestamp,
                    lock: !user.status
                }}
            />
        ))}
    </div>);
}

export default ListUser;