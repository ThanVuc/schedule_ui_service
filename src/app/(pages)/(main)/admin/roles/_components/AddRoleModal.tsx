


"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Toast, { ToastType } from "@/components/Toast";
import ConfirmDialog from "./ConfirmDialog";

interface AddRoleModalProps {
  show: boolean;
  onClose: () => void;
}

const PER_PAGE = 6;

const allPermissions = [
  { label: "Xem danh sách người dùng", description: "Hiển thị toàn bộ người dùng trong hệ thống" },
  { label: "Chi tiết người dùng", description: "Xem hồ sơ và quyền của từng người" },
  { label: "Gán vai trò", description: "Gán Admin/Thành viên cho người dùng khác" },
  { label: "Khóa người dùng", description: "Vô hiệu hóa người dùng" },
  { label: "Xem danh sách vai trò", description: "Hiển thị tất cả vai trò hiện tại" },
  { label: "Tạo báo cáo", description: "Xem và xuất các báo cáo thống kê" },
  { label: "Quản lý thông báo", description: "Tạo và gửi thông báo cho người dùng" },
  { label: "Xem nhật ký hoạt động", description: "Kiểm tra lịch sử thao tác của người dùng" },
  { label: "Phân quyền tùy chỉnh", description: "Thiết lập quyền tùy chỉnh theo từng module" },
  { label: "Xóa tài khoản", description: "Xóa vĩnh viễn người dùng khỏi hệ thống" },
  { label: "Quản lý phân hệ", description: "Quản lý quyền theo từng phân hệ riêng biệt" },
  { label: "Thống kê nâng cao", description: "Xem báo cáo tổng hợp theo thời gian & vai trò" },
];

const AddRoleModal: React.FC<AddRoleModalProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
   <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/10 backdrop-blur-[1px] transition-opacity duration-300 ease-in-out">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full p-6 animate-fadeIn">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Thêm vai trò mới</h2>
          <button
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-red-500"
          >
            Đóng
          </button>
        </div>
        <AddRoleForm onCancel={onClose} />
      </div>
    </div>
  );
};

interface AddRoleFormProps {
  onCancel: () => void;
}

const AddRoleForm: React.FC<AddRoleFormProps> = ({ onCancel }) => {
  const [page, setPage] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);
  const [toasts, setToasts] = useState<ToastType[]>([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();

  const togglePermission = (label: string) => {
    setSelectedPermissions((prev) =>
      prev.includes(label) ? prev.filter((p) => p !== label) : [...prev, label]
    );
  };

  const showToast = (toast: Omit<ToastType, "id">) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { ...toast, id }]);
  };

  const handleSave = () => {
    if (!name.trim()) {
      showToast({ type: "error", message: "Thiếu tên vai trò", description: "Vui lòng nhập tên." });
      return;
    }

    if (selectedPermissions.length === 0) {
      showToast({ type: "error", message: "Chưa chọn quyền", description: "Vui lòng chọn ít nhất 1 quyền để gán." });
      return;
    }

    showToast({ type: "success", message: "Lưu thành công", description: "Vai trò đã được thêm." });

    setTimeout(() => {
      onCancel();
      router.push(`/admin/roles?new=${encodeURIComponent(name)}&desc=${encodeURIComponent(description)}`);
    }, 1500);
  };

  const handleCancel = () => {
    showToast({ type: "error", message: "Hủy thao tác", description: "Thêm vai trò thất bại." });
    setTimeout(() => onCancel(), 1000);
  };

  const currentPermissions = allPermissions.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);
  const totalPages = Math.ceil(allPermissions.length / PER_PAGE);

  return (
    <div className="space-y-6 relative">
      {/* Toast */}
      <div className="fixed top-6 right-6 space-y-2 z-[9999]">
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
        <h3 className="font-semibold text-sm text-gray-800">✅ Quyền hạn</h3>
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
              className={`px-2 py-1 rounded ${
                page === 0 ? "bg-gray-100 text-gray-400" : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Trước
            </button>
            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={page === totalPages - 1}
              className={`px-2 py-1 rounded ${
                page === totalPages - 1 ? "bg-gray-100 text-gray-400" : "bg-gray-200 hover:bg-gray-300"
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
          onClick={handleCancel}
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

      <ConfirmDialog
        open={showConfirm}
        title="Xác nhận thêm vai trò"
        message="Bạn có chắc chắn muốn thêm vai trò này không?"
        onCancel={() => {
          setShowConfirm(false);
          showToast({ type: "error", message: "Đã hủy", description: "Thêm vai trò thất bại." });
        }}
        onConfirm={() => {
          setShowConfirm(false);
          handleSave();
        }}
      />
    </div>
  );
};

export default AddRoleModal;
