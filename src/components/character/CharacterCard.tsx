import { GetCharactersQuery } from "@/__generated__/graphql";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type CharacterCardProps = {
  character: NonNullable<
    NonNullable<GetCharactersQuery["characters"]>["results"]
  >[number];
};

export default function CharacterCard({ character }: CharacterCardProps) {
  if (!character) {
    return null; // Handle case where character is undefined
  }

  // Determine status color class based on character status
  const statusClass =
    character.status === "Alive"
      ? "status-alive"
      : character.status === "Dead"
      ? "status-dead"
      : "status-unknown";

  return (
    <Link href={`/character/${character.id}`}>
      <div className="bg-[var(--card-bg)] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
        <div className="relative h-48 w-full">
          <Image
            src={character.image || "/images/character-placeholder.png"}
            alt={character.name || "Character"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={parseInt(character.id ?? "0") <= 4} // Prioritize loading first few images
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold truncate hover:text-[var(--primary)]">
            {character.name}
          </h2>

          <div className="flex items-center mt-1">
            <span
              className={clsx(
                "inline-block w-2 h-2 rounded-full mr-2",
                statusClass
              )}
            ></span>
            <span className="text-sm">
              {character.status} - {character.species}
            </span>
          </div>

          {character.type && (
            <p className="text-xs text-[var(--muted)] mt-1">
              Type: {character.type}
            </p>
          )}

          <div className="mt-3 pt-2 border-t border-[var(--border)]">
            <p className="text-xs text-[var(--muted)]">Last known location:</p>
            <p className="text-sm truncate">{character.location?.name}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
