import { useEffect } from "react";
import DetailedInformation from "../_components/detailedInformation";
import { UserModel } from "../model/user";
import { Curtain } from "@/components/common/Curtain";

interface ListUserProps {
    setIsModalOpen: (isOpen: boolean) => void;
    selectedUser: UserModel;
}

const DetailedInformationOptimize = ({ setIsModalOpen, selectedUser }: ListUserProps) => {


    return (
        <div >
            <Curtain onClose={() => setIsModalOpen(false)}>
                <div className="relative w-full max-w-md md:max-w-xl p-2 md:p-6"
                    onClick={e => e.stopPropagation()}
                >
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
                </div>
            </Curtain>
        </div>
    );
}

export default DetailedInformationOptimize;