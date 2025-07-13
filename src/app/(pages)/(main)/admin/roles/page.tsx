


"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  UserShieldIcon,
  UserIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  PlusIcon,
  BanIcon,
} from "@/components/icon";
import ConfirmDeactivateModal from "./_components/ConfirmDeactivateModal";
import ConfirmDeleteModal from "./_components/ConfirmDeleteModal";
import RoleDetailModal from "@/app/(pages)/(main)/admin/roles/_container/RoleDetailModal ";
import AddRoleModal from "./_container/AddRoleModal";
import EditRoleModal from "./_container/EditRoleModal";
import Toast, { ToastProps } from "@/components/Toast";

const RoleListUI = () => {
  const searchParams = useSearchParams();
  const newTitle = searchParams.get("new");
  const newDesc = searchParams.get("desc");

  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const [selectedRoleId, setSelectedRoleId] = useState<number | null>(null);
  const [editRoleId, setEditRoleId] = useState<string>("");
  const [selectedRoleTitle, setSelectedRoleTitle] = useState<string>("");
  const [selectedRoleDetail, setSelectedRoleDetail] = useState<{
    title: string;
    status: string;
    permissions: string[];
    createdAt: string;
    updatedAt: string;
  } | null>(null);

  const [deactivatedRoleIds, setDeactivatedRoleIds] = useState<number[]>([]);
  const [deletedRoleIds, setDeletedRoleIds] = useState<number[]>([]);
  const [toast, setToast] = useState<ToastProps | null>(null);

  const defaultRoles = [
    {
      id: 1,
      title: "Quản Trị Viên",
      label: "Quản Trọng",
      labelColor: "bg-red-100 text-red-600",
      description: "Toàn quyền truy cập, phân quyền, kiểm soát hệ thống",
      count: 5,
      icon: <UserShieldIcon className="w-5 h-5 text-black" />,
    },
    {
      id: 2,
      title: "Thành Viên",
      label: "Phổ Biến",
      labelColor: "bg-green-100 text-green-600",
      description: "Người dùng cơ bản",
      count: 128,
      icon: <UserIcon className="w-5 h-5 text-black" />,
    },
  ];

  const roles = newTitle
    ? [
        {
          id: 999,
          title: newTitle,
          label: "Mới Tạo",
          labelColor: "bg-blue-100 text-blue-600",
          description: newDesc || "Không có mô tả",
          count: 0,
          icon: <UserShieldIcon className="w-5 h-5 text-black" />,
        },
        ...defaultRoles,
      ]
    : defaultRoles;

  const handleDeactivate = (confirmed: boolean) => {
    setModalOpen(false);
    if (confirmed && selectedRoleId !== null) {
      if (deactivatedRoleIds.includes(selectedRoleId)) {
        setDeactivatedRoleIds((prev) => prev.filter((id) => id !== selectedRoleId));
        setToast({
          id: Date.now(),
          type: "success",
          message: "Kích hoạt thành công",
          description: "Vai trò đã được kích hoạt trở lại.",
          onClose: () => setToast(null),
        });
      } else {
        setDeactivatedRoleIds((prev) => [...prev, selectedRoleId]);
        setToast({
          id: Date.now(),
          type: "success",
          message: "Vô hiệu hóa thành công",
          description: "Vai trò đã được vô hiệu hóa.",
          onClose: () => setToast(null),
        });
      }
    }
  };

  const handleDelete = (confirmed: boolean) => {
    setDeleteModalOpen(false);
    if (confirmed && selectedRoleId !== null) {
      setDeletedRoleIds((prev) => [...prev, selectedRoleId]);
      setToast({
        id: Date.now(),
        type: "success",
        message: "Xóa thành công",
        description: "Vai trò đã được xóa khỏi hệ thống.",
        onClose: () => setToast(null),
      });
    }
  };

  return (
    <div className="flex justify-center w-full overflow-x-hidden">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-10 space-y-10 font-sans bg-white min-h-screen overflow-x-hidden">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Danh sách vai trò</h1>
          <p className="text-gray-500 mt-2 text-base">
            Theo dõi và phân loại vai trò người dùng trong hệ thống
          </p>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => setAddModalOpen(true)}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm flex items-center justify-center gap-2 transition"
          >
            <PlusIcon className="w-4 h-4" />
            Thêm vai trò
          </button>
        </div>

        <div className="space-y-6">
          {roles
            .filter((role) => !deletedRoleIds.includes(role.id))
            .map((role, idx) => {
              const isDeactivated = deactivatedRoleIds.includes(role.id);
              return (
                <div
                  key={idx}
                  className={`flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-6 rounded-lg border transition gap-4 ${
                    isDeactivated
                      ? "bg-red-50 border-red-200"
                      : "bg-white border-gray-100 shadow-sm hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gray-100 rounded-full">{role.icon}</div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h2 className="text-xl font-bold">{role.title}</h2>
                        <span
                          className={`text-xs px-2 py-0.5 rounded ${
                            isDeactivated ? "bg-red-100 text-red-600" : role.labelColor
                          }`}
                        >
                          {isDeactivated ? "Đã bị vô hiệu hóa" : role.label}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{role.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto justify-end">
                    <button
                      onClick={() => {
                        setSelectedRoleDetail({
                          title: role.title,
                          status: isDeactivated ? "Đã bị vô hiệu hóa" : "Đang hoạt động",
                          permissions: ["Xem dữ liệu", "Chỉnh sửa", "Xóa"],
                          createdAt: "2024-01-01",
                          updatedAt: "2024-06-28",
                        });
                        setDetailModalOpen(true);
                      }}
                      className="w-full sm:w-[7.5rem] px-2.5 py-1.5 border rounded text-gray-700 text-xs flex items-center justify-center gap-1 hover:bg-gray-100 transition"
                    >
                      <EyeIcon className="w-4 h-4" />
                      Chi tiết
                    </button>
                    <button
                      onClick={() => {
                        setEditRoleId(role.id.toString());
                        setEditModalOpen(true);
                      }}
                      className="w-full sm:w-[7.5rem] px-2.5 py-1.5 rounded bg-blue-600 text-white text-xs flex items-center justify-center gap-1 hover:bg-blue-700 transition"
                    >
                      <PencilIcon className="w-4 h-4" />
                      Chỉnh sửa
                    </button>
                    <button
                      onClick={() => {
                        setSelectedRoleId(role.id);
                        setModalOpen(true);
                      }}
                      className={`w-full sm:w-[7.5rem] px-2.5 py-1.5 rounded text-white text-xs flex items-center justify-center gap-1 transition ${
                        isDeactivated
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-yellow-500 hover:bg-yellow-600"
                      }`}
                    >
                      <BanIcon className="w-4 h-4" />
                      {isDeactivated ? "Kích hoạt" : "Vô hiệu hóa"}
                    </button>
                    <button
                      onClick={() => {
                        setSelectedRoleId(role.id);
                        setSelectedRoleTitle(role.title);
                        setDeleteModalOpen(true);
                      }}
                      className="w-full sm:w-[7.5rem] px-2.5 py-1.5 rounded bg-red-600 text-white text-xs flex items-center justify-center gap-1 hover:bg-red-700 transition"
                    >
                      <TrashIcon className="w-4 h-4" />
                      Xóa
                    </button>
                  </div>
                </div>
              );
            })}
        </div>

        <ConfirmDeactivateModal
          show={modalOpen}
          onClose={handleDeactivate}
          isReactivate={selectedRoleId !== null && deactivatedRoleIds.includes(selectedRoleId)}
        />

        <ConfirmDeleteModal
          show={deleteModalOpen}
          roleName={selectedRoleTitle}
          onClose={handleDelete}
        />

        <RoleDetailModal
          show={detailModalOpen}
          role={selectedRoleDetail}
          onClose={() => setDetailModalOpen(false)}
        />

        <AddRoleModal show={addModalOpen} 
        onClose={() => setAddModalOpen(false)} 
        onSave={() => {
          setAddModalOpen(false);
          setToast({
            id: Date.now(),
            type: "success",
            message: "Thêm vai trò thành công",
            description: "Vai trò mới đã được thêm vào danh sách.",
            onClose: () => setToast(null),
          });
        }}  
          />

        <EditRoleModal
          show={editModalOpen}
          roleId={editRoleId}
          onClose={() => {
            setEditModalOpen(false);
          }}
          onSave={() => {
            setEditModalOpen(false);
            setToast({
              id: Date.now(),
              type: "success",
              message: "Chỉnh sửa thành công",
              description: "Các thay đổi đã được lưu!",
              onClose: () => setToast(null),
            });
          }}
        />

        {toast && (
          <div className="fixed top-5 right-5 z-[9999]">
            <Toast {...toast} onClose={() => setToast(null)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RoleListUI;
