import React from "react";
import WatchPermissionModal from "./view.permission.modal";
import EditPermissionModal from "./edit.permission.modal";
import DeletePermissionModal from "./delete.permission.modal";
import { ToastProps } from "../../../../../../components/Toast";
import { PermissionData } from "../_components/permissionform";

export interface RoleItemProps {
  id: number;
  name: string;
  note: string;
  resource: string;
  actions: string[];
  onUpdate: (id: number, data: PermissionData) => void;
  onDelete: (id: number) => void;
    addToast: (toast: Omit<ToastProps, "id">) => void;

}

export default function RoleItem({
  id,
  name,
  note,
  resource,
  actions,
  onUpdate,
  onDelete,
  addToast,
}: RoleItemProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-white rounded-xl shadow-sm border mb-4 gap-3">
      {/* Thông tin */}
      <div className="flex-1">
        <div className="text-base sm:text-lg font-medium text-gray-800">{name}</div>
        <div className="text-sm text-gray-500">{note}</div>
      </div>

      {/* Hành động */}
      <div className="flex flex-wrap justify-start sm:justify-end gap-2">
        <WatchPermissionModal
          permission={{ name, note, resource, actions }}
        />

        <EditPermissionModal
          roleId={id}
          initialPermission={{ name, note, resource, actions }}
          onUpdate={(id, data) => {
            onUpdate(id, data);
            addToast({
              type: "success",
              message: "Cập nhật thành công",
              description: `Quyền "${data.name}" đã được cập nhật.`,
              onClose: () => {}, // Có thể để trống, hoặc truyền vào từ cha nếu muốn xử lý
            });
          }}
        />

        <DeletePermissionModal
          roleId={id}
          roleName={name}
          onDelete={(id) => {
            onDelete(id);
            addToast({
              type: "success",
              message: "Đã xóa quyền",
              description: `Quyền "${name}" đã được xóa.`,
              onClose: () => {}, // giống trên
            });
          }}
        />
      </div>
    </div>
  );
}

