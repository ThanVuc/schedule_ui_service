




"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faPenToSquare,
  faLock,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const pathname = usePathname();

  const endpoints = "/personal-account"


  const menuItems = [
    { href: `${endpoints}/home`, icon: faHome, label: "Trang Chủ" },
    { href: `${endpoints}/personal-info`, icon: faUser, label: "Thông tin cá nhân" },
    { href: `${endpoints}/edit-profile`, icon: faPenToSquare, label: "Chỉnh sửa thông tin" },
    { href: `${endpoints}/reset-pass`, icon: faLock, label: "Đặt lại mật khẩu" },
  ];

  return (
    <div className="w-64 min-h-screen bg-white border-r px-4 py-6 fixed left-0 top-0">
      {/* Logo + App name */}
      <div className="flex items-center gap-3 mb-8 px-2">
        <FontAwesomeIcon
          icon={faLayerGroup}
          className="text-blue-500 w-5 h-5"
        />
        <span className="font-semibold text-[17px]">Scrum Schedule App</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 text-[15px] font-normal">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all
                ${isActive
                  ? "bg-blue-100 text-blue-600 font-medium"
                  : "text-gray-700 hover:bg-blue-50"}
              `}
            >
              <FontAwesomeIcon icon={item.icon} className="w-4 h-4 text-inherit" />
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
