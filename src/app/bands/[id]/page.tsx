import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { bands } from "@/data/bands";

type BandDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function BandDetailPage({ params }: BandDetailPageProps) {
  const { id } = await params;
  const band = bands.find((b) => b.id === Number(id));

  if (!band) {
    notFound();
  }

  return (
    <main className="band-detail-page">
  <Link href="/" className="back-link">
    ← กลับไป Favorite Bands
  </Link>

  <header className="band-detail-header">
    <h1>{band.name}</h1>
    <p>Members of the band</p>
  </header>

  <section className="members-grid">
    {band.members.map((member) => (
      <article className="member-card" key={member.id}>
        <div className="member-image">
          <Image
            src={member.image}
            alt={member.name}
            width={400}
            height={400}
          />
        </div>

        <div className="member-info">
          <h2>{member.name}</h2>
          <p>{member.role}</p>
        </div>
      </article>
    ))}
  </section>
</main>
  );
}