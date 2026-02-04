import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";

const Notification = ({ isOpen, onClose, message, type = "success" }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  // Determine styles based on type
  const isSuccess = type === "success";
  const bgColor = isSuccess ? "bg-green-500" : "bg-red-500";
  const hoverColor = isSuccess ? "hover:bg-green-600" : "hover:bg-red-600";
  const textColor = isSuccess ? "text-green-100" : "text-red-100";
  const Icon = isSuccess ? FaCheckCircle : FaExclamationCircle;
  const title = isSuccess ? "Success!" : "Error";

  return createPortal(
    <div className="fixed top-20 left-0 w-full z-[9999] pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
        <div
          className={`pointer-events-auto transition-all duration-500 ease-out transform ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`}
        >
          <div
            className={`${bgColor} text-white px-5 py-3 rounded-lg shadow-2xl flex items-center gap-3 border-l-4 border-white/30 backdrop-blur-md`}
          >
            <Icon className="text-lg flex-shrink-0" />
            <div>
              <h4 className="text-sm font-bold leading-none">{title}</h4>
              <span
                className={`text-xs font-medium ${textColor} opacity-95 block mt-0.5`}
              >
                {message}
              </span>
            </div>
            <button
              onClick={onClose}
              className={`ml-3 ${hoverColor} rounded-full p-1 transition-colors`}
            >
              <FaTimes size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Notification;
