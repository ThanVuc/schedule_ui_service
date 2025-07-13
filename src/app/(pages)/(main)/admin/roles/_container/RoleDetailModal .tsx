"use client";

import React from "react";
import { CheckCircleIcon } from "@/components/icon/checkCircle"
import { Curtain } from "@/components/common/Curtain";

interface RoleDetailModalProps {
  show: boolean;
  role: {
    title: string;
    status: string;
    permissions: string[];
    createdAt: string;
    updatedAt: string;
  } | null;
  onClose: () => void;
}

const DEFAULT_ADMIN_PERMISSIONS = [
  "Xem danh sách người dùng",
  "Chi tiết người dùng",
  "Gán vai trò cho người dùng",
  "Khóa người dùng",
  "Xem danh sách vai trò",
];

const DEFAULT_MEMBER_PERMISSIONS = [
  "Xem hồ sơ cá nhân",
  "Cập nhật thông tin cá nhân",
  "Đổi mật khẩu",
  "Xem lịch sử hoạt động",
  "Gửi phản hồi hệ thống",
];

const RoleDetailModal: React.FC<RoleDetailModalProps> = ({ show, role, onClose }) => {
  if (!show || !role) return null;

  const isAdmin = role.title.toLowerCase().includes("quản trị");

  const fallbackPermissions = isAdmin
    ? DEFAULT_ADMIN_PERMISSIONS
    : DEFAULT_MEMBER_PERMISSIONS;

  // Kết hợp quyền truyền vào + bổ sung nếu thiếu
  const fullPermissions = [...role.permissions];
  for (let i = fullPermissions.length; i < 5; i++) {
    fullPermissions.push(fallbackPermissions[i]);
  }

  return (
    <Curtain onClose={onClose}>
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 animate-fadeIn">
        <h2 className="text-2xl font-bold text-center mb-6">Chi tiết vai trò</h2>

        <div className="space-y-3 mb-4">
          <div>
            <p className="text-sm text-gray-500 mb-1 font-medium">Tên vai trò</p>
            <p className="text-base font-semibold text-gray-800">{role.title}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-1 font-medium">Trạng tháii</p>
            <span className="inline-flex items-center gap-2 px-2 py-1 text-sm bg-green-100 text-green-700 rounded-md font-medium">
              <CheckCircleIcon className="w-4 h-4" />
              {role.status}
            </span>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-2 font-medium">Quyền đã gán</p>
            <div className="space-y-2">
              {fullPermissions.slice(0, 5).map((perm, idx) => (
                <button
                  key={idx}
                  className="w-full text-left px-3 py-2 bg-blue-50 border border-blue-300 text-blue-600 rounded text-sm hover:bg-blue-100 transition"
                >
                  {perm}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm text-gray-600 mb-6">
          <div>
            <p className="font-medium text-gray-500 mb-1">Ngày tạo</p>
            <p>{role.createdAt}</p>
          </div>
          <div>
            <p className="font-medium text-gray-500 mb-1">Ngày cập nhật</p>
            <p>{role.updatedAt}</p>
          </div>
        </div>

        <div className="text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded transition"
          >
            Đóng
          </button>
        </div>
      </div>
    </Curtain>
  );
};

export default RoleDetailModal;
