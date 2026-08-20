"use client";

import { useState } from "react";
import { Play } from "lucide-react";

import SectionHeader from "@/components/ui/SectionHeader";
import VideoModal from "./VideoModal";

const videos = [
  {
    id: 1,
    title: "Wedding Highlights",
    file: "/videos/wedding-highlight.mp4",
  },
  {
    id: 2,
    title: "Proposal Highlights",
    file: "/videos/proposal-highlight.mp4",
  },
  {
    id: 3,
    title: "Birthday Highlights",
    file: "/videos/birthday-highlight.mp4",
  },
  {
    id: 4,
    title: "Kiddies Celebration",
    file: "/videos/kiddies-highlight.mp4",
  },
  {
    id: 5,
    title: "Prom Night",
    file: "/videos/prom-night.mp4",
  },
  {
    id: 6,
    title: "Signature Bar Experience",
    file: "/videos/cocktail-experience.mp4",
  },
];

export default function MomentsInMotion() {
  const [selectedVideo, setSelectedVideo] = useState<{
    file: string;
    title: string;
  } | null>(null);

  return (
    <section className="bg-[#F1ECE5] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label="Moments in Motion"
          title="Experience The Celebration"
          align="center"
        />

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8">
          {videos.map((video) => (
            <article
              key={video.id}
              onClick={() =>
                setSelectedVideo({
                  file: video.file,
                  title: video.title,
                })
              }
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative aspect-[3/5] overflow-hidden bg-black lg:aspect-[9/16]">
                <video
                  src={video.file}
                  preload="metadata"
                  muted
                  playsInline
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/35" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:ring-4 group-hover:ring-primary/30 lg:h-16 lg:w-16">
                    <Play
                      size={18}
                      fill="currentColor"
                      className="ml-1 text-primary lg:h-6 lg:w-6"
                    />
                  </div>
                </div>
              </div>

              <div className="p-4 lg:p-6">
                <h3 className="font-heading text-lg text-foreground lg:text-2xl">
                  {video.title}
                </h3>

                <p className="mt-2 hidden text-sm leading-6 text-primary lg:block">
                  Experience the celebration in motion.
                </p>
              </div>
            </article>
          ))}
        </div>

        <VideoModal
          open={selectedVideo !== null}
          video={selectedVideo?.file ?? ""}
          title={selectedVideo?.title ?? ""}
          onClose={() => setSelectedVideo(null)}
        />
      </div>
    </section>
  );
}