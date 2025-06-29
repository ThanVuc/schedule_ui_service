"use client";

import React, { useState } from "react";
import Link from "next/link";

import { useRouter, useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faUser,
  faEye,
  faEdit,
  faTrash,
  faPlus,
  faBan,
} from "@fortawesome/free-solid-svg-icons";
import ConfirmDeactivateModal from "./_components/ConfirmDeactivateModal";
import ConfirmDeleteModal from "./_components/ConfirmDeleteModal";
import RoleDetailModal from "./_components/RoleDetailModal ";
import Toast, { ToastType } from "@/components/Toast";
const RoleListUI = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const newTitle = searchParams.get("new");
  const newDesc = searchParams.get("desc");

  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  const [selectedRoleId, setSelectedRoleId] = useState<number | null>(null);
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
  const [toast, setToast] = useState<ToastType | null>(null);

  const defaultRoles = [
    {
      id: 1,
      title: "Quản Trị Viên",
      label: "Quản Trọng",
      labelColor: "bg-red-100 text-red-600",
      description: "Toàn quyền truy cập, phân quyền, kiểm soát hệ thống",
      count: 5,
      icon: <FontAwesomeIcon icon={faUserShield} className="w-5 h-5 text-black" />,
    },
    {
      id: 2,
      title: "Thành Viên",
      label: "Phổ Biến",
      labelColor: "bg-green-100 text-green-600",
      description: "Người dùng cơ bản",
      count: 128,
      icon: <FontAwesomeIcon icon={faUser} className="w-5 h-5 text-black" />,
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
          icon: <FontAwesomeIcon icon={faUserShield} className="w-5 h-5 text-black" />,
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
        });
      } else {
        setDeactivatedRoleIds((prev) => [...prev, selectedRoleId]);
        setToast({
          id: Date.now(),
          type: "success",
          message: "Vô hiệu hóa thành công",
          description: "Vai trò đã được vô hiệu hóa.",
        });
      }
    } else {
      setToast({
        id: Date.now(),
        type: "error",
        message: "Hủy thao tác",
        description: "Không có thay đổi nào được thực hiện.",
      });
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
      });
    } else {
      setToast({
        id: Date.now(),
        type: "error",
        message: "Hủy thao tác",
        description: "Không có thay đổi nào được thực hiện.",
      });
    }
  };

  return (
    <div className="px-8 py-10 space-y-10 font-sans bg-white min-h-[130vh] w-[calc(100%-320px)] ml-[300px]">
     
      <div className="text-center">
        <h1 className="text-3xl font-bold">Danh sách vai trò</h1>
        <p className="text-gray-500 mt-2 text-base">
          Theo dõi và phân loại vai trò người dùng trong hệ thống
        </p>
      </div>

      <div className="flex justify-end">
        <Link
          href="/admin/roles/add"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm flex items-center gap-2 transition"
        >
          <FontAwesomeIcon icon={faPlus} className="w-4 h-4" /> Thêm
        </Link>
      </div>

      <div className="space-y-6">
        {roles
          .filter((role) => !deletedRoleIds.includes(role.id))
          .map((role, idx) => {
            const isDeactivated = deactivatedRoleIds.includes(role.id);
            return (
              <div
                key={idx}
                className={`flex justify-between items-center p-6 rounded-lg border transition ${isDeactivated ? "bg-red-50 border-red-200" : "bg-white border-gray-100 shadow-sm hover:shadow-md"}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-100 rounded-full">{role.icon}</div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h2 className="text-xl font-bold">{role.title}</h2>
                      <span
                        className={`text-xs px-2 py-0.5 rounded ${isDeactivated ? "bg-red-100 text-red-600" : role.labelColor}`}
                      >
                        {isDeactivated ? "Đã bị vô hiệu hóa" : role.label}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{role.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-center">
                    <p className="text-2xl font-bold leading-none">
                      {role.count.toString().padStart(2, "0")}
                    </p>
                    <p className="text-xs text-gray-500">Người dùng</p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedRoleDetail({
                        title: role.title,
                        status: isDeactivated ? "Đã bị vô hiệu hóa" : "Đang hoạt động",
                        permissions: ["Xem dữ liệu", "Chỉnh sửa", "Xóa"], // Tạm fix cứng
                        createdAt: "2024-01-01",
                        updatedAt: "2024-06-28",
                      });
                      setDetailModalOpen(true);
                    }}
                    className="px-2.5 py-1.5 border rounded text-gray-700 text-xs flex items-center gap-1 hover:bg-gray-100 transition"
                  >
                    <FontAwesomeIcon icon={faEye} className="w-3.5 h-3.5" /> Xem
                  </button>
                  <button
                    onClick={() => router.push(`/admin/roles/update`)}
                    className="px-2.5 py-1.5 rounded bg-blue-600 text-white text-xs flex items-center gap-1 hover:bg-blue-700 transition"
                  >
                    <FontAwesomeIcon icon={faEdit} className="w-3.5 h-3.5" /> Sửa
                  </button>
                  <button
                    onClick={() => {
                      setSelectedRoleId(role.id);
                      setModalOpen(true);
                    }}
                    className={`px-2.5 py-1.5 rounded text-white text-xs flex items-center gap-1 transition ${isDeactivated ? "bg-green-600 hover:bg-green-700" : "bg-yellow-500 hover:bg-yellow-600"}`}
                  >
                    <FontAwesomeIcon icon={faBan} className="w-3.5 h-3.5" />
                    {isDeactivated ? "Kích hoạt" : "Vô hiệu hóa"}
                  </button>
                  <button
                    onClick={() => {
                      setSelectedRoleId(role.id);
                      setSelectedRoleTitle(role.title);
                      setDeleteModalOpen(true);
                    }}
                    className="px-2.5 py-1.5 rounded bg-red-600 text-white text-xs flex items-center gap-1 hover:bg-red-700 transition"
                  >
                    <FontAwesomeIcon icon={faTrash} className="w-3.5 h-3.5" /> Xóa
                  </button>
                </div>
              </div>
            );
          })}
      </div>

      <div className="grid grid-cols-4 gap-6 p-6 mt-10 bg-white shadow rounded-lg border border-gray-100">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full border-[10px] border-yellow-400 flex items-center justify-center text-2xl font-bold">
            133
          </div>
          <p className="mt-2 text-sm">Tổng</p>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faUser} className="text-gray-500 w-5 h-5" />
          <p className="text-lg font-semibold mt-1">133</p>
          <p className="text-sm text-gray-500">Tổng Người Dùng</p>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faUserShield} className="text-gray-500 w-5 h-5" />
          <p className="text-lg font-semibold mt-1">5</p>
          <p className="text-sm text-blue-600">Quản Trị Viên</p>
          <p className="text-xs text-gray-400">3.8%</p>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faUser} className="text-gray-500 w-5 h-5" />
          <p className="text-lg font-semibold mt-1">128</p>
          <p className="text-sm text-orange-500">Thành Viên</p>
          <p className="text-xs text-gray-400">96.2%</p>
        </div>
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

      {toast && (
        <div className="fixed top-5 right-5 z-[9999]">
          <Toast {...toast} onClose={() => setToast(null)} />
        </div>
      )}
    </div>
  );
};

export default RoleListUI;
