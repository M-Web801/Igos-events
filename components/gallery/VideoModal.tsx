"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

interface VideoModalProps {
  open: boolean;
  video: string;
  title: string;
  onClose: () => void;
}

export default function VideoModal({
  open,
  video,
  title,
  onClose,
}: VideoModalProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      window.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md overflow-hidden rounded-3xl bg-black shadow-2xl"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#D4AF37]"
        >
          <X size={20} strokeWidth={2} />
        </button>

        {/* Video */}
        <video
          src={video}
          controls
          autoPlay
          playsInline
          className="max-h-[80vh] w-full object-contain"
        />

        {/* Video Title */}
        <div className="bg-black px-5 py-4">
          <h3 className="font-heading text-xl text-white">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}