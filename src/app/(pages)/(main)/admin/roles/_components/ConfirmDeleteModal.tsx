
  "use client";

  import React from "react";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faTrash } from "@fortawesome/free-solid-svg-icons";

  interface Props {
    show: boolean;
    roleName: string;
    onClose: (confirmed: boolean) => void;
  }

  const ConfirmDeleteModal: React.FC<Props> = ({ show, onClose }) => {
    if (!show) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/10">
        <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6">
          <div className="flex justify-center mb-4">
            <div className="bg-red-100 p-4 rounded-full">
              <FontAwesomeIcon icon={faTrash} className="w-6 h-6 text-red-500" />
            </div>
          </div>
          <h2 className="text-lg font-bold text-center text-red-600">Xác nhận xóa</h2>
          <p className="text-center text-sm text-gray-700 mt-4 mb-6">
            Bạn có chắc chắn muốnn xóa vai trò này?
          </p>
          <div className="flex justify-end gap-3">
            <button
              onClick={() => onClose(false)}
              className="px-4 py-2 rounded bg-gray-500 text-white text-sm hover:bg-gray-600 transition"
            >
              Hủy
            </button>
            <button
              onClick={() => onClose(true)}
              className="px-4 py-2 rounded bg-red-600 text-white text-sm hover:bg-red-700 transition"
            >
              Xóa
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default ConfirmDeleteModal;

