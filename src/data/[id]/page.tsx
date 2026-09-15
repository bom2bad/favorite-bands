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
    <main className="band-detail">
      <Link href="/bands" className="back-link">
        ← กลับไปหน้ารายการวง
      </Link>

      <h1>{band.name}</h1>
      <p className="genre">{band.genre}</p>

      <h2>{band.type === "solo" ? "Artist" : "Members"}</h2>

      <section className="member-grid">
        {band.members.map((member) => (
          <div key={member.id} className="member-card">
            <Image
              src={member.image}
              alt={member.name}
              width={200}
              height={200}
            />
            <strong>{member.name}</strong>
            <span>{member.role}</span>
          </div>
        ))}
      </section>
    </main>
  );
}