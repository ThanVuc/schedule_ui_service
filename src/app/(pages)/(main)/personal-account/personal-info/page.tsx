

"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faUserShield,
  faLock,
  faUser,
  faIdBadge,
  faCalendar,
  faVenusMars,
  faUserEdit,
  faAt,
  // faHome,
  // faPenToSquare,
  // faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

// Main UserProfile component
const UserProfile = () => {

  return (

    <div className="max-w-[calc(100%-16rem)] mx-auto px-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Thông tin người dùng</h1>
        <p className="text-gray-500 text-sm mt-1">Quản lý và cập nhật thông tin cá nhân của bạn</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-md p-6 text-center border border-gray-200">
          <div className="w-20 h-20 mx-auto bg-blue-600 text-white flex items-center justify-center text-2xl font-bold rounded-full relative">
            TDP
            <span className="absolute -top-1 -right-1 bg-green-500 text-white p-1 rounded-full shadow">
              <FontAwesomeIcon icon={faCheckCircle} className="w-3 h-3" />
            </span>
          </div>
          <h2 className="text-xl font-semibold mt-4 text-gray-800">TuanDanny Pham</h2>
          <p className="text-gray-500 text-sm">@tuandanny</p>
          <div className="flex justify-center gap-2 mt-3">
            <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Admin</span>
            <span className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full">Đã xác thực</span>
          </div>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Senior Frontend Developer tại TechCorp. Đam mê xây dựng những trải nghiệm người dùng tuyệt vời.
          </p>
          <div className="mt-5">
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div className="bg-green-500 h-2 w-[85%] transition-all duration-300" />
            </div>
            <p className="text-xs text-gray-500 mt-1">Hồ sơ hoàn thiện 85%</p>
          </div>
          <button className="mt-5 w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-all text-sm font-medium shadow flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faUserEdit} className="w-4 h-4" />
            <span>Chỉnh sửa thông tin</span>
          </button>
        </div>

        {/* Thông tin chi tiết */}
        <div className="col-span-2 flex flex-col gap-6">
          {/* Thông tin cơ bản */}
          <div className="bg-white rounded-3xl shadow-md p-6 border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { label: "Mã người dùng", icon: faIdBadge, value: "USR-2024-001", disabled: true },
              { label: "Họ và tên", icon: faUser, value: "TuanDanny Pham" },
              { label: "Tên đăng nhập", icon: faAt, value: "tuandanny" },
              { label: "Slug (URL thân thiện)", value: "tuan-danny-pham" },
              { label: "Ngày sinh", icon: faCalendar, value: "15/5/1990" },
              { label: "Giới tính", icon: faVenusMars, value: "Nam" },
            ].map((field, i) => (
              <div key={i}>
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  {field.icon && <FontAwesomeIcon icon={field.icon} className="w-4 h-4" />}
                  {field.label}
                </label>
                <input
                  className="mt-1 w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={field.value}
                  disabled={field.disabled}
                />
              </div>
            ))}
          </div>

          {/* Ngày tạo và cập nhật */}
          <div className="bg-white rounded-3xl shadow-md p-6 border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                <FontAwesomeIcon icon={faCalendar} className="w-4 h-4" />
                Ngày tạo tài khoản
              </label>
              <input className="mt-1 w-full border rounded-lg px-3 py-2 text-sm" value="15/1/2023" disabled />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                <FontAwesomeIcon icon={faCalendar} className="w-4 h-4" />
                Cập nhật gần nhất
              </label>
              <input className="mt-1 w-full border rounded-lg px-3 py-2 text-sm" value="19/12/2024" disabled />
            </div>
          </div>

          {/* Trạng thái tài khoản */}
          <div className="bg-white rounded-3xl shadow-md p-6 border border-gray-200 space-y-4">
            <div className="flex items-center p-3 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
              <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 mr-2" />
              Tài khoản đã xác thực
            </div>
            <div className="flex items-center p-3 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
              <FontAwesomeIcon icon={faUserShield} className="w-4 h-4 mr-2" />
              Quyền quản trị
            </div>
            <div className="flex items-center p-3 bg-yellow-100 text-yellow-700 rounded-lg text-sm font-medium">
              <FontAwesomeIcon icon={faLock} className="w-4 h-4 mr-2" />
              Xác thực 2 lớp
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

