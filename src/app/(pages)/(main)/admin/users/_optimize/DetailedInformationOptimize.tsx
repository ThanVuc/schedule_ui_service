import { useEffect } from "react";
import DetailedInformation from "../_components/detailedInformation";
import { UserModel } from "../model/user";

interface ListUserProps {
    setIsModalOpen: (isOpen: boolean) => void;
    selectedUser: UserModel;
}

const DetailedInformationOptimize = ({ setIsModalOpen, selectedUser }: ListUserProps) => {

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsModalOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [setIsModalOpen]);
    return (
        <div className="fixed w-screen h-screen flex justify-center items-center z-50 top-0 left-0 bg-[#080808]/30"
            onClick={() => setIsModalOpen(false)}
        >
            <div className="relative"
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
        </div>

    );
}

export default DetailedInformationOptimize;