"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";

interface ImageLightboxProps {
  images: {
    image: string;
    alt: string;
    title: string;
  }[];

  currentIndex: number;
  open: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function ImageLightbox({
  images,
  currentIndex,
  open,
  onClose,
  onNext,
  onPrevious,
}: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!open) return;

      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrevious();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose, onNext, onPrevious]);

  if (!open) return null;

  const image = images[currentIndex];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl"
      >
        <button
          onClick={onClose}
          className="absolute right-2 top-2 z-20 rounded-full bg-white p-2 shadow-lg transition hover:scale-110"
        >
          <X size={22} />
        </button>

        <button
          onClick={onPrevious}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-3 transition hover:scale-110"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-3 transition hover:scale-110"
        >
          <ChevronRight />
        </button>

        <div className="overflow-hidden rounded-3xl">
          <Image
            src={image.image}
            alt={image.alt}
            width={1600}
            height={1100}
            className="h-auto max-h-[85vh] w-full object-contain"
            priority
          />
        </div>

        <div className="mt-6 text-center">
          <h3 className="font-heading text-3xl text-white">
            {image.title}
          </h3>

          <p className="mt-2 text-primary">
            {image.alt}
          </p>
        </div>
      </div>
    </div>
  );
}