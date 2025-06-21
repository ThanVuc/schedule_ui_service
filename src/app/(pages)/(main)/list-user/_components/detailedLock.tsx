import { LockKeyhole } from "lucide-react";

interface DetailedLockProps {
    onClose: () => void;
    onLock: (id: string) => void;
    id: string,
    name: string,
}

const DetailedLock = ({ onClose, id, name, onLock }: DetailedLockProps) => {
    return (
        <div className=" bg-white w-full max-w-[350px] h-full max-h-[300px] border-2 border-[#bababa] shadow-lg rounded-lg overflow-y-auto">
            <p className="text-center font-bold mb-4 p-[7px] bg-[#817E7E] text-white h-10">Xác nhận khóa tài khoản: {name}</p>
            <div className="flex justify-center"><p className="mb-5 p-10 border-5 rounded-full bg-[#E8F5E8] flex justify-center">
                <LockKeyhole size={"50px"} />
            </p>
            </div>
            <div className="flex justify-around">
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => onLock(id)}
                >
                    Khóa
                </button>
                <button
                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    onClick={onClose}
                >
                    Hủy
                </button>
            </div>
        </div>
    );
}

export default DetailedLock;