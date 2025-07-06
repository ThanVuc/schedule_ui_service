"use client";

import React from "react";
import { Eye } from "lucide-react";
import ReusableModal from "./modal";
import PermissionForm, { PermissionData } from "./permissionform";

interface Props {
  permission: PermissionData;
}

export default function WatchPermissionModal({ permission }: Props) {
  return (
    <ReusableModal
      title="Chi tiết quyền"
      description="Thông tin chi tiết của quyền."
      trigger={
        <button className="flex items-center gap-1 bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm hover:bg-gray-200">
          <Eye size={14} />
          Xem
        </button>
      }
      cancelText="Đóng"
    >
      <PermissionForm
        initialData={permission}
        onChange={() => {}}
        readOnly
      />
    </ReusableModal>
  );
}
