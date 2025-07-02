"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bell, ChevronDown, LogOut, Search, User2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  faPenToSquare,
  faLock,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HeaderProps {
  userName: string;
  userRole: string;
  logoUrl?: string;
  siteName?: string;
  avatarUrl?: string;

}
const endpoints = "/personal-account"
const menuItems = [
  { href: `${endpoints}/personal-info`, icon: faUser, label: "Thông tin cá nhân" },
  { href: `${endpoints}/edit-profile`, icon: faPenToSquare, label: "Chỉnh sửa thông tin" },
  { href: `${endpoints}/reset-pass`, icon: faLock, label: "Đặt lại mật khẩu" },
];

const menus = [
  {
    title: "Features",
    items: [
      { href: "/features/overview", label: "Overview" },
      { href: "/features/analytics", label: "Analytics" },
      { href: "/features/settings", label: "Settings" },
    ],
  },
  {
    title: "Projects",
    items: [
      { href: "/projects/all", label: "All Projects" },
      { href: "/projects/new", label: "New Project" },
    ],
  },
  {
    title: "Services",
    items: [
      { href: "/services/consulting", label: "Consulting" },
      { href: "/services/support", label: "Support" },
    ],
  },
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

  const [hovered, setHovered] = useState<string | null>(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isUserMenuLocked, setIsUserMenuLocked] = useState(false);
  const pathname = usePathname();
  const isAdminPage = pathname.includes("/admin");


  return (
    <header className="h-16 w-full flex items-center justify-between bg-gray-50 border-b border-gray-200 px-6 shadow-sm">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 hover:opacity-80">
        <img
          src={logoUrl}
          alt="Logo"
          className="h-8 w-8 rounded-full bg-white"
        />
        <span className="text-lg font-semibold italic text-gray-800">
          {siteName}
        </span>
      </Link>

      {/* Menu */}
      {
        !isAdminPage && <div>
          {
            <nav className="flex items-center gap-6">
              {menus.map((menu) => (
                <Popover key={menu.title} open={hovered === menu.title}>
                  <PopoverTrigger
                    onMouseEnter={() => setHovered(menu.title)}
                    onMouseLeave={() => setHovered(null)}
                    className="flex items-center gap-1 font-medium text-gray-800"
                  >
                    {menu.title}
                    <ChevronDown className="w-4 h-4" />
                  </PopoverTrigger>
                  <PopoverContent
                    onMouseEnter={() => setHovered(menu.title)}
                    onMouseLeave={() => setHovered(null)}
                    className={`w-44 p-0 ${dropdownAnimation}`}
                    align="start"
                  >
                    <ul className="text-sm">
                      {menu.items.map((item) => (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </PopoverContent>
                </Popover>
              ))}
            </nav>
          }
        </div>
      }

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center bg-white border border-gray-300 rounded px-3 h-10 w-[220px]">
          <Search className="w-5 h-5 text-gray-500 mr-2" />
          <Input
            type="text"
            placeholder="Tìm kiếm..."
            className="h-8 border-none p-0 text-sm focus-visible:ring-0"
          />
        </div>

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5 text-gray-700" />
          <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white" />
        </Button>

        {/* User Info */}
        <Popover
          open={isUserMenuOpen}
          onOpenChange={(open) => {
            if (!open && isUserMenuLocked) {
              setIsUserMenuOpen(false);
              setIsUserMenuLocked(false);
            } else if (!open && !isUserMenuLocked) {
              setIsUserMenuOpen(false);
            }
          }}
        >
          <PopoverTrigger
            onMouseEnter={() => {
              if (!isUserMenuLocked) {
                setIsUserMenuOpen(true);
              }
            }}
            onMouseLeave={() => {
              if (!isUserMenuLocked) {
                setIsUserMenuOpen(false);
              }
            }}
            onClick={(e) => {
              e.preventDefault();
              if (isUserMenuLocked) {
                setIsUserMenuLocked(false);
                setIsUserMenuOpen(false);
              } else {
                setIsUserMenuLocked(true);
                setIsUserMenuOpen(true);
              }
            }}
            className="flex items-center gap-3 bg-gray-100 rounded-tr-2xl rounded-br-2xl px-5 py-2 min-w-1 border-l border-gray-200 cursor-pointer"
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
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-800">
                Tên: {userName}
              </span>
            </div>
          </PopoverTrigger>
          <PopoverContent
            className={`w-48 p-1 ${dropdownAnimation}`}
            align="end"
          >
            <ul className="text-sm">

              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 rounded px-3 py-2 hover:bg-gray-100"
                  >
                    <FontAwesomeIcon icon={item.icon} className="w-4 h-4 mr-2" />
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 rounded w-full text-left px-3 py-2 hover:bg-gray-100"
                >
                  <LogOut className="w-4 h-4 mr-2" /> Đăng xuất
                </button>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
