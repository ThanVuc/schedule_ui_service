"use client";
import React, { useState } from "react";
import PermissionItem from "./permission";
import CustomPagination from "../_components/pagination";
import CreatePermissionModal from "./create.permission.modal";
import Toast, { ToastProps } from "../../../../../../components/Toast";
import { PermissionData } from "../_components/permissionform";
import { mockRoles } from "../_utils/mock.permissons";

export default function PermissionsContainer() {
    const itemsPerPage = 5;
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [gotoPage, setGotoPage] = useState("");
    const [error, setError] = useState("");
    const [rolesData, setRolesData] = useState([...mockRoles]);
    const [toasts, setToasts] = useState<ToastProps[]>([]);

    const addToast = (toast: Omit<ToastProps, "id">) => {
        const id = Date.now();
        setToasts((prev) => [...prev, { ...toast, id }]);
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
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
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
            onClose: () => {
                setToasts((prev) => prev.filter((t) => t.id !== newId));
            },
        });
    };

    const handleUpdate = (id: number, updated: PermissionData) => {
        setRolesData((prev) =>
            prev.map((p) => (p.id === id ? { ...p, ...updated } : p))
        );
        const toastId = Date.now();
        addToast({
            type: "success",
            message: "Cập nhật thành công",
            description: `Quyền "${updated.name}" đã được cập nhật.`,
            onClose: () => {
                setToasts((prev) => prev.filter((t) => t.id !== toastId));
            },
        });
    };

    const handleDelete = (id: number, name: string) => {
        setRolesData((prev) => prev.filter((p) => p.id !== id));
        const toastId = Date.now();
        addToast({
            type: "success",
            message: "Đã xóa quyền",
            description: `Quyền "${name}" đã bị xóa.`,
            onClose: () => {
                setToasts((prev) => prev.filter((t) => t.id !== toastId));
            },
        });
    };

    return (
        <div className="relative w-full h-screen">
            <div className="absolute inset-0 z-0" style={{ opacity: 0.3 }} />
            <div className="relative z-10 p-5">
                <h1 className="text-4xl font-bold">Danh sách quyền</h1>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between px-5 sm:px-10 mb-4 max-w-full overflow-x-hidden">
                <input
                    type="text"
                    placeholder="Tìm kiếm quyền..."
                    className="h-12 px-5 rounded-full border-2 border-gray-200 focus:outline-none focus:border-blue-400 bg-white w-full sm:w-80"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <CreatePermissionModal onCreate={handleCreate} />
            </div>

            <div className="relative z-10 p-5 sm:p-10 pt-5 space-y-4 max-w-screen overflow-x-hidden">
                {currentItems.map((role) => (
                    <PermissionItem
                        key={role.id}
                        id={role.id}
                        name={role.name}
                        note={role.note}
                        resource={role.resource}
                        actions={role.actions}
                        onUpdate={handleUpdate}
                        onDelete={() => handleDelete(role.id, role.name)}
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
                    <Toast key={toast.id} {...toast} />
                ))}
            </div>
        </div>
    );
}
