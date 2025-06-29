"use client";
import React from "react";
import Sidebar from "../_components/Sidebar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faUserCheck,
  faBell
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar bên trái */}
      <Sidebar />

      {/* Nội dung bên phải */}
      <div className="flex-1 bg-gray-50 min-h-screen px-6 py-8">
        <h1 className="text-2xl font-bold mb-6 text-black">Trang chủ</h1>

        {/* 3 box Tổng quan / Hoạt động / Thông báo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Link href="/homeprofile" className="block">
            <div className="bg-blue-100 rounded-xl p-4 flex items-center gap-4 hover:bg-blue-200 transition">
              <div className="bg-blue-300 p-3 rounded-full text-white">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <div>
                <p className="font-semibold text-black">Tổng quan</p>
                <p className="text-sm text-black">
                  Chào mừng bạn quay trở lại với hệ thống quản lý cá nhân.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/activity" className="block">
            <div className="bg-green-100 rounded-xl p-4 flex items-center gap-4 hover:bg-green-200 transition">
              <div className="bg-green-300 p-3 rounded-full text-white">
                <FontAwesomeIcon icon={faUserCheck} />
              </div>
              <div>
                <p className="font-semibold text-black">Hoạt động</p>
                <p className="text-sm text-black">
                  Tất cả hoạt động của bạn đang hoạt động bình thường.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/notifications" className="block">
            <div className="bg-yellow-100 rounded-xl p-4 flex items-center gap-4 hover:bg-yellow-200 transition">
              <div className="bg-yellow-400 p-3 rounded-full text-white">
                <FontAwesomeIcon icon={faBell} />
              </div>
              <div>
                <p className="font-semibold text-black">Thông báo</p>
                <p className="text-sm text-black">
                  Bạn có 3 thông báo mới cần xem xét.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Hoạt động gần đây */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-black">Hoạt động gần đây</h2>
          <div className="space-y-3">
            <div className="bg-white rounded-xl shadow p-4 flex items-center gap-3">
              <FontAwesomeIcon icon={faLock} className="text-black w-5 h-5" />
              <div>
                <p className="font-medium text-black">Đăng nhập thành công</p>
                <p className="text-sm text-black">2 phút trước</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex items-center gap-3">
              <FontAwesomeIcon icon={faUserCheck} className="text-black w-5 h-5" />
              <div>
                <p className="font-medium text-black">Cập nhật thông tin cá nhân</p>
                <p className="text-sm text-black">1 giờ trước</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-yellow-300" />
              <div>
                <p className="font-medium text-black">Thông báo hệ thống</p>
                <p className="text-sm text-black">3 giờ trước</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
