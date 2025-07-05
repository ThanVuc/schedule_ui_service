"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faUser,
  faIdBadge,
  faCalendar,
  faVenusMars,
  faAt,
} from "@fortawesome/free-solid-svg-icons";

const UserProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Thông tin người dùng
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Quản lý và cập nhật thông tin cá nhân của bạn
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="bg-white rounded-3xl shadow border border-gray-200 p-6 text-center flex flex-col items-center">
            {/* Avatar */}
            <div className="w-20 h-20 bg-blue-600 text-white flex items-center justify-center text-2xl font-bold rounded-full">
              TDP
            </div>

            {/* Name + username */}
            <h2 className="text-lg font-semibold mt-4 text-gray-800">
              TuanDanny Pham
            </h2>
            <p className="text-gray-500 text-sm">@tuandanny</p>

            {/* Role badge */}
            <span className="mt-2 inline-flex items-center text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
              <FontAwesomeIcon icon={faUserShield} className="w-3 h-3 mr-1" />
              Admin
            </span>

            {/* Bio */}
            <p className="mt-4 text-sm text-gray-600 leading-relaxed text-left w-full">
              Lập trình viên frontend nhiều kinh nghiệm, yêu thích tối ưu hiệu suất
              và tạo ra trải nghiệm người dùng hiệu quả và tinh tế.
            </p>
          </div>

          {/* Thông tin chi tiết */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Thông tin cơ bản */}
            <div className="bg-white rounded-3xl shadow border border-gray-200 p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { label: "Mã người dùng", icon: faIdBadge, value: "USR-2024-001" },
                { label: "Họ và tên", icon: faUser, value: "TuanDanny Pham" },
                { label: "Tên đăng nhập", icon: faAt, value: "tuandanny" },
                { label: "Slug (URL thân thiện)", value: "tuan-danny-pham" },
                { label: "Ngày sinh", icon: faCalendar, value: "15/5/1990" },
                { label: "Giới tính", icon: faVenusMars, value: "Nam" },
              ].map((field, i) => (
                <div key={i}>
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-1 mb-1">
                    {field.icon && (
                      <FontAwesomeIcon icon={field.icon} className="w-4 h-4" />
                    )}
                    {field.label}
                  </label>
                  <input
                    className="w-full border rounded-lg px-3 py-2 text-sm bg-gray-100 text-gray-700 cursor-not-allowed"
                    value={field.value}
                    disabled
                  />
                </div>
              ))}
            </div>

            {/* Ngày tạo & cập nhật */}
            <div className="bg-white rounded-3xl shadow border border-gray-200 p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1 mb-1">
                  <FontAwesomeIcon icon={faCalendar} className="w-4 h-4" />
                  Ngày tạo tài khoản
                </label>
                <input
                  className="w-full border rounded-lg px-3 py-2 text-sm bg-gray-100 text-gray-700 cursor-not-allowed"
                  value="15/1/2023"
                  disabled
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1 mb-1">
                  <FontAwesomeIcon icon={faCalendar} className="w-4 h-4" />
                  Cập nhật gần nhất
                </label>
                <input
                  className="w-full border rounded-lg px-3 py-2 text-sm bg-gray-100 text-gray-700 cursor-not-allowed"
                  value="19/12/2024"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
