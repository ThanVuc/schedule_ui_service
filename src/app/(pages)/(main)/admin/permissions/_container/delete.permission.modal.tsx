import Modal from "../_components/modal";
import { Trash2 } from "lucide-react";

type Props = {
  roleId: number;
  roleName: string;
  onDelete: (id: number) => void;
};

export default function DeletePermissionModal({ roleId, roleName, onDelete }: Props) {
  const handleDelete = () => {
    onDelete(roleId);
  };

  return (
    <Modal
      color="text-red-600"
      title=  "Xóa quyền"
      trigger={
        <button className="flex items-center gap-1 bg-red-100 text-red-800 px-3 py-1 rounded-md text-sm hover:bg-red-200">
          <Trash2 size={14} />
          Xóa
        </button>
      }
      onSubmit={handleDelete}
      submitText="Xác nhận"
      cancelText="Thoát"
    >
      <p className="text-base sm:text-lg leading-relaxed">
        Bạn có chắc muốn xóa quyền <strong>{roleName}</strong>?
        <br />
        Quyền sẽ bị xóa khỏi hệ thống.
      </p>
    </Modal>
  );
}
