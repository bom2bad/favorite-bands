import Image from "next/image";
import type { Band } from "@/types/band";

type BandCardProps = {
  band: Band;
};

export default function BandCard({ band }: BandCardProps) {
  return (
    <article className="band-card">
      <div className="band-image">
        <Image
          src={band.image}
          alt={band.name}
          width={600}
          height={400}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="band-content">
        <span className="band-type">
          {band.type === "solo" ? "Solo Artist" : "Band"}
        </span>

        <h2>{band.name}</h2>

        <p className="genre">
          {band.genre}
        </p>

        <p className="description">
          {band.description}
        </p>

        <h3>
          {band.type === "solo" ? "Artist" : "Members"}
        </h3>

        <ul>
          {band.members.map((member) => (
            <li key={member.id}>
              <strong>{member.name}</strong>
              <span> — {member.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}