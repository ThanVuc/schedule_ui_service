// components/DeleteRoleModal.tsx
import ReusableModal from "./modal";
import { Trash2 } from "lucide-react";


type Props = {
    roleName: string;
    onDelete: () => void;
};

export default function DeleteRoleModal({ roleName, onDelete }: Props) {
    return (
        <ReusableModal
            title="Xóa quyền"

            trigger={
                <button className="flex items-center gap-1 bg-red-100 text-red-800 px-3 py-1 rounded-md text-sm hover:bg-red-200">
                    <Trash2 size={14} />
                    Xóa
                </button>
            }
            onSubmit={onDelete}
            submitText="Save"
            cancelText="Out"
        >
            <p className="text-lg">
                Bạn có chắc muốn xóa quyền <strong>{roleName}</strong>?
                <br />
                Quyền sẽ bị xóa khỏi hệ thống.
            </p>
        </ReusableModal>
    );
}
