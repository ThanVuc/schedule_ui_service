"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

import ConfirmModal from "./_components/ConfirmModal";
import LeaveConfirmModal from "./_components/LeaveConfirmModal";
import Toast, { ToastType } from "@/components/Toast";

export default function ResetPasswordPage() {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [confirmError, setConfirmError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [toasts, setToasts] = useState<ToastType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLeaveModal, setShowLeaveModal] = useState(false);

  const router = useRouter();

  const isFormDirty =
    oldPassword !== "" || newPassword !== "" || confirmPassword !== "";

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isFormDirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isFormDirty]);

  const showToast = (
    type: "success" | "error",
    message: string,
    description: string
  ) => {
    const id = Date.now();
    setToasts((prev) => [{ id, type, message, description }, ...prev]);
  };

  const validatePassword = (password: string): boolean => {
    const minLength = /.{8,}/;
    const hasUpperCase = /[A-Z]/;
    const hasNumber = /[0-9]/;
    const hasSpecial = /[!@#$%^&*.,]/;

    return (
      minLength.test(password) &&
      hasUpperCase.test(password) &&
      hasNumber.test(password) &&
      hasSpecial.test(password)
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");
    setConfirmError("");

    if (!validatePassword(newPassword)) {
      setPasswordError(
        "Mật khẩu phải có ít nhất 8 ký tự, 1 chữ hoa, 1 số và 1 ký tự đặc biệt (!@#$%^&*.,)"
      );
      showToast(
        "error",
        "Thay đổi mật khẩu thất bại",
        "Mật khẩu không đáp ứng yêu cầu bảo mật."
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setConfirmError("Mật khẩu xác nhận không khớp.");
      return;
    }

    setIsModalOpen(true);
  };

  const handleModalConfirm = () => {
    showToast(
      "success",
      "Thay đổi thành công",
      "Mật khẩu của bạn đã được cập nhật!"
    );
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setIsModalOpen(false);
  };

  const handleModalCancel = () => {
    showToast("error", "Hủy thay đổi", "Bạn đã hủy thao tác cập nhật mật khẩu.");
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-pink-100 px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-xl p-5 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-3">Đặt Lại Mật Khẩu</h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Nhập mật khẩu hiện tại của bạn và chọn mật khẩu mới
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 text-sm mb-2">Nhập mật khẩu cũ</label>
            <div className="relative">
              <input
                type={showOld ? "text" : "password"}
                className="w-full border text-sm rounded-lg px-4 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Nhập mật khẩu hiện tại"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <span
                className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
                onClick={() => setShowOld(!showOld)}
              >
                <FontAwesomeIcon icon={showOld ? faEyeSlash : faEye} />
              </span>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-2">Mật Khẩu Mới</label>
            <div className="relative">
              <input
                type={showNew ? "text" : "password"}
                className={`w-full border text-sm rounded-lg px-4 py-2.5 pr-10 focus:outline-none focus:ring-2 ${
                  passwordError ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
                }`}
                placeholder="Nhập mật khẩu mới"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <span
                className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
                onClick={() => setShowNew(!showNew)}
              >
                <FontAwesomeIcon icon={showNew ? faEyeSlash : faEye} />
              </span>
            </div>
            <p className={`text-xs mt-1 ${passwordError ? "text-red-500" : "text-gray-400"}`}>
              Mật khẩu phải có ít nhất 8 ký tự, chữ hoa, số và ký tự đặc biệt
            </p>
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-2">Xác nhận lại mật khẩu</label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                className={`w-full border text-sm rounded-lg px-4 py-2.5 pr-10 focus:outline-none focus:ring-2 ${
                  confirmError ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
                }`}
                placeholder="Xác nhận lại mật khẩu"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span
                className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                <FontAwesomeIcon icon={showConfirm ? faEyeSlash : faEye} />
              </span>
            </div>
            {confirmError && <p className="text-red-500 text-xs mt-1">{confirmError}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-lg py-2.5 text-sm font-semibold hover:bg-blue-600 transition shadow"
          >
            Xác Nhận Thay Đổi
          </button>
        </form>

        <div className="text-center mt-5">
          <button
            type="button"
            onClick={() => {
              if (isFormDirty) {
                setShowLeaveModal(true);
              } else {
                router.back();
              }
            }}
            className="text-sm text-blue-500 hover:underline"
          >
            Quay Lại Đăng Nhậpp
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 mt-5">
          Hãy đảm bảo mật khẩu mới của bạn an toàn và duy nhất
        </p>
      </div>

      <div className="fixed top-6 right-6 z-50 flex flex-col gap-4">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            type={toast.type}
            message={toast.message}
            description={toast.description}
            onClose={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
          />
        ))}
      </div>

      {isModalOpen && (
        <ConfirmModal onConfirm={handleModalConfirm} onCancel={handleModalCancel} />
      )}

      {showLeaveModal && (
        <LeaveConfirmModal
          onStay={() => setShowLeaveModal(false)}
          onLeave={() => {
            setShowLeaveModal(false);
            router.back();
          }}
        />
      )}
    </div>
  );
}
