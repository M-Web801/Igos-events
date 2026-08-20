import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  icon: LucideIcon;
}

export default function AddOnCard({ title, icon: Icon }: Props) {
  return (
    <article className="group flex flex-col items-center rounded-[var(--radius-lg)] border border-primary/10 bg-surface p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-md">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-container transition-colors duration-300 group-hover:bg-primary">
        <Icon
          className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-white"
          strokeWidth={1.8}
        />
      </div>

      <h3 className="mt-6 text-xl font-semibold text-foreground">
        {title}
      </h3>
    </article>
  );
}