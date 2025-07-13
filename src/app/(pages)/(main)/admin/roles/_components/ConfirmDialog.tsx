
"use client";
import React from "react";
import { TriangleExclamationIcon } from "@/components/icon";
import { Curtain } from "@/components/common/Curtain";

interface ConfirmDialogProps {
    open: boolean;
    title?: string;
    message?: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
    open,
    title = "Xác nhận",
    message = "Bạn có chắc chắn muốn thực hiện thao tác này?",
    onConfirm,
    onCancel,
}) => {
    if (!open) return null;

    return (
        <Curtain>
            <div className="bg-white rounded-lg p-5 max-w-sm w-full shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                    <TriangleExclamationIcon className="w-6 h-6 text-yellow-500" />
                    <h3 className="text-sm font-semibold">{title}</h3>
                </div>
                <p className="text-xs text-gray-600 mb-4">{message}</p>
                <div className="flex justify-end gap-2 text-xs">
                    <button
                        onClick={onCancel}
                        className="px-3 py-1.5 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700"
                    >
                        Hủy
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white"
                    >
                        Xác nhận
                    </button>
                </div>
            </div>
        </Curtain>
    );
};

export default ConfirmDialog;
