"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faPenToSquare,
  faLayerGroup,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const endpoints = "/admin";
  const menuItems = [
    { href: `/`, icon: faHome, label: "Trang Chủ" },
    { href: `${endpoints}/users`, icon: faUser, label: "Danh sách người dùng" },
    { href: `${endpoints}/roles`, icon: faPenToSquare, label: "Danh sách vai trò" },
  ];
  return (
    <div className=" flex">
      <button
        className={open ? "hidden" : "fixed left-0 z-50 md:hidden bg-white p-2  shadow rounded-r-lg"}
        onClick={() => setOpen(true)}
        aria-label="Mở menu"
      >
        <FontAwesomeIcon icon={faBars} className="w-5 h-5 text-blue-500 " />
      </button>
      <div className=" w-64 h-15 px-5 py-2 hidden md:block ">
        <div className=" fixed h-155 left-4 bg-white p-6 hidden md:block rounded-2xl border shadow-lg">
          <div className="flex items-center gap-3 mb-10 px-2 ">
            <FontAwesomeIcon
              icon={faLayerGroup}
              className="text-blue-500 w-6 h-6"
            />
            <span className="font-semibold text-xl text-gray-800">
              Administrator
            </span>
          </div>
          <div className="flex flex-col gap-1 text-sm font-medium ">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 transition-all rounded-md 
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
          </div>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-40 bg-black/30 md:hidden" onClick={() => setOpen(false)}>
          <div
            className="fixed top-0 left-0 w-64 h-full bg-white px-5 py-6 z-50 animate-slide-in"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500"
              onClick={() => setOpen(false)}
              aria-label="Đóng menu"
            >
              <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3 mb-10 px-2">
              <FontAwesomeIcon
                icon={faLayerGroup}
                className="text-blue-500 w-6 h-6"
              />
              <span className="font-semibold text-xl text-gray-800">
                Administrator
              </span>
            </div>
            <nav className="flex flex-col gap-1 text-sm font-medium">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2  transition-all rounded-md 
                      ${isActive
                        ? "bg-blue-100 text-blue-600 font-semibold"
                        : "text-gray-700 hover:bg-gray-100"}
                    `}
                    onClick={() => setOpen(false)}
                  >
                    <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;