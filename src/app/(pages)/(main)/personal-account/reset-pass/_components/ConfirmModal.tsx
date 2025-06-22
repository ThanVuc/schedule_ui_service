"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

type ConfirmModalProps = {
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmModal: React.FC<ConfirmModalProps> = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm text-center animate-fade-in">
        <h2 className="text-xl font-semibold mb-2">Xác nhận chỉnh sửa</h2>
        <p className="text-gray-600 mb-6">Bạn có chắc muốn lưu thay đổi?</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-red-600 font-semibold flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faTimes} />
            Hủy
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-semibold flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faCheck} />
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
