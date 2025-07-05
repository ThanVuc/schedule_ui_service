"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendar,
  faVenusMars,
  faLink,
  faUserTag,
  faSearch,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import Toast, { ToastType } from "@/components/Toast";

export default function EditProfile() {
  const [gender, setGender] = useState("Nam");
  const [slug, setSlug] = useState("tuan-danny-pham");
  const [avatar, setAvatar] = useState<string | null>(null);
  const [bio, setBio] = useState("");
  const [toasts, setToasts] = useState<ToastType[]>([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const wordCount = bio.trim().split(/\s+/).filter(Boolean).length;

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
        showToast("success", "Cập nhật ảnh đại diện", "Thay đổi ảnh đại diện thành công.");
      };
      reader.readAsDataURL(file);
    } else {
      showToast("error", "Thay đổi ảnh thất bại", "Không thể cập nhật ảnh đại diện.");
    }
  };

  const showToast = (
    type: "success" | "error",
    message: string,
    description: string
  ) => {
    const id = Date.now();
    setToasts((prev) => [{ id, type, message, description }, ...prev]);
  };

  const handleSave = () => setShowConfirm(true);
  const confirmSave = () => {
    showToast("success", "Cập nhật thành công", "Thông tin cá nhân đã được lưu lại.");
    setShowConfirm(false);
  };
  const cancelSave = () => {
    showToast("error", "Cập nhật thất bại", "Bạn đã hủy thay đổi thông tin cá nhân.");
    setShowConfirm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef6fb] to-[#fff6fa] flex justify-center px-4 sm:px-6 lg:px-8 py-6">
      <div className="w-full max-w-screen-lg mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
          Chỉnh sửa thông tin cá nhân
        </h1>
        <p className="text-center text-gray-500 mb-6 text-sm md:text-sm">
          Cập nhật thông tin để đảm bảo hồ sơ luôn chính xác và đầy đủ
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Avatar + Bio */}
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center">
            <div className="relative group w-fit">
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleAvatarChange}
              />
              {avatar ? (
                <img
                  src={avatar}
                  alt="Avatar"
                  className="w-20 h-20 rounded-full object-cover max-w-full"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-lg font-semibold text-gray-600">
                  NVM
                </div>
              )}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 rounded-full flex items-center justify-center transition pointer-events-none">
                <FontAwesomeIcon icon={faCamera} className="text-white w-4 h-4" />
              </div>
            </div>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="mt-2 text-sm text-blue-600 hover:underline"
            >
              <FontAwesomeIcon icon={faCamera} className="mr-1" /> Thay đổi ảnh
            </button>

            <h2 className="mt-4 text-sm md:text-base font-semibold">TuanDanny Pham</h2>
            <p className="text-xs text-gray-600">tuandannypham@gmail.com</p>

            <div className="w-full mt-6">
              <label className="text-sm font-medium mb-1 block">Tiểu sử</label>
              <textarea
                className="w-full border rounded-lg p-2 text-sm resize-none min-h-[100px]"
                maxLength={500}
                placeholder="Giới thiệu ngắn gọn về bạn (tối đa 80 từ)..."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
              <p className="text-right text-xs text-gray-400 mt-1">{wordCount}/80 từ</p>
            </div>
          </div>

          {/* Form */}
          <div className="col-span-1 lg:col-span-2 bg-white rounded-xl shadow p-4">
            <h3 className="text-base md:text-lg font-semibold mb-3 flex items-center">
              <FontAwesomeIcon icon={faSearch} className="mr-2 text-gray-500 w-4 h-4" />
              Thông tin cơ bản
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  <FontAwesomeIcon icon={faUser} className="mr-2 text-gray-500 w-4 h-4" /> Họ và tên
                </label>
                <input className="w-full border rounded px-3 py-2 text-sm" placeholder="Nhập họ và tên đầy đủ" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  <FontAwesomeIcon icon={faUserTag} className="mr-2 text-gray-500 w-4 h-4" /> Tên đăng nhập
                </label>
                <input className="w-full border rounded px-3 py-2 text-sm" placeholder="Nhập tên đăng nhập" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  <FontAwesomeIcon icon={faLink} className="mr-2 text-gray-500 w-4 h-4" /> Slug
                </label>
                <input
                  className="w-full border rounded px-3 py-2 text-sm"
                  placeholder="Nhập slug"
                  value={slug}
                  onChange={(e) =>
                    setSlug(e.target.value.toLowerCase().replace(/\s+/g, "-"))
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  <FontAwesomeIcon icon={faCalendar} className="mr-2 text-gray-500 w-4 h-4" /> Ngày sinh
                </label>
                <input type="date" className="w-full border rounded px-3 py-2 text-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  <FontAwesomeIcon icon={faVenusMars} className="mr-2 text-gray-500 w-4 h-4" /> Giới tính
                </label>
                <select
                  className="w-full border rounded px-3 py-2 text-sm"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>

              <div className="bg-blue-50 border border-blue-200 text-blue-700 text-sm rounded-lg p-3">
                <strong className="font-semibold">Mẹo hữu ích:</strong> Hồ sơ đầy đủ giúp bạn được tìm thấy dễ dàng hơn và tạo uy tín cá nhân!
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-2 mt-4">
                <Link href="/" className="px-4 py-2 border rounded hover:bg-gray-100 text-gray-700 text-center text-sm">
                  ✕ Hủy bỏ
                </Link>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-medium text-sm"
                >
                  ✔ Lưu thay đổi
                </button>
              </div>
            </div>

            <div className="text-xs text-gray-500 mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <span>🕒 Chỉnh sửa lần cuối: <strong>14:32:10 – 09/06/2025</strong></span>
              <span className="text-green-500 font-medium">🔒 Bảo mật cao</span>
            </div>
          </div>
        </div>
      </div>

      {/* Toasts */}
      <div className="fixed top-6 right-6 z-50 flex flex-col gap-4">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            type={toast.type}
            message={toast.message}
            description={toast.description}
            onClose={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
          />
        ))}
      </div>

      {/* Confirm modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-sm text-center">
            <h2 className="text-lg font-semibold mb-2">Xác nhận chỉnh sửa</h2>
            <p className="text-sm text-gray-600 mb-4">Bạn có chắc muốn lưu thay đổi?</p>
            <div className="flex justify-center gap-3">
              <button
                onClick={cancelSave}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded text-red-600 border"
              >
                ❌ Hủyy
              </button>
              <button
                onClick={confirmSave}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
              >
                ✅ Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
