import DetailedInformation from "../_components/detailedInformation";
import { UserModel } from "../model/user";

interface ListUserProps {
    setIsModalOpen: (isOpen: boolean) => void;
    selectedUser: UserModel;
}

const DetailedInformationOptimize = ({ setIsModalOpen, selectedUser }: ListUserProps) => {
    return (<div className="fixed w-screen h-screen flex justify-center items-center z-50 top-0 left-0 bg-[#080808]/30">
        <DetailedInformation
            onClose={() => setIsModalOpen(false)}
            userDetailedInfo={{
                id: selectedUser.id,
                name: selectedUser.name,
                date: selectedUser.date,
                email: selectedUser.email,
                gender: selectedUser.gender,
                role: selectedUser.role,
                status: selectedUser.status,
                timestamp: selectedUser.timestamp,
                updatelast: selectedUser.updatelast,
                bio: selectedUser.bio,
            }}
        />
    </div>);
}

export default DetailedInformationOptimize;