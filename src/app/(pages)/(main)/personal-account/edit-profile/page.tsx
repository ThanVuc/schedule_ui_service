
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
  const [toasts, setToasts] = useState<ToastType[]>([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    <div className="min-h-screen bg-gradient-to-br from-[#eef6fb] to-[#fff6fa]">
      {/* Sidebar cố định bên trái */}

      {/* Nội dung chính */}
      <div className="ml-64 px-4 py-8 md:px-8 md:py-12">
        <div className="max-w-screen-lg mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
            Chỉnh sửa thông tin cá nhân
          </h1>
          <p className="text-center text-gray-500 mb-8 text-sm md:text-base">
            Cập nhật thông tin cá nhân để đảm bảo hồ sơ của bạn luôn chính xác và đầy đủ
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cột trái - Avatar */}
            <div className="bg-white rounded-2xl shadow p-4 md:p-6 flex flex-col items-center text-center">
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
                    className="w-24 h-24 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-xl font-semibold text-gray-600">
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

              <h2 className="mt-4 text-base md:text-lg font-semibold">TuanDanny Pham</h2>
              <p className="text-sm text-gray-600">tuandannypham@gmail.com</p>

              <div className="flex justify-center gap-2 mt-2">
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Admin</span>
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">Đã xác thực</span>
              </div>

              <div className="mt-6 w-full">
                <p className="text-sm font-medium">Hoàn thiện hồ sơ</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Còn lại 15% để hoàn thiện hồ sơ</p>
              </div>

              <div className="mt-6 w-full">
                <p className="text-sm font-medium mb-1">Tiểu sử</p>
                <textarea
                  className="w-full border rounded-lg p-2 text-sm resize-none min-h-[100px]"
                  maxLength={300}
                  placeholder="Nhập tiểu sử..."
                />
                <p className="text-right text-xs text-gray-400 mt-1">0/300</p>
              </div>
            </div>

            {/* Cột phải - Form thông tin */}
            <div className="col-span-2 bg-white rounded-2xl shadow p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-4 flex items-center">
                <FontAwesomeIcon icon={faSearch} className="mr-2 text-gray-500 w-4 h-4" />
                Thông tin cơ bản
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    <FontAwesomeIcon icon={faUser} className="mr-2 text-gray-500 w-4 h-4" /> Họ và tên
                  </label>
                  <input className="w-full border rounded px-3 py-2" placeholder="Nhập họ và tên đầy đủ" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    <FontAwesomeIcon icon={faUserTag} className="mr-2 text-gray-500 w-4 h-4" /> Tên đăng nhập
                  </label>
                  <input className="w-full border rounded px-3 py-2" placeholder="Nhập tên đăng nhập" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    <FontAwesomeIcon icon={faLink} className="mr-2 text-gray-500 w-4 h-4" /> Slug
                  </label>
                  <input
                    className="w-full border rounded px-3 py-2"
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
                  <input type="date" className="w-full border rounded px-3 py-2" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    <FontAwesomeIcon icon={faVenusMars} className="mr-2 text-gray-500 w-4 h-4" /> Giới tính
                  </label>
                  <select
                    className="w-full border rounded px-3 py-2"
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

                <div className="flex flex-col sm:flex-row justify-end gap-2 mt-6">
                  <Link href="/" className="px-4 py-2 border rounded hover:bg-gray-100 text-gray-700 text-center">
                    ✕ Hủy bỏ
                  </Link>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-medium"
                  >
                    ✔ Lưu thay đổi
                  </button>
                </div>
              </div>

              <div className="text-xs text-gray-500 mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <span>🕒 Chỉnh sửa lần cuối: <strong>14:32:10 – 09/06/2025</strong></span>
                <span className="text-green-500 font-medium">🔒 Bảo mật cao</span>
              </div>
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

      {/* Xác nhận lưu thay đổi */}
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
                ❌ Hủy
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
