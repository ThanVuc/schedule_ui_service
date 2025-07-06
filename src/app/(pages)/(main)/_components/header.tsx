"use client";

import {
  Popover, PopoverContent, PopoverTrigger,
} from "@/components/ui/popover";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Bell, LogOut, Search, User2,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import {
  faPenToSquare,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HeaderProps {
  userName: string;
  userRole: string;
  logoUrl?: string;
  siteName?: string;
  avatarUrl?: string;
}

const endpoints = "/personal-account";
const menuItems = [
  { href: `${endpoints}/personal-info`, icon: faUser, label: "Thông tin cá nhân" },
  { href: `${endpoints}/edit-profile`, icon: faPenToSquare, label: "Chỉnh sửa thông tin" },
  { href: `${endpoints}/reset-pass`, icon: faLock, label: "Đặt lại mật khẩu" },
];

export default function Header({
  userName,
  siteName = "Tên Website",
  logoUrl,
  avatarUrl,
}: HeaderProps) {
  const handleLogout = () => {
    alert("Đăng xuất thành công!");
  };

  const dropdownAnimation =
    "animate-in fade-in zoom-in-95 duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:zoom-out-95";
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <div className="h-16 w-full z-999">
      <div className="fixed h-16 w-full flex items-center justify-between  bg-gray-50 border-b border-gray-200 shadow-sm">
        {/* Logo */}
        <Link href="/" className="flex items-center ml-4.5 gap-3 hover:opacity-80">
          <img
            src={logoUrl}
            alt="Logo"
            className="h-8 w-8 rounded-full bg-white"
          />
          <span className="text-lg font-semibold italic text-gray-800">
            {siteName}
          </span>
        </Link>

        {/* Right Section */}
        <div className="flex  items-center gap-2 md:gap-4 ">
          {/* Search */}
          <div className="flex items-center  bg-white border  border-gray-300 rounded px-3 h-10 w-[220px]">
            <Search className="w-5 h-5 text-gray-500 mr-2" />
            <Input
              type="text"
              placeholder="Tìm kiếm..."
              className="h-8 border-none text-sm focus-visible:ring-0"
            />
          </div>

          {/* Notification */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5 text-gray-700" />
            <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white" />
          </Button>

          {/* User Info */}
          <Popover open={isUserMenuOpen} onOpenChange={setIsUserMenuOpen}>
            <PopoverTrigger
              onClick={(e) => {
                e.preventDefault();
                setIsUserMenuOpen(!isUserMenuOpen);
              }}
              className="flex items-center  bg-gray-100 rounded-tr-2xl mx-4.5 rounded-br-2xl px-5 py-3 shadow-sm min-w-[200px] border-l border-gray-200 cursor-pointer"
            >
              <div className="h-10 w-10 rounded-full flex items-center justify-center overflow-hidden">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt={userName}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-purple-200 flex items-center justify-center">
                    <User2 className="w-6 h-6 text-purple-600" />
                  </div>
                )}
              </div>
              <div className="flex flex-col ml-2">
                <span className="text-sm font-medium text-gray-800">
                  Tên: {userName}
                </span>
              </div>
            </PopoverTrigger>
            <PopoverContent className={`w-48 p-1 ${dropdownAnimation}`} align="end">
              <ul className="text-sm">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 rounded px-3 py-2 hover:bg-gray-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <FontAwesomeIcon icon={item.icon} className="w-4 h-4 mr-2" />
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsUserMenuOpen(false);
                    }}
                    className="flex items-center gap-2 rounded w-full text-left px-3 py-2 hover:bg-gray-100"
                  >
                    <LogOut className="w-4 h-4 mr-2" /> Đăng xuất
                  </button>
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
