import React, { useState, useEffect, useRef } from "react";
import { FaDownload, FaTimes } from "react-icons/fa";

const InstallBanner = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false); // Controls if the component is mounted/renderable
  const [showAnimation, setShowAnimation] = useState(false); // Controls the CSS slide in/out
  const [isIOS, setIsIOS] = useState(false);

  // Ref to track if the user EXPLICITLY closed it.
  // We use a Ref so the scroll listener can read the immediate value without stale closures.
  const userDismissedRef = useRef(false);

  // 1. INITIALIZATION
  useEffect(() => {
    // Check Status
    const isStandalone = window.matchMedia(
      "(display-mode: standalone)"
    ).matches;
    if (isStandalone) return;

    // Check Cooldown (Local Storage)
    const dismissedTime = localStorage.getItem("pwaDismissTimestamp");
    if (dismissedTime) {
      const timePassed = Date.now() - parseInt(dismissedTime, 10);
      const fiveMinutes = 5 * 60 * 1000;
      if (timePassed < fiveMinutes) {
        userDismissedRef.current = true; // Mark as dismissed so scroll doesn't trigger it
        return;
      }
    }

    // Detect iOS
    const isDeviceIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
    setIsIOS(isDeviceIOS);

    // Trigger Helper
    const triggerBanner = () => {
      // Only show if not previously dismissed by user in this session logic
      if (!userDismissedRef.current) {
        setIsVisible(true);
        setTimeout(() => setShowAnimation(true), 100);
      }
    };

    // Install Event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      triggerBanner();
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // iOS Fallback
    let iosTimer;
    if (isDeviceIOS) {
      iosTimer = setTimeout(triggerBanner, 3000);
    }

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      if (iosTimer) clearTimeout(iosTimer);
    };
  }, []);

  // 2. SMART SCROLL LOGIC
  useEffect(() => {
    // If the component isn't "active" (e.g. installed or on cooldown), don't listen to scroll
    if (!isVisible) return;

    const handleScroll = () => {
      // If the user explicitly closed it, STOP. Do not show it again.
      if (userDismissedRef.current) return;

      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight; // 100vh

      if (scrollPosition > threshold) {
        // Scrolled DOWN past 100vh -> Hide it (Slide Out)
        setShowAnimation(false);
      } else {
        // Scrolled UP within 100vh -> Show it (Slide In)
        setShowAnimation(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  // 3. HANDLERS
  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response: ${outcome}`);
      setDeferredPrompt(null);
      handleManualDismiss();
    } else if (isIOS) {
      alert(
        "To install on iPhone:\n1. Tap the 'Share' button below 🛫\n2. Select 'Add to Home Screen' ➕"
      );
    }
  };

  // Called when user CLICKS the 'X' button
  const handleManualDismiss = () => {
    userDismissedRef.current = true; // Set the "Explicitly Closed" flag
    setShowAnimation(false); // Animate out immediately

    // Wait for animation, then unmount and save to storage
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem("pwaDismissTimestamp", Date.now().toString());
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-[68px] left-0 w-full z-[998] pointer-events-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
        <div
          className={`
            pointer-events-auto 
            bg-gray-900/95 backdrop-blur-md text-white 
            p-2 pl-3 pr-2 rounded-lg shadow-2xl border-l-4 border-[#FF5733] 
            flex items-center gap-3 max-w-[300px]
            transform transition-all duration-700 ease-out
            ${
              showAnimation
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }
          `}
        >
          <div className="bg-[#FF5733] p-1.5 rounded-full flex-shrink-0 shadow-lg">
            <FaDownload className="text-white text-xs" />
          </div>

          <div className="flex flex-col mr-2">
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

            {/* Using handleManualDismiss ensures it stays gone */}
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
    </div>
  );
};

export default InstallBanner;
