"use client";
import React from "react";
import AddRoleForm from "../_components/AddRole";

const AddRolePage = () => {
  const handleCancel = () => {
    window.history.back(); 
  };

  return (
    <div className="px-8 py-10 w-[calc(100%-320px)] ml-[300px]">
      <h1 className="text-2xl font-bold mb-6">Thêm vai trò mới</h1>
      <AddRoleForm onCancel={handleCancel} />
    </div>
  );
};

export default AddRolePage;


