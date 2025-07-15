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
import { PaginationModel } from "@/models/pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { use, useEffect } from "react";

interface PaginationComponentProps {
    paginationModel: PaginationModel;
    onPageChange: (page: number) => void;
}
const PaginationComponent = ({ paginationModel, onPageChange }: PaginationComponentProps) => {
    const getPageNumbers = (currentPage: number, totalPages: number, maxVisible: number = 5) => {
        const half = Math.floor(maxVisible / 2);
        let start = Math.max(1, currentPage - half);
        const end = Math.min(totalPages, start + maxVisible - 1);
        if (end - start + 1 < maxVisible) {
            start = Math.max(1, end - maxVisible + 1);
        }
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    const pageNumbers = getPageNumbers(paginationModel.page, paginationModel.total_pages);
    const showStartEllipsis = pageNumbers[0] > 2;
    const showEndEllipsis = pageNumbers[pageNumbers.length - 1] < paginationModel.total_pages - 1;
    const searchParams = useSearchParams();
    const router = useRouter();

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationLink
                        onClick={() => onPageChange(1)}
                        className={paginationModel.page === 1 ? "pointer-events-none opacity-50" : ""}
                    >
                        <ChevronsLeft />
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationPrevious
                        onClick={() => onPageChange(Math.max(paginationModel.page - 1, 1))}
                        className={!paginationModel.has_prev ? "pointer-events-none opacity-50" : ""}
                    />
                </PaginationItem>
                {showStartEllipsis && (
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                )}
                {pageNumbers.map((pageNum) => (
                    <PaginationItem key={pageNum}>
                        <PaginationLink
                            isActive={pageNum === paginationModel.page}
                            onClick={() => onPageChange(pageNum)}
                        >
                            {pageNum}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                {showEndEllipsis && (
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                )}
                <PaginationItem>
                    <PaginationNext
                        onClick={() => onPageChange(Math.min(paginationModel.page + 1, paginationModel.total_pages))}
                        className={!paginationModel.has_next ? "pointer-events-none opacity-50" : ""}
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        onClick={() => onPageChange(paginationModel.total_pages)}
                        className={paginationModel.page === paginationModel.total_pages ? "pointer-events-none opacity-50" : ""}
                    >
                        <ChevronsRight />
                    </PaginationLink>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default PaginationComponent;