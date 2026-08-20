import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="group flex h-full flex-col rounded-[var(--radius-lg)] border border-primary/10 bg-surface p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-lg">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-container transition-colors duration-300 group-hover:bg-primary">
        <Icon
          className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-white"
          strokeWidth={1.8}
        />
      </div>

      <h3 className="mt-8 text-2xl font-semibold text-foreground">
        {service.title}
      </h3>

      <p className="mt-4 flex-1 leading-7 text-secondary">
        {service.description}
      </p>

      <Link
        href={service.href}
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3"
      >
        Enquire Now

        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}