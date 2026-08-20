type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  maxWidth?: "md" | "lg";
};

export default function SectionHeader({
  label,
  title,
  description,
  align = "left",
  maxWidth = "md",
}: SectionHeaderProps) {
  const widthClass =
    maxWidth === "lg" ? "max-w-3xl" : "max-w-2xl";

  return (
    <div
      className={`${widthClass} ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <div
        className={`mb-4 flex items-center gap-3 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-10 bg-primary" />

        <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
          {label}
        </span>
      </div>

      <h2 className="font-heading text-[2rem] leading-[1.1] text-foreground md:text-[2.4rem] lg:text-[2.6rem] xl:text-[3rem]">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-secondary md:text-[17px] md:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}