"use client";

import { useState } from "react";
import PaginationComponent from "./_components/pagination";
import SearchAndFilter from "./_components/SearchAndFilter";
import { IFUser } from "../../../../model/user";
import { Noti } from "@/app/model/notification";
import ListUser from "./_optimize/listuser";
import DetailedInformationOptimize from "./_optimize/DetailedInformationOptimize";
import DetailedLockOptimize from "./_optimize/DetailedLockoptimize";
import AssigRoleOptimize from "./_optimize/AssigRoleOptimize";
import AdminCountOptimize from "./_optimize/Admincountoptimaze";
import NotificationOptimize from "./_optimize/NotificationOptimaze";
import TextOptimize from "./_optimize/TextOptimaze";


const ListUserPages = () => {
    const [notification, setNotification] = useState<Noti | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalLockOpen, setIsModalLockOpen] = useState(false)
    const [isModalAssigRoleOpen, setIsModalAssigRoleOpen] = useState(false)
    const [selectedUser, setSelectedUser] = useState<IFUser>({
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
    ])
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const currentUsers = listUser.slice( // lấy danh sách người dùng hiện tại
        (currentPage - 1) * itemsPerPage, // bắt đầu từ trang hiện tại
        currentPage * itemsPerPage
    );
    return (
        <div className="mx-7 mt-7">
            <NotificationOptimize notification={notification} setNotification={setNotification} />
            <TextOptimize />
            <div>
                <SearchAndFilter />
            </div>

            {/* list user */}
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
            <AdminCountOptimize
                listUser={listUser}
            />
        </div>
    );
};

export default ListUserPages;