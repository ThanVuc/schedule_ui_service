    // components/ConfirmDialog.tsx
    "use client";
    import React from "react";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

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
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-5 max-w-sm w-full shadow-lg">
            <div className="flex items-center gap-3 mb-3">
            <FontAwesomeIcon icon={faTriangleExclamation} className="text-yellow-500 h-5 w-5" />
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
        </div>
    );
    };

    export default ConfirmDialog;
