"use client";

import { useState, type ChangeEvent } from "react";
import type { Band } from "@/types/band";
import BandCard from "./BandCard";

type BandExplorerProps = {
  bands: Band[];
};

export default function BandExplorer({ bands }: BandExplorerProps) {
  // ---- state ทั้งหมด ----
  const [keyword, setKeyword] = useState("");
  const [followedIds, setFollowedIds] = useState<number[]>([]);
  const [likeCounts, setLikeCounts] = useState<Record<number, number>>({});
  const [sortBy, setSortBy] = useState<"name" | "year">("name");

  // ---- ฟังก์ชัน handle ทั้งหมด ----
  function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value);
  }

  function handleToggleFollow(id: number) {
    setFollowedIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((followedId) => followedId !== id)
        : [...prevIds, id]
    );
  }

  function handleLike(id: number) {
    setLikeCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] ?? 0) + 1,
    }));
  }

  function handleSortChange(event: ChangeEvent<HTMLSelectElement>) {
    setSortBy(event.target.value as "name" | "year");
  }

  function handleClearFilters() {
    setKeyword("");
    setFollowedIds([]);
    setSortBy("name");
  }

  // ---- ค่าที่คำนวณได้ (Derived State) ----
  const searchText = keyword.trim().toLowerCase();

  const filteredBands = bands.filter((band) =>
    band.name.toLowerCase().includes(searchText)
  );

  const visibleBands = filteredBands.slice().sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    return a.yearFounded - b.yearFounded;
  });

  const followedCount = followedIds.length;

  // ---- JSX ----
  return (
    <>
      <div className="bands-toolbar">
        <input
          type="search"
          aria-label="ค้นหาวงดนตรี"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="ค้นหาชื่อวงดนตรี"
        />

        <select aria-label="เรียงลำดับ" value={sortBy} onChange={handleSortChange}>
          <option value="name">เรียงตามชื่อวง</option>
          <option value="year">เรียงตามปีที่ก่อตั้ง</option>
        </select>

        <button type="button" onClick={handleClearFilters}>
          ล้างเงื่อนไขทั้งหมด
        </button>

        <p>กำลังติดตาม: {followedCount} วง</p>
      </div>

      {visibleBands.length === 0 ? (
        <p className="noBand">ไม่พบวงดนตรีที่ตรงกับเงื่อนไข</p>
      ) : (
        <section className="band-grid">
          {visibleBands.map((band) => (
            <BandCard
              key={band.id}
              band={band}
              isFollowing={followedIds.includes(band.id)}
              onToggleFollow={handleToggleFollow}
              likeCount={likeCounts[band.id] ?? 0}
              onLike={handleLike}
            />
          ))}
        </section>
      )}
    </>
  );
}