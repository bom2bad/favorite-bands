import BandCard from "@/components/BandCard";
import { bands } from "@/data/bands";

export default function BandsPage() {
  return (
    <main className="bands-page">
      <header className="bands-header">
        <p className="subtitle">MY MUSIC COLLECTION</p>
        <h1>Favorite Bands</h1>
        <p>
          Artists and bands that I enjoy listening to.
        </p>
      </header>

      <section className="bands-grid">
        {bands.map((band) => (
          <BandCard
            key={band.id}
            band={band}
          />
        ))}
      </section>
    </main>
  );
}
