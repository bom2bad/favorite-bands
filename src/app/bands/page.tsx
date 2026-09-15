import { useState } from "react";
import BandCard from "@/components/BandCard";
import { bands } from "@/data/bands";

export default function BandsPage() {
  const [following, setFollowing] = useState<Record<number, boolean>>({});
  const [likes, setLikes] = useState<Record<number, number>>({});

  const handleToggleFollow = (id: number) => {
    setFollowing((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleLike = (id: number) => {
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

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
            isFollowing={following[band.id] || false}
            onToggleFollow={handleToggleFollow}
            likeCount={likes[band.id] || 0}
            onLike={handleLike}
          />
        ))}
      </section>
    </main>
  );
}