"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faPenToSquare,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const pathname = usePathname();
  const endpoints = "/admin";
  const menuItems = [
    { href: `/`, icon: faHome, label: "Trang Chủ" },
    { href: `${endpoints}/users`, icon: faUser, label: "Danh sách người dùng" },
    { href: `${endpoints}/roles`, icon: faPenToSquare, label: "Danh sách vai trò" },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white border-r px-5 py-6 hidden md:block">
      <div className="flex items-center gap-3 mb-10 px-2">
        <FontAwesomeIcon
          icon={faLayerGroup}
          className="text-blue-500 w-6 h-6"
        />
        <span className="font-semibold text-xl text-gray-800">
          Scrum Schedule
        </span>
      </div>
      <nav className="flex flex-col gap-1 text-sm font-medium">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all
                ${isActive
                  ? "bg-blue-100 text-blue-600 font-semibold"
                  : "text-gray-700 hover:bg-gray-100"}
              `}
            >
              <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
