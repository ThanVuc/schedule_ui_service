import { IFUser } from "@/app/model/user";
import AssigRole from "../_components/assigRole";
import { Noti } from "@/app/model/notification";

interface AssigRoleOptimizeProps {

    selectedUser: IFUser;
    setIsModalAssigRoleOpen: (isOpen: boolean) => void;

    setNotification: (noti: Noti | null) => void;
}
const handleAssigRoleUser = (id: string) => {

}

const AssigRoleOptimize = ({ setIsModalAssigRoleOpen, selectedUser, setNotification }: AssigRoleOptimizeProps) => {
    return (<div className="fixed w-screen h-screen flex justify-center items-center z-50 top-0 left-0 bg-[#080808]/30">
        <AssigRole
            onClose={() => setIsModalAssigRoleOpen(false)}
            onAssig={handleAssigRoleUser}
            userAssigRole={{
                id: selectedUser.id,
                name: selectedUser.name,
                role: selectedUser.role
            }}
        />
    </div>);
}

export default AssigRoleOptimize;