
  "use client";
  import React, { useEffect, useState } from "react";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faTimesCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

  export type ToastType = {
    id: number;
    type: "success" | "error";
    message: string;
    description: string;
  };

  type Props = ToastType & {
    onClose: () => void;
  };

  const Toast: React.FC<Props> = ({ message, description, type, onClose }) => {
    const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";
    const icon = type === "success" ? faCheckCircle : faTimesCircle;
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => handleClose(), 5000);
      return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
      setIsClosing(true);
      setTimeout(() => onClose(), 300);
    };

    return (
      <div
        className={`
          w-96 max-w-[90vw] rounded-lg shadow-lg text-white px-4 py-3
          transition-all duration-300 ease-in-out
          ${bgColor}
          ${isClosing ? "opacity-0 translate-y-2 scale-95" : "opacity-100 translate-y-0 scale-100"}
        `}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex gap-3">
            <FontAwesomeIcon icon={icon} className="text-xl mt-1" />
            <div>
              <p className="font-semibold">{message}</p>
              <p className="text-sm">{description}</p>
            </div>
          </div>
          <button className="text-white text-lg" onClick={handleClose}>
            <FontAwesomeIcon icon={faTimesCircle} />
          </button>
        </div>
      </div>
    );
  };

  export default Toast;
