import Image from "next/image";
import Link from "next/link";
import type { Band } from "@/types/band";

type BandCardProps = {
  band: Band;
  isFollowing: boolean;
  onToggleFollow: (id: number) => void;
  likeCount: number;
  onLike: (id: number) => void;
};

export default function BandCard({
  band,
  isFollowing,
  onToggleFollow,
  likeCount,
  onLike,
}: BandCardProps) {
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
        <p className="founded">-founded: {band.yearFounded}</p>
        <p className="genre">{band.genre}</p>
        <p className="description">{band.description}</p>

        <div className="band-actions">
          <button
            type="button"
            aria-pressed={isFollowing}
            onClick={() => onToggleFollow(band.id)}
          >
            {isFollowing ? "เลิกติดตาม" : "ติดตาม"}
          </button>

          <button type="button" onClick={() => onLike(band.id)}>
            ถูกใจ ({likeCount})
          </button>
        </div>

        <div className="members-heading">
          <h3>{band.type === "solo" ? "Artist" : "Members"}</h3>
          <Link href={`/bands/${band.id}`}>ดูรูปสมาชิกวง</Link>
        </div>

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