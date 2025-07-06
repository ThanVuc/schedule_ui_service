"use client";

import React, { useState } from "react";
import RoleItem from "./_components/permisson";
import CustomPagination from "./_components/pagination";
import CreateRoleModal from "./_components/create.permisson.modal";
import Toast, { ToastType } from "../../../../../components/Toast";
import { PermissionData } from "./_components/permissionform";
import { mockRoles } from "./_components/mock.permissons";

export default function RolesList() {
  const itemsPerPage = 5;

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [gotoPage, setGotoPage] = useState("");
  const [error, setError] = useState("");
  const [rolesData, setRolesData] = useState([...mockRoles]);

  const [toasts, setToasts] = useState<ToastType[]>([]);

  const addToast = (toast: Omit<ToastType, "id">) => {
    setToasts((prev) => [...prev, { ...toast, id: Date.now() }]);
  };

  const filteredRoles = rolesData.filter((role) =>
    role.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredRoles.length / itemsPerPage);
  const currentItems = filteredRoles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleGotoPage = () => {
    const page = parseInt(gotoPage);
    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setGotoPage("");
      setError("");
    } else {
      setError(`Trang phải nằm trong khoảng 1 - ${totalPages}`);
    }
  };

  const isGotoValid = () => {
    const page = parseInt(gotoPage);
    return !isNaN(page) && page >= 1 && page <= totalPages;
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleCreate = (newPermission: PermissionData) => {
    const newId = Date.now();
    setRolesData((prev) => [...prev, { ...newPermission, id: newId }]);
    addToast({
      type: "success",
      message: "Thêm quyền thành công",
      description: "Quyền mới đã được thêm.",
    });
  };

  const handleUpdate = (id: number, updated: PermissionData) => {
    setRolesData((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updated } : p))
    );
  };

  const handleDelete = (id: number) => {
    setRolesData((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 z-0" style={{ opacity: 0.3 }} />
      <div className="relative z-10 p-5">
        <h1 className="text-4xl font-bold">Danh sách quyền</h1>
      </div>

      <div className="relative z-10 flex flex-row items-center px-10 mb-4 justify-between">
        <div className="flex flex-row items-center space-x-4">
          <input
            type="text"
            placeholder="Tìm kiếm quyền..."
            className="h-12 px-5 rounded-full border-2 border-gray-200 focus:outline-none focus:border-blue-400 bg-white w-80"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <CreateRoleModal onCreate={handleCreate} />
      </div>

      <div className="relative z-10 p-10 pt-5 space-y-4">
        {currentItems.map((role) => (
          <RoleItem
            key={role.id}
            id={role.id}
            name={role.name}
            note={role.note}
            resource={role.resource}
            actions={role.actions}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            addToast={addToast}
          />
        ))}

        <CustomPagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          gotoPage={gotoPage}
          setGotoPage={setGotoPage}
          onGotoPage={handleGotoPage}
          isGotoValid={isGotoValid}
          error={error}
        />
      </div>

      <div className="fixed top-5 right-5 z-[9999] space-y-2">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            onClose={() =>
              setToasts((prev) => prev.filter((t) => t.id !== toast.id))
            }
          />
        ))}
      </div>
    </div>
  );
}
