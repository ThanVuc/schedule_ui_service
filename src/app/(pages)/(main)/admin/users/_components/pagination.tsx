import { IFUser } from "@/app/model/user";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationComponentProps {
    currentPage: number;
    listUser: IFUser[];
    onPageChange: (page: number) => void;
}
const itemsPerPage = 6;
const PaginationComponent = ({ currentPage, onPageChange, listUser }: PaginationComponentProps) => {
    const totalPages = Math.ceil(listUser.length / itemsPerPage);
    const getPageNumbers = (current: number, total: number, maxVisible: number = 5) => {
        const half = Math.floor(maxVisible / 2);
        let start = Math.max(1, current - half);
        const end = Math.min(total, start + maxVisible - 1);
        if (end - start + 1 < maxVisible) {
            start = Math.max(1, end - maxVisible + 1);
        }
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationLink
                        href="#"
                        isActive={currentPage === 1}
                        onClick={() => onPageChange(1)}
                    >
                        <ChevronsLeft />
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationPrevious
                        href="#"
                        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
                    />
                </PaginationItem>
                {getPageNumbers(currentPage, totalPages).map((page) => (
                    <PaginationItem key={page}>
                        <PaginationLink
                            href="#"
                            isActive={currentPage === page}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    {totalPages > 5 && currentPage < totalPages - 2 && <PaginationEllipsis />}
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext
                        href="#"
                        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        href="#"
                        isActive={currentPage === totalPages}
                        onClick={() => onPageChange(totalPages)}
                    >
                        <ChevronsRight />
                    </PaginationLink>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default PaginationComponent;