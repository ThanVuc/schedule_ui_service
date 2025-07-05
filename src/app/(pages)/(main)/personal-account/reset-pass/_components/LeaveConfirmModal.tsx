


"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCircleCheck,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  onStay: () => void;
  onLeave: () => void;
};

const LeaveConfirmModal: React.FC<Props> = ({ onStay, onLeave }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md text-center">
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-yellow-100 p-3 rounded-full">
            <FontAwesomeIcon icon={faExclamationCircle} className="text-yellow-500 w-6 h-6" />
          </div>
          <div className="text-left">
            <h2 className="text-lg font-semibold text-gray-800">
              Bạn có chắc chắn muốn rời khỏi trangg?
            </h2>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
              Bạn đang chỉnh sửa nội dung và thay đổi hiện tại chưa được lưu.
              <br />
              Nếu bạn rời khỏi trang lúc này, mọi chỉnh sửa sẽ bị mất.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={onStay}
            className="flex items-center gap-2 border border-blue-500 text-blue-500 font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 transition"
          >
            <FontAwesomeIcon icon={faCircleXmark} className="text-red-500" />
            Ở lại trang
          </button>
          <button
            onClick={onLeave}
            className="flex items-center gap-2 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            <FontAwesomeIcon icon={faCircleCheck} className="text-green-300" />
            Rời khỏi trang
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaveConfirmModal;
