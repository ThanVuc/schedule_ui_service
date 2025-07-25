"use client";

import React, { useState } from "react";
import Modal from "../_components/modal";
import PermissionForm, { PermissionData } from "../_components/permissionform";


interface Props {
  onCreate: (data: PermissionData) => void;
}

export default function CreatePermissionModal({ onCreate }: Props) {
  const [data, setData] = useState<PermissionData>({
    name: "",
    note: "",
    resource: "",
    actions: [],
  });

  const handleSubmit = () => {
    onCreate(data);
  };

  return (
    <Modal
      title="Thêm quyền"
      trigger={
        <button className="h-12 px-6 rounded-2xl cursor-pointer bg-blue-500 text-white font-semibold hover:bg-blue-600 transition">
          Thêm quyền
        </button>
      }
      onSubmit={handleSubmit}
      submitText="Lưu"
      cancelText="Hủy"
    >
      <PermissionForm initialData={data} onChange={setData} />
    </Modal>
  );
}
