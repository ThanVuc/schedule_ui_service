"use client";

import { useState } from "react";
import PaginationComponent from "./_components/pagination";
import SearchAndFilter from "./_components/SearchAndFilter";
import ListUser from "./_optimize/listuser";
import DetailedInformationOptimize from "./_optimize/DetailedInformationOptimize";
import DetailedLockOptimize from "./_optimize/DetailedLockoptimize";
import AssigRoleOptimize from "./_optimize/AssigRoleOptimize";
import AdminCount from "./_components/Admincountoptimaze";
import NotificationOptimize from "./_optimize/NotificationOptimaze";
import TextOptimize from "./_optimize/TextOptimaze";
import { UserModel } from "./model/user";
import { NotificationModel } from "./model/notification";


const ListUserPages = () => {
    const [notification, setNotification] = useState<NotificationModel | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalLockOpen, setIsModalLockOpen] = useState(false)
    const [isModalAssigRoleOpen, setIsModalAssigRoleOpen] = useState(false)
    const [selectedUser, setSelectedUser] = useState<UserModel>({
        id: "",
        name: "",
        date: "",
        email: "",
        role: [],
        gender: "",
        status: true,
        timestamp: "",
        updatelast: "",
        bio: "",
    });

    const [listUser, setListUser] = useState([
        {
            id: "1",
            name: "người dùng1",
            email: "thaidaihuan@gmail.com",
            role: ["admin"],
            status: true,
            gender: "nam",
            timestamp: "2025-05-17 22:25:00",
            date: "2004-12-25",
            updatelast: "2025-04-17 22:25:00",
            bio: "tôi là ai",

        },
        {
            id: "2",
            name: "người dùng33",
            email: "thaidaihuan@gmail.com",
            role: [],
            status: true,
            gender: "nữ",
            timestamp: "2025-05-17 22:25:00",
            date: "2004-12-25",
            updatelast: "2025-04-17 22:25:00",
            bio: "tôi là ai",

        },
        {
            id: "3",
            name: "người dùng34",
            email: "thaidaihuan@gmail.com",
            role: ["admin", "user"],
            status: true,
            gender: "nam",
            timestamp: "2025-05-17 22:25:00",
            date: "2004-12-25",
            updatelast: "2025-04-17 22:25:00",
            bio: "tôi là ai",
        },
        {
            id: "4",
            name: "người dùng3",
            email: "thaidaihuan@gmail.com",
            role: ["user"],
            status: true,
            gender: "nữ",
            timestamp: "2025-05-17 22:25:00",
            date: "2004-12-25",
            updatelast: "2025-04-17 22:25:00",
            bio: "tôi là ai",
        },
        {
            id: "5",
            name: "người dùng3",
            email: "thaidaihuan@gmail.com",
            role: ["user"],
            status: true,
            gender: "nữ",
            timestamp: "2025-05-17 22:25:00",
            date: "2004-12-25",
            updatelast: "2025-04-17 22:25:00",
            bio: "tôi là ai",
        },
        {
            id: "6",
            name: "người dùng3",
            email: "thaidaihuan@gmail.com",
            role: ["user"],
            status: true,
            gender: "nữ",
            timestamp: "2025-05-17 22:25:00",
            date: "2004-12-25",
            updatelast: "2025-04-17 22:25:00",
            bio: "tôi là ai",
        },
        {
            id: "7",
            name: "người dùng3",
            email: "thaidaihuan@gmail.com",
            role: ["user"],
            status: true,
            gender: "nữ",
            timestamp: "2025-05-17 22:25:00",
            date: "2004-12-25",
            updatelast: "2025-04-17 22:25:00",
            bio: "tôi là ai",
        },
        {
            id: "8",
            name: "người dùng3",
            email: "thaidaihuan@gmail.com",
            role: ["user"],
            status: true,
            gender: "nữ",
            timestamp: "2025-05-17 22:25:00",
            date: "2004-12-25",
            updatelast: "2025-04-17 22:25:00",
            bio: "tôi là ai",
        },
        {
            id: "9",
            name: "người dùng3",
            email: "thaidaihuan@gmail.com",
            role: ["user"],
            status: true,
            gender: "nữ",
            timestamp: "2025-05-17 22:25:00",
            date: "2004-12-25",
            updatelast: "2025-04-17 22:25:00",
            bio: "tôi là ai",
        },
        {
            id: "10",
            name: "người dùng3",
            email: "thaidaihuan@gmail.com",
            role: ["user"],
            status: true,
            gender: "nữ",
            timestamp: "2025-05-17 22:25:00",
            date: "2004-12-25",
            updatelast: "2025-04-17 22:25:00",
            bio: "tôi là ai",
        },
        {
            id: "11",
            name: "người dùng3",
            email: "thaidaihuan@gmail.com",
            role: ["user"],
            status: true,
            gender: "nữ",
            timestamp: "2025-05-17 22:25:00",
            date: "2004-12-25",
            updatelast: "2025-04-17 22:25:00",
            bio: "tôi là ai",
        },
        {
            id: "12",
            name: "người dùng3",
            email: "thaidaihuan@gmail.com",
            role: ["user"],
            status: true,
            gender: "nữ",
            timestamp: "2025-05-17 22:25:00",
            date: "2004-12-25",
            updatelast: "2025-04-17 22:25:00",
            bio: "tôi là ai",
        },
        {
            id: "13",
            name: "người dùng3",
            email: "thaidaihuan@gmail.com",
            role: ["user"],
            status: true,
            gender: "nữ",
            timestamp: "2025-05-17 22:25:00",
            date: "2004-12-25",
            updatelast: "2025-04-17 22:25:00",
            bio: "tôi là ai",
        },
        {
            id: "14",
            name: "người dùng3",
            email: "thaidaihuan@gmail.com",
            role: ["user"],
            status: true,
            gender: "nữ",
            timestamp: "2025-05-17 22:25:00",
            date: "2004-12-25",
            updatelast: "2025-04-17 22:25:00",
            bio: "tôi là ai tôi là aitôi là aitôi là aitôi là aitôi là aitôi là aitôi là aitôi là ai tô",
        },

    ])
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const currentUsers = listUser.slice( // lấy danh sách người dùng hiện tại
        (currentPage - 1) * itemsPerPage, // bắt đầu từ trang hiện tại
        currentPage * itemsPerPage
    );
    return (
        <div className="flex-1 px-4 md:px-7 pb-10">
            {/* thông báo */}
            <NotificationOptimize notification={notification} setNotification={setNotification} />
            {/* tiêu đề trang */}
            <TextOptimize />
            {/* tìm kiếm và lọc người dùng */}
            <SearchAndFilter />
            {/* list user */}
            <AdminCount />
            <ListUser currentUsers={currentUsers}
                setSelectedUser={setSelectedUser}
                setIsModalOpen={setIsModalOpen}
                setIsModalLockOpen={setIsModalLockOpen}
                setIsModalAssigRoleOpen={setIsModalAssigRoleOpen}
            />
            {/* thông tin người dùng */}
            {isModalOpen && selectedUser && (
                <DetailedInformationOptimize
                    setIsModalOpen={setIsModalOpen}
                    selectedUser={selectedUser}
                />
            )}
            {/* khoá người dùng */}
            {isModalLockOpen && selectedUser && (
                <DetailedLockOptimize
                    setListUser={setListUser}
                    setIsModalLockOpen={setIsModalLockOpen}
                    selectedUser={selectedUser}
                    setNotification={setNotification}
                />
            )}
            {/* phân quyền người dùng */}
            {isModalAssigRoleOpen && selectedUser && (
                <AssigRoleOptimize
                    setIsModalAssigRoleOpen={setIsModalAssigRoleOpen}
                    selectedUser={selectedUser}
                    setNotification={setNotification}
                />
            )}
            {/* phân trang */}
            <div className="mt-10 flex ml-6">
                <div>
                    <PaginationComponent
                        listUser={listUser}
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>

        </div>
    );
};

export default ListUserPages;