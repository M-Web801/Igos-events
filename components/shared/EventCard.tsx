import Image from "next/image";

type EventCardProps = {
  image: string;
  title: string;
  location: string;
  date: string;
};

export default function EventCard({
  image,
  title,
  location,
  date,
}: EventCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl bg-primary text-background shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <p className="mt-2 text-gray-600">
          {location}
        </p>

        <p className="text-sm text-orange-500">
          {date}
        </p>
      </div>
    </article>
  );
}