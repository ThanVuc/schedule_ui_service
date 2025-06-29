"use client";

import React from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "../../../../../../components/ui/pagination";

export interface CustomPaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;

    // Phần "Đi đến trang"
    gotoPage: string;
    setGotoPage: (value: string) => void;
    onGotoPage: () => void;
    isGotoValid: () => boolean;

    error?: string;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
    totalPages,
    currentPage,
    onPageChange,
    gotoPage,
    setGotoPage,
    onGotoPage,
    isGotoValid,
    error,
}) => {
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            onPageChange(currentPage - 1);
                        }}
                    />
                </PaginationItem>

                {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter(
                        (page) =>
                            page === 1 ||
                            page === totalPages ||
                            (page >= currentPage - 1 && page <= currentPage + 1)
                    )
                    .reduce((acc: (number | "ellipsis")[], page, i, arr) => {
                        if (i > 0 && page - (arr[i - 1] as number) > 1) {
                            acc.push("ellipsis");
                        }
                        acc.push(page);
                        return acc;
                    }, [])
                    .map((item, i) => (
                        <PaginationItem key={i}>
                            {item === "ellipsis" ? (
                                <PaginationEllipsis />
                            ) : (
                                <PaginationLink
                                    href="#"
                                    isActive={item === currentPage}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onPageChange(item as number);
                                    }}
                                >
                                    {item}
                                </PaginationLink>
                            )}
                        </PaginationItem>
                    ))}

                <PaginationItem>
                    <PaginationNext
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            onPageChange(currentPage + 1);
                        }}
                    />
                </PaginationItem>
            </PaginationContent>

            {/* Phần "Đi đến trang" */}
            <div className="ml-30 flex items-center gap-2">
                <label htmlFor="gotoPage" className="text-sm text-gray-700">
                    Đi đến trang:
                </label>
                <input
                    id="gotoPage"
                    type="number"
                    min={1}
                    max={totalPages}
                    value={gotoPage}
                    onChange={(e) => setGotoPage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && onGotoPage()}
                    className="w-24 h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    onClick={onGotoPage}
                    disabled={!isGotoValid()}
                    className={`px-4 h-10 rounded-md text-sm transition ${isGotoValid()
                            ? "bg-blue-500 text-white hover:bg-blue-600"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                >
                    Đi
                </button>
                {error && <span className="text-red-500 text-sm ml-2">{error}</span>}
            </div>
        </Pagination>
    );
};

export default CustomPagination;
