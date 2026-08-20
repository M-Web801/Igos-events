export default function ResponseBanner() {
  return (
    <section className="overflow-hidden border-y border-primary/10 bg-white py-4">
      <div className="response-marquee flex whitespace-nowrap">
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className="flex shrink-0 items-center gap-8 pr-8"
          >
            <span className="text-sm font-medium tracking-wide text-secondary">
               We typically respond to all enquiries within 12 hours.
            </span>

            <span className="text-primary">•</span>

            <span className="text-sm font-medium tracking-wide text-secondary">
              Start your consultation with us.
            </span>

            <span className="text-primary">•</span>
          </div>
        ))}
      </div>
    </section>
  );
}