import CardItem from "../_components/cardItem";
import { UserModel } from "../model/user";
interface ListUserProps {
    currentUsers: UserModel[];
    setSelectedUser: (user: UserModel) => void;
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