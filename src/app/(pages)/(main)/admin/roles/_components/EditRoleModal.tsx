



"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Toast, { ToastType } from "@/components/Toast";
import ConfirmDialog from "./ConfirmDialog";

interface EditRoleModalProps {
  show: boolean;
  roleId: string;
  onClose: () => void;
}

const allPermissions = [
  { label: "Xem danh sách người dùng", description: "Hiển thị toàn bộ người dùng trong hệ thống" },
  { label: "Chi tiết người dùng", description: "Xem hồ sơ và quyền của từng người" },
  { label: "Gán vai trò", description: "Gán Admin/Thành viên cho người dùng khác" },
  { label: "Khóa người dùng", description: "Vô hiệu hóa người dùng" },
  { label: "Xem danh sách vai trò", description: "Hiển thị tất cả vai trò hiện tại" },
];

const PER_PAGE = 5;

const EditRoleModal: React.FC<EditRoleModalProps> = ({ show, roleId, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm transition-opacity duration-300 ease-in-out">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-6 animate-fadeIn">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Chỉnh sửa vai trò</h2>
          <button
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-red-500"
          >
            Đóng
          </button>
        </div>
        <EditRoleForm roleId={roleId} onCancel={onClose} />
      </div>
    </div>
  );
};

interface EditRoleFormProps {
  roleId: string;
  onCancel: () => void;
}

const EditRoleForm: React.FC<EditRoleFormProps> = ({ roleId, onCancel }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);
  const [page, setPage] = useState(0);
  const [toasts, setToasts] = useState<ToastType[]>([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setName("Vai trò mẫu");
      setDescription("Mô tả của vai trò mẫu");
      setSelectedPermissions(["Xem danh sách người dùng", "Khóa người dùng"]);
    }, 300);
  }, [roleId]);

  const showToast = (toast: Omit<ToastType, "id">) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { ...toast, id }]);
  };

  const handleSave = () => {
    if (!name.trim()) {
      showToast({ type: "error", message: "Thiếu tên vai trò", description: "Vui lòng nhập tên." });
      return;
    }

    showToast({ type: "success", message: "Cập nhật thành công", description: "Vai trò đã được chỉnh sửa." });

    setTimeout(() => {
      onCancel(); // ✅ Đóng modal
      router.push("/admin/roles");
    }, 1500);
  };

  const handleCancelConfirm = () => {
    showToast({ type: "error", message: "Hủy thao tác", description: "Chỉnh sửa vai trò thất bại." });
    setTimeout(() => {
      onCancel();
      router.push("/admin/roles");
    }, 1000);
  };

  const togglePermission = (label: string) => {
    setSelectedPermissions((prev) =>
      prev.includes(label) ? prev.filter((p) => p !== label) : [...prev, label]
    );
  };

  const currentPermissions = allPermissions.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);
  const totalPages = Math.ceil(allPermissions.length / PER_PAGE);

  return (
    <div className="space-y-6 relative">
      {/* Toast */}
      <div className="fixed top-6 right-6 space-y-2 z-[999]">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            onClose={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
          />
        ))}
      </div>

      {/* Inputs */}
      <div className="space-y-3">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Tên vai trò</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập tên vai trò..."
            className="w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Mô tả</label>
          <textarea
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Mô tả nội dung"
            className="w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs resize-none"
          />
        </div>
      </div>

      {/* Permissions */}
      <div className="space-y-2">
        <h3 className="font-semibold text-sm text-gray-800">✅ Quyền hạnn</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {currentPermissions.map((perm, idx) => (
            <label
              key={idx}
              className={`flex items-start gap-2 p-2 border rounded-md hover:bg-gray-50 transition cursor-pointer ${
                selectedPermissions.includes(perm.label) ? "bg-blue-50 border-blue-400" : ""
              }`}
            >
              <input
                type="checkbox"
                className="mt-0.5 accent-blue-600"
                checked={selectedPermissions.includes(perm.label)}
                onChange={() => togglePermission(perm.label)}
              />
              <div>
                <p className="text-xs font-medium text-gray-800">{perm.label}</p>
                <p className="text-[10px] text-gray-500">{perm.description}</p>
              </div>
            </label>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center pt-1 text-xs text-gray-600">
          <span>Trang {page + 1}/{totalPages}</span>
          <div className="flex gap-1.5">
            <button
              onClick={() => setPage((p) => p - 1)}
              disabled={page === 0}
              className={`px-2 py-1 rounded text-xs ${
                page === 0 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Trước
            </button>
            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={page === totalPages - 1}
              className={`px-2 py-1 rounded text-xs ${
                page === totalPages - 1 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Sau
            </button>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-2 pt-2">
        <button
          onClick={handleCancelConfirm}
          className="px-4 py-1.5 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 transition text-xs"
        >
          Hủy
        </button>
        <button
          onClick={() => setShowConfirm(true)}
          className="px-4 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition text-xs"
        >
          Lưu
        </button>
      </div>

      {/* Confirm dialog */}
      <ConfirmDialog
        open={showConfirm}
        title="Xác nhận chỉnh sửa"
        message="Bạn có chắc chắn muốn cập nhật vai trò này không?"
        onCancel={() => setShowConfirm(false)}
        onConfirm={() => {
          setShowConfirm(false);
          handleSave();
        }}
      />
    </div>
  );
};

export default EditRoleModal;
