
"use client";
import React, { useCallback, useEffect, useState } from "react";
import { CancelIcon, CheckCircleIcon, CloseIcon } from "@/components/icon";

export interface ToastProps {
  id?: number | string;
  type: "success" | "error";
  message: string;
  description: string;
  onClose: () => void;
};

const Toast: React.FC<ToastProps> = ({ message, description, type, onClose }) => {
  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";
  const icon = type === "success" ? <CheckCircleIcon /> : <CancelIcon />;
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => onClose(), 300);
  }, [onClose]);

  useEffect(() => {
    const timer = setTimeout(() => handleClose(), 3000);
    return () => clearTimeout(timer);
  }, [handleClose]);

  return (
    <div
      className={`
          w-96 max-w-[90vw] rounded-lg shadow-lg text-white px-4 py-3
          transition-all duration-300 ease-in-out
          ${bgColor}
          ${isClosing ? "opacity-0 translate-y-2 scale-95" : "opacity-100 translate-y-0 scale-100"}
        `}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center justify-center gap-3">
          <span className="flex items-center justify-center text-xl">
            {icon}
          </span>
          <div>
            <p className="font-semibold">{message}</p>
            <p className="text-sm">{description}</p>
          </div>
        </div>
        <button className="text-white text-lg hover:cursor-pointer active:scale-105" onClick={handleClose}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default Toast;
