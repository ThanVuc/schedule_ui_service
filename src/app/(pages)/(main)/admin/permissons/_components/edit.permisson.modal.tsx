"use client";

import React, { useState } from "react";
import { Pencil } from "lucide-react";
import ReusableModal from "./modal";
import PermissionForm, { PermissionData } from "./permissionform";

interface Props {
  roleId: number;
  initialPermission: PermissionData;
  onUpdate: (id: number, data: PermissionData) => void;
}

export default function EditPermissionModal({
  roleId,
  initialPermission,
  onUpdate,
}: Props) {
  const [data, setData] = useState<PermissionData>(initialPermission);

  const handleSubmit = () => {
    onUpdate(roleId, data);
  };

  return (
    <ReusableModal
      title="Sửa quyền"
      trigger={
        <button className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md text-sm hover:bg-yellow-200">
          <Pencil size={14} />
          Sửa
        </button>
      }
      onSubmit={handleSubmit}
      submitText="Lưu"
      cancelText="Hủy"
    >
      <PermissionForm initialData={data} onChange={setData} />
    </ReusableModal>
  );
}
