"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface Props {
  end: number;
  label: string;
  suffix?: string;
}

export default function StatCard({
  end,
  label,
  suffix = "",
}: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className="
        rounded-3xl
        border border-primary/15
        bg-surface-variant
        px-6 py-8
        text-center
        shadow-sm
        transition-all duration-300
        hover:-translate-y-2
        hover:border-primary/40
        hover:shadow-lg
        md:px-8 md:py-10
      "
    >
      {/* Number */}
      <h3 className="font-heading text-4xl leading-none text-primary md:text-5xl">
        {inView ? (
          <CountUp
            start={0}
            end={end}
            duration={2.5}
            suffix={suffix}
            separator=","
          />
        ) : (
          <>0{suffix}</>
        )}
      </h3>

      {/* Label */}
      <p className="mx-auto mt-4 max-w-[180px] text-sm leading-6 text-secondary md:text-base">
        {label}
      </p>
    </div>
  );
}