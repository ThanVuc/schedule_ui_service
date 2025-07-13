"use client";

import React from "react";
import { BanIcon, CheckCircleIcon } from "@/components/icon";
import { Curtain } from "@/components/common/Curtain";

interface Props {
  show: boolean;
  onClose: (confirmed: boolean) => void;
  isReactivate: boolean;
}

const ConfirmDeactivateModal: React.FC<Props> = ({ show, onClose, isReactivate }) => {
  if (!show) return null;

  const title = isReactivate ? "Xác nhận kích hoạt lại vai trò" : "Xác nhận vô hiệu hóa vai trò";
  const icon = isReactivate ? <CheckCircleIcon color="green" /> : <BanIcon color="red" />;
  const description = isReactivate
    ? "Vai trò sẽ được kích hoạt lại và người dùng có thể tiếp tục sử dụng."
    : "Người dùng sẽ không thể đăng nhập cho đến khi vai trò được kích hoạt lại.";
  const actionLabel = isReactivate ? "Kích hoạt" : "Vô hiệu hóa";
  const actionBgColor = isReactivate ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700";

  return (
    <Curtain onClose={onClose}>
      <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6">
        <h2 className={`text-lg font-bold text-center ${isReactivate ? "text-green-600" : "text-red-600"}`}>
          {title}
        </h2>
        <div className="flex justify-center my-4">
          {icon}
        </div>
        <p className="text-center text-sm text-gray-700 mb-2">
          Bạn có chắc chắn muốn {isReactivate ? "kích hoạt lại" : "vô hiệu hóa"} vai trò này không?
        </p>
        <p className="text-center text-xs text-gray-500">{description}</p>
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={() => onClose(false)}
            className="px-4 py-2 rounded border text-sm text-gray-700 hover:bg-gray-100 transition"
          >
            Hủy
          </button>
          <button
            onClick={() => onClose(true)}
            className={`px-4 py-2 rounded text-white text-sm transition ${actionBgColor}`}
          >
            {actionLabel}
          </button>
        </div>
      </div>
    </Curtain>
  );
};

export default ConfirmDeactivateModal;

