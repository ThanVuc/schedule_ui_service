import React from "react";
import WatchPermissionModal from "./view.permission.modal";
import EditPermissionModal from "./edit.permisson.modal";
import DeletePermissionModal from "./delete.permisson.modal";
import { ToastType } from "../../../../../../components/Toast";
import { PermissionData } from "./permissionform";

export interface RoleItemProps {
  id: number;
  name: string;
  note: string;
  resource: string;
  actions: string[];
  onUpdate: (id: number, data: PermissionData) => void;
  onDelete: (id: number) => void;
  addToast: (toast: Omit<ToastType, "id">) => void;
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
      <div>
        <div className="text-lg font-medium">{name}</div>
        <div className="text-gray-500 text-sm">{note}</div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
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
            });
          }}
        />
      </div>
    </div>
  );
}
