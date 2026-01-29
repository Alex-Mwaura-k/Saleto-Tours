import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FaDownload, FaTimes } from "react-icons/fa";

const InstallBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isIOS, setIsIOS] = useState(false);

  const userDismissedRef = useRef(false);

  useEffect(() => {
    const isStandalone = window.matchMedia(
      "(display-mode: standalone)",
    ).matches;
    if (isStandalone) return;

    const dismissedTime = localStorage.getItem("pwaDismissTimestamp");
    if (dismissedTime) {
      const timePassed = Date.now() - parseInt(dismissedTime, 10);
      if (timePassed < 5 * 60 * 1000) {
        userDismissedRef.current = true;
        return;
      }
    }

    const isDeviceIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
    setIsIOS(isDeviceIOS);

    const triggerBanner = () => {
      if (!userDismissedRef.current) {
        setIsVisible(true);
        setTimeout(() => setShowAnimation(true), 100);
      }
    };

    if (window.deferredPrompt) {
      setDeferredPrompt(window.deferredPrompt);
      triggerBanner();
    }

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      window.deferredPrompt = e;
      triggerBanner();
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    let iosTimer;
    if (isDeviceIOS) {
      iosTimer = setTimeout(triggerBanner, 2000);
    }

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
      if (iosTimer) clearTimeout(iosTimer);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const handleScroll = () => {
      if (userDismissedRef.current) return;

      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight * 0.5;

      if (scrollPosition > threshold) {
        setShowAnimation(false);
      } else {
        setShowAnimation(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response: ${outcome}`);
      setDeferredPrompt(null);
      window.deferredPrompt = null;
      handleManualDismiss();
    } else if (isIOS) {
      alert(
        "To install on iPhone:\n1. Tap the 'Share' button 🛫\n2. Select 'Add to Home Screen' ➕",
      );
    }
  };

  const handleManualDismiss = () => {
    userDismissedRef.current = true;
    setShowAnimation(false);
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem("pwaDismissTimestamp", Date.now().toString());
    }, 500);
  };

  if (!isVisible) return null;

  return createPortal(
    <div className="fixed top-[75px] left-0 w-full z-[9999] pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
        <div
          className={`
            pointer-events-auto 
            bg-gray-900/95 backdrop-blur-md text-white 
            p-2 pl-3 pr-2 rounded-lg shadow-2xl border-l-4 border-[#FF5733] 
            flex items-center gap-3 min-w-[280px] max-w-[320px]
            transform transition-all duration-500 ease-in-out
            ${
              showAnimation
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0 pointer-events-none"
            }
          `}
        >
          <div className="bg-[#FF5733] p-1.5 rounded-full flex-shrink-0 shadow-lg">
            <FaDownload className="text-white text-xs" />
          </div>

          <div className="flex flex-col mr-2 flex-grow">
            <span className="font-bold text-xs leading-tight">Install App</span>
            <span className="text-[10px] text-gray-400 leading-tight">
              Better experience
            </span>
          </div>

          <div className="flex items-center gap-2 border-l border-gray-700 pl-2">
            <button
              onClick={handleInstallClick}
              className="bg-[#FF5733] hover:bg-[#E64A19] text-white text-[10px] font-bold py-1.5 px-3 rounded-full shadow-md transition-transform hover:scale-105 whitespace-nowrap"
            >
              Install
            </button>

            <button
              onClick={handleManualDismiss}
              className="text-gray-400 hover:text-white transition p-1 rounded-full hover:bg-gray-800"
              aria-label="Dismiss"
            >
              <FaTimes className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default InstallBanner;
