"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CheckIcon, ChevronsLeft, ChevronsRight, ChevronsUpDown } from "lucide-react";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import CardItem from "./_components/cardItem";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

const ListUserPages = () => {
    const ItemComBoBox = [{ value: "1", label: "Tất cả trạng thái" }, { value: "2", label: "Quản trị viên" }, { value: "3", label: "Người dùng" }];
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    const users = Array.from({ length: 100 }, (_, i) => ({ // nâng length lên nếu muốn tăng ôs lượng
        id: i + 1,
        name: "người dùng",
        email: "thaidaihuan@gmail.com",
        role: i % 4 === 0 ? "admin" : "user", // Giả sử cứ 4 người thì có 1 người là admin nếu muốn để thì thì bỏ đi phần này
        status: i % 3 !== 0, //như trên nhưng mà 3 người
        timestamp: "2025-05-17 22:25:00", // cái này hay nè
    }));
    const adminCount = users.filter(user => user.role === "admin").length; // Đếm số lượng người dùng có vai trò admin
    const itemsPerPage = 10; // Số lượng người dùng hiển thị trên mỗi trang
    const [currentPage, setCurrentPage] = React.useState(1); // Trang hiện tại
    const totalPages = Math.ceil(users.length / itemsPerPage); // Tổng số trang
    const currentUsers = users.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    ); // Lấy người dùng cho trang hiện tại
    // dễ hiểu mà, chắc thế
    const getPageNumbers = (current: number, total: number, maxVisible: number = 5) => {
        const half = Math.floor(maxVisible / 2);
        let start = Math.max(1, current - half);
        let end = start + maxVisible - 1;

        if (end > total) {
            end = total;
            start = Math.max(1, end - maxVisible + 1);
        }

        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };
    // Hàm này sẽ trả về một mảng các số trang cần hiển thị, ví dụ: [1, 2, 3, 4, 5] nếu có 5 trang
    return (
        <div className="mx-7 mt-7">
            <h1 className="text-2xl text-black font-bold">Danh Sách Người Dùng</h1>
            <h2 className="text-1 text-[#6B7280] mt-1 ">Xem và quản lý các tài khoản có vai trò quản trị hệ thống</h2>
            <div className="flex w-2/5 mt-4">
                <Input className=" mr-3" placeholder="Tìm theo tên hoặc email... " />
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button variant={"outline"} role="combobox" aria-expanded={open} className="w-[200px] justufy-between">
                            {value ? ItemComBoBox.find(item => item.value === value)?.label : "Tất cả trạng thái"}
                            <ChevronsUpDown className="opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px]">
                        <Command>
                            <CommandGroup>
                                {ItemComBoBox.map((item) => (
                                    <CommandItem
                                        key={item.value}
                                        value={item.value}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue = value ? "" : currentValue)
                                            setOpen(false)
                                        }}>
                                        <CheckIcon className={cn("mr-2 h-4 w-4", value === item.value ? "opacity-100" : "opacity-0")} />
                                        {item.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </Command>
                    </PopoverContent>
                </Popover >

            </div>
            <div className="mt-10 flex flex-col gap-3">
                {currentUsers.map((user) => (
                    <CardItem
                        key={user.id}
                        name={user.name}
                        email={user.email}
                        role={user.role}
                        status={user.status}
                        timestamp={user.timestamp}
                    />
                ))}  </div>
            <div className="mt-10 flex ml-15 ">
                <div >
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationLink
                                    href="#"
                                    isActive={currentPage === 1} // Đánh dấu trang cuối cùng nếu là trang hiện tại
                                    onClick={() => setCurrentPage(1)} // Cập nhật trang hiện tại khi người dùng nhấp vào trang đầu tiên
                                >
                                    {<ChevronsLeft />}
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationPrevious
                                    href="#"
                                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} // Giới hạn trang không nhỏ hơn 1
                                />
                            </PaginationItem>

                            {getPageNumbers(currentPage, totalPages).map((page) => (
                                <PaginationItem key={page}>
                                    <PaginationLink
                                        href="#"
                                        isActive={currentPage === page} // Đánh dấu trang hiện tại
                                        onClick={() => setCurrentPage(page)} // Cập nhật trang hiện tại khi người dùng nhấp vào số trang
                                    >
                                        {page}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}
                            <PaginationItem>
                                {currentPage < totalPages && <PaginationEllipsis /> // Hiển thị dấu ba chấm nếu không phải là trang cuối cùng
                                }
                            </PaginationItem>

                            <PaginationItem>
                                <PaginationNext className=""

                                    href="#"
                                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} // Giới hạn trang không lớn hơn tổng số trang
                                />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink
                                    href="#"
                                    isActive={currentPage === totalPages} // Đánh dấu trang cuối cùng nếu là trang hiện tại
                                    onClick={() => setCurrentPage(totalPages)} // Cập nhật trang hiện tại khi người dùng nhấp vào trang cuối cùng
                                >
                                    {<ChevronsRight />}
                                </PaginationLink>
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>

                </div>

            </div>
            <span className="text-[#2A70D2]"> Tổng cộng : {adminCount} quản trị viên </span>
        </div>);
}

export default ListUserPages;

