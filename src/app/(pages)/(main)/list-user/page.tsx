"use client";

import { useState } from "react";
import CardItem from "./_components/cardItem";
import DetailedInformation from "./_components/detailedInformation";
import PaginationComponent from "./_components/pagination";
import SearchAndFilter from "./_components/SearchAndFilter";



const ListUserPages = () => {
    const handleFilterChange = (value: string) => {
        console.log("Filter changed to:", value);
        // Thêm logic lọc dữ liệu tại đây nếu cần
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState({
        id: "",
        name: "",
        date: "",
        email: "",
        role: "",
        gender: "",
        status: true,
        timestamp: "",
        updatelast: "",
        bio: "",

    },); // Thêm state để lưu người dùng được chọn
    const [listUser, seListUser] = useState([
        {
            id: "1",
            name: "người dùng1",
            email: "thaidaihuan@gmail.com",
            role: "admin",
            status: true,
            gender: "nam",
            timestamp: "2025-05-17 22:25:00",
            date: "2004-12-25",
            Phone: "099999666",
            updatelast: "2025-04-17 22:25:00",
            bio: "tôi là ai",

        },
        {
            id: "2",
            name: "người dùng33",
            email: "thaidaihuan@gmail.com",
            role: "admin",
            status: true,
            gender: "nữ",
            timestamp: "2025-05-17 22:25:00",
            date: "2004-12-25",
            Phone: "099999666",
            updatelast: "2025-04-17 22:25:00",
            bio: "tôi là ai",

        },
        {
            id: "3",
            name: "người dùng34",
            email: "thaidaihuan@gmail.com",
            role: "admin",
            status: true,
            gender: "nam",
            timestamp: "2025-05-17 22:25:00",
            date: "2004-12-25",
            Phone: "099999666",
            updatelast: "2025-04-17 22:25:00",
            bio: "tôi là ai",
        },
        {
            id: "4",
            name: "người dùng3",
            email: "thaidaihuan@gmail.com",
            role: "admin",
            status: true,
            gender: "nữ",
            timestamp: "2025-05-17 22:25:00",
            date: "2004-12-25",
            Phone: "099999666",
            updatelast: "2025-04-17 22:25:00",
            bio: "tôi là ai",
        },
    ])
    const adminCount = listUser.filter((user) => user.role === "admin").length;
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(listUser.length / itemsPerPage);
    const currentUsers = listUser.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="mx-7 mt-7">
            <h1 className="text-2xl text-black font-bold">Danh Sách Người Dùng</h1>
            <h2 className="text-1 text-[#6B7280] mt-1">
                Xem và quản lý các tài khoản có vai trò quản trị hệ thống
            </h2>
            <div>
                <SearchAndFilter onFilterChange={handleFilterChange} />
            </div>

            {/* list user */}
            <div className="mt-10 flex flex-col gap-3">
                {currentUsers.map((user) => (
                    <div>
                        <CardItem
                            key={user.id}
                            onClick={() => {
                                setSelectedUser(user); // Lưu thông tin người dùng được chọn
                                setIsModalOpen(true);
                            }}
                            name={user.name}
                            email={user.email}
                            role={user.role}
                            status={user.status}
                            timestamp={user.timestamp}
                        />
                    </div>
                ))}
            </div>

            {/* thông tin chi tiết người dùng */}
            {isModalOpen && selectedUser && (
                <div className="fixed w-screen h-screen flex justify-center items-center z-50 top-0 left-0">
                    <DetailedInformation
                        onClose={() => setIsModalOpen(false)}
                        id={selectedUser.id}
                        name={selectedUser.name}
                        date={selectedUser.date}
                        email={selectedUser.email}
                        gender={selectedUser.gender}
                        role={selectedUser.role}
                        status={selectedUser.status}
                        timestamp={selectedUser.timestamp}
                        updatelast={selectedUser.updatelast}
                        bio={selectedUser.bio}
                    />
                </div>
            )}
            {/* phân trang */}
            <div className="mt-10 flex ml-6">
                <div>
                    <PaginationComponent
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
            <span className="text-[#2A70D2]">Tổng cộng: {adminCount} quản trị viên</span>
        </div>
    );
};

export default ListUserPages;