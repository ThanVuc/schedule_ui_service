"use client";

import React from "react";
import EditRoleForm from "../_components/EditRoleForm";
import { useRouter } from "next/navigation";

const EditRolePage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  const handleCancel = () => {
    router.push("/admin/list-roles");
  };

  return (
    <div className="px-8 py-10 w-[calc(100%-320px)] ml-[300px]">
      <h1 className="text-2xl font-bold mb-6">Chỉnh sửa vai trò</h1>
      <EditRoleForm roleId={params.id} onCancel={handleCancel} />
    </div>
  );
};

export default EditRolePage;
